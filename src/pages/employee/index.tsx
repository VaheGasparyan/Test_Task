import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {useParams} from "react-router-dom";

import {getEmployee, getEmployeeTasks} from "utils/fetchEmployees";
import {setEmployee, setEmployeesTasks} from "features/employeeSlice";
import {statusTypes} from "globalTypes/statusTypes";
import {ITasks} from "globalTypes/tasksTypes";
import { v4 as uuid } from 'uuid';


import ShowElement from "components/showElement";
import Loading from "components/loading";

import './employee.css';

const Employee = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const {employee, status, tasks} = useAppSelector(state => state.employeeSlice);
    const isShow = status === statusTypes.loading;

    useEffect(() => {
        try {
            const employeeRes = async () => {
                const employeeResponse = await getEmployee(String(id));
                dispatch(setEmployee(employeeResponse));
            };
            const tasksRes = async () => {
                const tasksData = await getEmployeeTasks();
                const filteredTasks = tasksData.filter((task: ITasks) => {
                    return String(task.employeeId) === String(Math.floor(Number(id)));
                });

                dispatch(setEmployeesTasks(filteredTasks));
            }
            tasksRes();
            employeeRes();
        } catch {
            console.log('oopss!')
        }
    }, []);

    return (
        <section className='employee'>
            <ShowElement isShow={isShow} fallback={<Loading />}>
                <div className="container">
                    <div className="employee_inner">
                        <div className="data">
                            <h2><span>Name: </span>{employee.name}</h2>
                            <p><span>Surname: </span>{employee.surname}</p>
                            <p><span>Email: </span>{employee.email}</p>
                            <p><span>Position: </span>{employee.position}</p>
                        </div>
                    </div>
                    <div className="tasks">
                        <div className="title">
                            <h2>Tasks</h2>
                        </div>
                        <div className="tasks_inner">
                            {
                                tasks.map(task => {
                                    return (
                                        <div key={uuid()} className='task'>
                                            <h2><span>Name: </span>{task.name}</h2>
                                            <p><span>Start Date: </span>{task.startDate}</p>
                                            <p><span>End Date: </span>{task.endDate}</p>
                                            <p><span>Description: </span>{task.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </ShowElement>
        </section>
    );
};

export default Employee;