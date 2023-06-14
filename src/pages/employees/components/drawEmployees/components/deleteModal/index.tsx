import {FC, useState} from "react";
import {useAppDispatch} from "store/hooks";
import {setEmployees} from "features/employeesSlice";

import {IDeleteModalProps} from "./types";
import {deleteEmployee} from "utils/fetchEmployees";

import ShowElement from "components/showElement";

import './deleteModal.css';

const DeleteModal:FC<IDeleteModalProps> = ({ page, show, name, surname, employeeId, handleOpenDeleteModal }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const handleDelete = async () => {
        setLoading(true);
        try {
            const newEmployeeData = await deleteEmployee(employeeId, page);
            dispatch(setEmployees(newEmployeeData));
            handleOpenDeleteModal();
        } catch {
            console.log('ooops!')
        }
        setLoading(false);
    };

    return (
        <div className={show ? 'delete_modal active' : 'delete_modal'}>
            <ShowElement isShow={loading} fallback={<h2 style={{color: 'white', fontSize: '2rem'}}>Loading...</h2>}>
                <div className="delete_modal_inner">
                    <p>Do you really want to delete the employee</p>
                    <h4>{`${name} ${surname}`}</h4>
                    <div className="btns">
                        <button onClick={handleDelete}>Yes</button>
                        <button onClick={() => handleOpenDeleteModal()}>No</button>
                    </div>
                </div>
            </ShowElement>
        </div>
    );
};

export default DeleteModal;