import {FC, useState} from "react";
import {IDrawTasksProps} from "./types";
import {useAppSelector} from "store/hooks";

import {v4 as uuid} from 'uuid';
import {NextOrPrev} from "globalTypes/enums";

import AddTasks from "./components/addTasks";
import DeleteModal from "./components/deleteModal";
import EditModal from "./components/editModal";

import './drawTasks.css';


const DrawTasks:FC<IDrawTasksProps> = ({ page, addPage }) => {
    const {tasks} = useAppSelector(state => state.tasksSlice);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState({
        show: false,
        taskId: '',
        name: ''
    });
    const [showEdit, setShowEdit] = useState({
        show: false,
        taskId: ''
    })

    const handleClick = () => {
        setShowAddForm(prevState => !prevState);
    }

    const handleDelete = (name?: string, taskId?: string) => {
        if(name && taskId) {
            setShowDeleteModal(prevState => {
                return {
                    show: !prevState.show,
                    name,
                    taskId
                }
            })
        } else {
            setShowDeleteModal(prevState => {
                return {
                    ...prevState,
                    show: !prevState.show
                }
            })
        }
    }

    const handleEdit = (id?: string) => {
        if(id) {
            setShowEdit(prevState => {
                return {
                    ...prevState,
                    show: !prevState.show,
                    taskId: id
                }
            })
        } else {
            setShowEdit(prevState => {
                return {
                    ...prevState,
                    show: !prevState.show
                }
            })
        }
    }

    return (
        <section className='tasks'>
            {showAddForm &&  <AddTasks handleClick={handleClick} page={page} />}
            {showDeleteModal.show && <DeleteModal showDeleteModal={showDeleteModal} page={page} handleDelete={handleDelete} />}
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
                                    <div className="task_btns">
                                        <button onClick={() => handleEdit(String(task.id))}>Edit</button>
                                        <button onClick={() => handleDelete(task.name, String(task.id))}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="btns">
                        <div className="add_btn">
                            <button onClick={handleClick}>Add Task+</button>
                        </div>
                        <div className="next_prev">
                            <button onClick={() => addPage(NextOrPrev.PREV)} disabled={page === 1}>Prev</button>
                            <button onClick={() => addPage(NextOrPrev.NEXT)} disabled={page === 3}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
            { showEdit.show && <EditModal page={page} taskId={showEdit.taskId} handleEdit={handleEdit} /> }
        </section>
    );
};

export default DrawTasks;