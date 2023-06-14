import {FC, FormEvent, useState} from "react";
import {useAppDispatch} from "store/hooks";
import {setEmployees} from "features/employeesSlice";
import {IAddEmployeeProps} from "./types";

import {addEmployees} from "utils/fetchEmployees";
import {getNewEmployeeDataFromForm} from "utils/getNewEmployeeDataFromForm";

import ShowElement from "components/showElement";

import './addEmployee.css';

const AddEmployee: FC<IAddEmployeeProps> = ({ showModalWindow, handleOpen, page }) => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const submitEmployee = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const newEmployee = getNewEmployeeDataFromForm(event.currentTarget);
            const newData = await addEmployees(page,  newEmployee);
            dispatch(setEmployees(newData));
            handleOpen()
        } catch {
            console.log('ooopss!!');
        }
        setLoading(false);
    };

    return (
        <div className={showModalWindow ? 'add_employee active' : 'add_employee'}>
            <ShowElement isShow={loading} fallback={<h2 style={{color: 'white', fontSize: '2rem'}}>Loading...</h2>}>
                <form onSubmit={submitEmployee}>
                    <input name='form_data' placeholder='Add name' type="text"/>
                    <input name='form_data' placeholder='Add surname' type="text"/>
                    <input name='form_data' placeholder='Add email' type="email"/>
                    <input name='form_data' placeholder='Add position' type="text"/>
                    <button type='submit'>Add</button>
                </form>

                <div className="close">
                    <button onClick={handleOpen}>Close</button>
                </div>
            </ShowElement>
        </div>
    );
};

export default AddEmployee;