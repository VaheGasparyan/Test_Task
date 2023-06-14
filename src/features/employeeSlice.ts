import { createSlice } from "@reduxjs/toolkit";
import {IEmployeeInitialState} from "globalTypes/employeeTypes";
import {statusTypes} from "globalTypes/statusTypes";

const initialState:IEmployeeInitialState = {
    tasks: [],
    employee: {
        name: '',
        email: '',
        surname: '',
        position: '',
        id: ''
    },
    status: statusTypes.loading
}

const employeeSlice = createSlice({
    name: 'employee/slice',
    initialState,
    reducers: {
        setEmployee: (state, action) => {
            state.employee = action.payload;
            state.status = statusTypes.ok
        },

        setEmployeesTasks: (state, action) => {
            state.tasks = action.payload;
            state.status = statusTypes.ok
        }
    }
});

export const { setEmployee, setEmployeesTasks } = employeeSlice.actions;
export default employeeSlice.reducer;