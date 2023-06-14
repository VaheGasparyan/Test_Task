import {FC, useState} from "react";
import {IDrawTasksProps} from "./types";
import {useAppSelector} from "store/hooks";

import { v4 as uuid } from 'uuid';

import AddTasks from "./components/addTasks";

import './drawTasks.css';


const DrawTasks:FC<IDrawTasksProps> = ({ page }) => {
    const {tasks} = useAppSelector(state => state.tasksSlice);
    const [showAddForm, setShowAddForm] = useState(false);

    const handleClick = () => {
        setShowAddForm(prevState => !prevState);
    }

    return (
        <section className='tasks'>
            {showAddForm &&  <AddTasks handleClick={handleClick} page={page} />}
            <div className='container'>
                <div className="tasks_inner">
                    {
                        tasks.map(task => {
                            return (
                                <div className='task' key={uuid()}>
                                    <h2><span>Name: </span>{task.name}</h2>
                                    <p><span>Start Date: </span>{task.startDate}</p>
                                    <p><span>End Date: </span>{task.endDate}</p>
                                    <p><span>Employee Id: </span>{task.employeeId}</p>
                                    <p><span>Description: </span>{task.description}</p>
                                </div>
                            )
                        })
                    }
                    <div className="btns">
                        <div className="add_btn">
                            <button onClick={handleClick}>Add Task+</button>
                        </div>
                        <div className="next_prev">
                            <button disabled={page === 1}>Prev</button>
                            <button disabled={page === 3}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DrawTasks;