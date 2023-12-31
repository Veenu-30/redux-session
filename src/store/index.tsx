import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./CounterSlice"
import {  useDispatch } from "react-redux";

const store=configureStore({
    reducer:{counter:counterSliceReducer}
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
