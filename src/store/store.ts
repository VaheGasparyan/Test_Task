import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "features/employeesSlice";
import tasksSlice from "features/tasksSlice";

export const store = configureStore({
    reducer: {
        employeesSlice,
        tasksSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;