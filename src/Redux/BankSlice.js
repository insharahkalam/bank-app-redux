import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name: 'BankApp',
    initialState: {
        value: 0,
        history: [],
        error: null
    },
    reducers: {
        deposite: (state, action) => {
            state.value += action.payload;
            state.history.unshift({
                type: "Deposit",
                amount: action.payload
            });
        },
        withdraw: (state, action) => {
            state.value -= action.payload;
            state.history.unshift({
                type: "Withdraw",
                amount: action.payload
            })
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        reset: (state) => {
            state.value = 0
            state.history = []
        }

    },


})

export const { deposite, withdraw, reset } = bankSlice.actions
export default bankSlice.reducer