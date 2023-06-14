import { defaultLimitCount } from "globalTypes/constants";
import {IEditEmployeesData, IEmployeesData} from "globalTypes/employeesTypes";

const ROCKY_TEMPLE = 'https://rocky-temple-83495.herokuapp.com';

//https://rocky-temple-83495.herokuapp.com/employees/${id}
// https://rocky-temple-83495.herokuapp.com/employees/${id}

export const getEmployees = async (page: number) => {
    const employeesRes = await fetch(`${ROCKY_TEMPLE}/employees?_page=${page}&_limit=${defaultLimitCount}`);
    return employeesRes.json();
}

export const addEmployees = async (page: number, employeeData: {
    surname: File | string;
    name: File | string;
    position: File | string;
    email: File | string
}) => {
    await fetch(`${ROCKY_TEMPLE}/employees`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)
    });

    return await getEmployees(page);
}

export const deleteEmployee = async (employeeId: string, page: number) => {
    await fetch(`${ROCKY_TEMPLE}/employees/${employeeId}`, {
        method: 'DELETE'
    });

    return await getEmployees(page);
}

export const editEmployee = async (id: number | string, fetchBody: IEditEmployeesData, page: number) => {
    await fetch(`${ROCKY_TEMPLE}/employees/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fetchBody)
    });

    return await getEmployees(page);
}