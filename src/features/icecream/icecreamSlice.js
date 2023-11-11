import { ordered } from '../cake/cakeSlice'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  noOfIcecreams:5
}

const icecreamSlice = createSlice({
    name:'icecream',
    initialState:initialState,
    reducers:{
        order:(state,action) => {
            state.noOfIcecreams--
        },
        restock:(state,action) => {
            state.noOfIcecreams += action.payload
        }
    },
   // extraReducers:(builder) =>{
     //   builder.addCase(ordered,(state) => {
       //     state.noOfIcecreams--
         //})
   // }
})

export default icecreamSlice.reducer
export let {order,restock} = icecreamSlice.actions