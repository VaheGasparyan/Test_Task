import {FC, useState, ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {setEmployees} from "features/employeesSlice";

import {editEmployee} from "utils/fetchEmployees";
import {IEditModalProps} from "./types";

import ShowElement from "components/showElement";

import './editModal.css';

const EditModal:FC<IEditModalProps> = ({ editModal, employeeId, handleEdit, page }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const employee = useAppSelector(state => state.employeesSlice.employees.find(employee => String(employee.id) === String(employeeId)));
    const [inpsValue, setInpsValues] = useState({
        name: employee!.name,
        surname: employee!.surname,
        email: employee!.email,
        position: employee!.position
    });

    const editEmployeeData = async () => {
        setLoading(true)
        try {
            const editDataRes = await editEmployee(employeeId, inpsValue, page);
            dispatch(setEmployees(editDataRes));
            handleEdit();
        } catch {
            console.log('oopss!!')
        }
        setLoading(false);
    }

    const changeInpsValues = (event: ChangeEvent<HTMLInputElement>) => {
        setInpsValues(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className={editModal ? 'edit_modal active' : 'edit_modal'}>
            <ShowElement isShow={loading} fallback={<h2 style={{color: 'white', fontSize: '2rem'}}>Loading...</h2>}>
                <div className="edit_modal_inner">
                    <input onChange={changeInpsValues} placeholder='Edit name' name='name' value={inpsValue.name} type="text"/>
                    <input onChange={changeInpsValues} placeholder='Edit surname' name='surname' value={inpsValue.surname} type="text"/>
                    <input onChange={changeInpsValues} placeholder='Edit email' name='email' value={inpsValue.email} type="text"/>
                    <input onChange={changeInpsValues} placeholder='Edit position' name='position' value={inpsValue.position} type="text"/>
                    <div className="btn">
                        <button onClick={editEmployeeData}>Ok</button>
                    </div>
                </div>
                <button onClick={() => handleEdit()}>Close</button>
            </ShowElement>
        </div>
    );
};

export default EditModal;