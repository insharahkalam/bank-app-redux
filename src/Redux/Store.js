import { configureStore } from "@reduxjs/toolkit";
import bankSliceReducer from './BankSlice'

export const store = configureStore({
    reducer: {
        bank: bankSliceReducer
    }
})