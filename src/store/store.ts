import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "features/employeesSlice";
import tasksSlice from "features/tasksSlice";
import employeeSlice from "features/employeeSlice";

export const store = configureStore({
    reducer: {
        employeesSlice,
        tasksSlice,
        employeeSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;