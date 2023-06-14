import {ChangeEvent, FC, MouseEvent, useEffect, useState} from "react";
import {editTask, getEmployeesId} from "utils/fetchTasks";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {IEditModalProps} from "./types";
import {setEmployeesIds, setTasks} from "features/tasksSlice";
import { v4 as uuid } from 'uuid';

import ShowElement from "components/showElement";

import './editModal.css';



const EditModal:FC<IEditModalProps> = ( { taskId, page, handleEdit }) => {
    const {tasks, employeesIds} = useAppSelector(state => state.tasksSlice);
    const dispatch = useAppDispatch();
    const taskData = tasks.find(task => String(task.id) === taskId);
    const [loading, setLoading] = useState(false);
    const [inpsValues, setInpsValues] = useState({
        name: taskData!.name,
        description: taskData!.description,
        startDate: taskData!.startDate,
        endDate: taskData!.endDate,
        employeeId: taskData!.employeeId
    });

    useEffect(() => {
        const fetchEmployeesIds = async () => {
            try {
                const employeesIdsRes = await getEmployeesId();
                dispatch(setEmployeesIds(employeesIdsRes));
            } catch {
                console.log('oops!!');
            }
        };

        fetchEmployeesIds()
    }, []);

    const changeInpsValues = (event: ChangeEvent<HTMLInputElement>) => {
        setInpsValues(prevState =>  {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleClickEdit = async () => {
        setLoading(true);
        try {
            const tasksRes = await editTask(page, String(taskData!.id), inpsValues);
            dispatch(setTasks(tasksRes));
            handleEdit();
        } catch {
            console.log('oops!')
        }
        setLoading(false);
    }

    const onClickSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setInpsValues(prevState => {
            return {
                ...prevState,
                employeeId: event.target.value
            }
        })
    }

    return (
        <div className='edit'>
            <ShowElement isShow={loading} fallback={<h2 style={{color: 'white', fontSize: '2rem'}}>Loading...</h2>}>
                <div className="edit_inner">
                    <input onChange={changeInpsValues} name='name' value={inpsValues.name} placeholder='Edit name' type="text"/>
                    <input onChange={changeInpsValues} name='startDate' value={inpsValues.startDate} type="date"/>
                    <input onChange={changeInpsValues} name='endDate' value={inpsValues.endDate} type="date"/>
                    <input onChange={changeInpsValues} name='description' value={inpsValues.description} placeholder='Edit description' type="text"/>
                    <select onChange={onClickSelect} value={inpsValues.employeeId}>
                        {employeesIds.map(employeeId => {
                            return (
                                <option key={uuid()} value={employeeId}>{employeeId}</option>
                            )
                        })}
                    </select>

                    <div className="btns">
                        <button onClick={handleClickEdit}>Yes</button>
                        <button>No</button>
                    </div>
                </div>
            </ShowElement>
        </div>
    )
};

export default EditModal;