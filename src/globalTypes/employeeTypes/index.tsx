import {ITasks} from "../tasksTypes";
import {IEmployeesData} from "../employeesTypes";

export interface IEmployeeInitialState {
    tasks: ITasks[];
    employee: IEmployeesData;
    status: string
}