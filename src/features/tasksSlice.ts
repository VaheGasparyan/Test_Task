import { createSlice } from "@reduxjs/toolkit";
import {ITasksInitialState} from "globalTypes/tasksTypes";
import {statusTypes} from "globalTypes/statusTypes";

const initialState:ITasksInitialState = {
    status: statusTypes.loading,
    tasks: [],
    employeesIds: []
};

const tasksSlice = createSlice({
    name: 'tasks/slice',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
            state.status = statusTypes.ok
        },

        setEmployeesIds: (state, action) => {
            state.employeesIds = action.payload;
        }
    }
});

export const { setTasks, setEmployeesIds } = tasksSlice.actions;
export default tasksSlice.reducer;