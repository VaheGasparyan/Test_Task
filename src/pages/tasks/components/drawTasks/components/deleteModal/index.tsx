import {FC, useState} from "react";
import {useAppDispatch} from "store/hooks";
import {IDeleteModalProps} from "./types";
import {setTasks} from "features/tasksSlice";

import {deleteTask} from "utils/fetchTasks";

import ShowElement from "components/showElement";

import './deleteModal.css';

const DeleteModal:FC<IDeleteModalProps> = ({ showDeleteModal, page, handleDelete }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const handleDeleteTask = async () => {
        setLoading(true)
        try {
            const tasksRes = await deleteTask(page, showDeleteModal.taskId);
            dispatch(setTasks(tasksRes));
        } catch {
            console.log('ooops!!');
        }
        handleDelete();
        setLoading(false)
    };

    return (
        <div className='modal'>
            <ShowElement isShow={loading} fallback={<h2 style={{color: 'white', fontSize: '2rem'}}>Loading...</h2>}>
                <div className="modal_inner">
                    <p>Do you really want to delete this task</p>
                    <h2>{showDeleteModal.name}</h2>
                    <div className="btns">
                        <button onClick={handleDeleteTask}>Yes</button>
                        <button onClick={() => handleDelete()}>No</button>
                    </div>
                </div>
            </ShowElement>
        </div>
    )
};

export default DeleteModal;