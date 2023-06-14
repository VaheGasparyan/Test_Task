import {FC} from "react";
import {useAppSelector} from "store/hooks";
import {IDrawEmployeesProps} from "./types";
import {NextOrPrev} from "globalTypes/enums";

import {v4 as uuid} from 'uuid';

import './drawEmployees.css';


const DrawEmployees:FC<IDrawEmployeesProps> = ({ handleNextOrPrev, page }) => {
    const { employees } = useAppSelector(state => state.employeesSlice);

    return (
        <section className='employees'>
            <div className="container">
               <div className="employee_wrap">
                   {
                       employees.map(employee => {
                           return (
                               <div key={uuid()} className="employee">
                                   <h2><span>Name: </span>{employee.name}</h2>
                                   <p><span>Surname: </span>{employee.surname}</p>
                                   <p><span>Email: </span>{employee.email}</p>
                                   <p><span>Position: </span>{employee.position}</p>

                                   <div className="btns">
                                       <button>Edit</button>
                                       <button>Delete</button>
                                   </div>
                               </div>
                           )
                       })
                   }

                   <div className="control_btns">
                       <div className="add_btn">
                           <button>Add Employee+</button>
                       </div>
                       <div className="next_prev">
                           <button onClick={() => handleNextOrPrev(NextOrPrev.PREV)} disabled={page === 1}>Prev</button>
                           <button onClick={() => handleNextOrPrev(NextOrPrev.NEXT)} disabled={page === 3}>Next</button>
                       </div>
                   </div>
               </div>
            </div>

        </section>
    );
};

export default DrawEmployees;