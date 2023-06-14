import { createSlice } from "@reduxjs/toolkit";
import {IEmployeesInitialState} from "globalTypes/employeesTypes";
import {statusTypes} from "globalTypes/statusTypes";

const initialState:IEmployeesInitialState = {
    status: statusTypes.loading,
    employees: []
}

const employeesSlice = createSlice({
    name: 'employees/slice',
    initialState,
    reducers: {
        setEmployees: (state, action) => {
            state.employees = action.payload;
            state.status = statusTypes.ok;
        }
    }
});

export const { setEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;