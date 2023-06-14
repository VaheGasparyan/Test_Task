export interface ITasksInitialState {
    status: string;
    tasks: ITasks[]
    employeesIds: string[] | number[]
}

export interface ITasks {
    description: string;
    employeeId: string;
    endDate: string
    id: number
    name: string
    startDate: string
}

export interface IEditTask {
    name: string;
    description: string;
    startDate: string;
    endDate: string
    employeeId: string
}