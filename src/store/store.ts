import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "features/employeesSlice";

export const store = configureStore({
    reducer: {
        employeesSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;