import {defaultLimitCount} from "globalTypes/constants";
import {ITasks} from "globalTypes/tasksTypes";
import {IEmployeesData} from "../globalTypes/employeesTypes";

const ROCKY_TEMPLE = 'https://rocky-temple-83495.herokuapp.com';
                                                    //https://rocky-temple-83495.herokuapp.com/task
                                                    //https://rocky-temple-83495.herokuapp.com/tasks?_page=3&_limit=5
export const getTasks = async (page: number) => {
    const tasksRes = await fetch(`${ROCKY_TEMPLE}/tasks?_page=${page}&_limit=${defaultLimitCount}`);
    return await tasksRes.json();
}

export const addTask = async (page: number, newTask: {
    endDate: File | string;
    name: File | string;
    description: File | string;
    employeeId: File | string;
    startDate: File | string
}) => {
    await fetch(`${ROCKY_TEMPLE}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
    return await getTasks(page);
}

export const getEmployeesId = async () => {
    const employeesRes = await fetch('https://rocky-temple-83495.herokuapp.com/employees');
    const employeesJson = await employeesRes.json();

    return employeesJson.map((employee: IEmployeesData) => {
        return typeof employee.id === 'string' ? employee.id : Math.floor(employee.id);
    })
}