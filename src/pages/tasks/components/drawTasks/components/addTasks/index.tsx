import {FC, FormEvent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {setEmployeesIds, setTasks} from "features/tasksSlice";

import {IAddTasksProps} from "./types";

import {getNewTask} from "utils/getNewTask";
import {addTask, getEmployeesId} from "utils/fetchTasks";
import { v4 as uuid } from 'uuid';

import ShowElement from "components/showElement";

import './addTasks.css';

const AddTasks:FC<IAddTasksProps> = ({ handleClick, page }) => {
    const { employeesIds } = useAppSelector(state => state.tasksSlice);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchEmployeesId = async () => {
            const employeesIdRes = await getEmployeesId();
            dispatch(setEmployeesIds(employeesIdRes))
        };

        fetchEmployeesId();
    }, []);

    const submitTask = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const task = getNewTask(event.currentTarget);
            const taskRes = await addTask(page, task);
            dispatch(setTasks(taskRes));
            handleClick()
        } catch {
            console.log('oopss!!')
        }
        setLoading(false)
    }

    return (
        <div className='add_tasks'>
            <ShowElement isShow={loading} fallback={<h2 style={{color: 'white', fontSize: '2rem'}}>Loading</h2>}>
                <form onSubmit={submitTask}>
                    <input name="form_data" placeholder='Add name' type="text"/>
                    <input name="form_data" type="date"/>
                    <input name="form_data" type="date"/>
                    <input name="form_data" placeholder='Add description' type="text"/>
                    <select name="form_data">
                        {employeesIds.map(employeeId => {
                            return (
                                <option key={uuid()} value={employeeId}>{employeeId}</option>
                            )
                        })}
                    </select>
                    <div className="btn">
                        <button type='submit'>Add</button>
                    </div>
                </form>
                <button onClick={handleClick}>Close</button>
            </ShowElement>
        </div>
    );
};

export default AddTasks;