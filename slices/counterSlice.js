import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

// action.payload is the data dispatched by dispatch function

// Slices
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

// Actions
export const {increment, decrement} = counterSlice.actions
// Selectors
export const selectNumber = state => state.counter.value
// to add it in store file 
export default counterSlice.reducer;