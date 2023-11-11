import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    noOfCakes:10
}

const cakeSlice = createSlice({
    name:"cake",
    initialState:initialState,
    reducers:{
        ordered:(state) => {
            state.noOfCakes--
        },
        restocked:(state,action) => {
            state.noOfCakes = state.noOfCakes+action.payload
        }
    }
});

export default cakeSlice.reducer;
export let {ordered,restocked} = cakeSlice.actions