export interface IEmployeesInitialState {
    status: string;
    employees: IEmployeesData[]
}

export interface IEmployeesData {
    name: string;
    surname: string;
    email: string;
    position: string;
    id: number | string
}

export interface IEditEmployeesData {
    name: string;
    surname: string;
    email: string;
    position: string;
}