import { createSlice } from "@reduxjs/toolkit";
import {IEmployeesInitialState} from "globalTypes/employeesTypes";

const initialState:IEmployeesInitialState = {
    status: 'loading',
    employees: []
}

const employeesSlice = createSlice({
    name: 'employees/slice',
    initialState,
    reducers: {
        setEmployees: (state, action) => {
            state.employees = action.payload;
            state.status = 'ok';
        }
    }
});

export const { setEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;