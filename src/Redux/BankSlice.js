import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name: 'BankApp',
    initialState: {
        value: 0
    },
    reducers: {
        deposite: (state, action) => {
            state.value += action.payload
        },
        withdraw: (state, action) => {
            state.value -= action.payload
        },
        clear: (state) => {
           state.value = 0

        }

    }

})

export const { deposite, withdraw , clear} = bankSlice.actions
export default bankSlice.reducer