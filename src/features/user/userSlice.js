import axios from 'axios'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    loading:false,
    user:[],
    error:''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers',() => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
                 .then((res) =>  res.data.map((user) => user.id )
                 )
})

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    extraReducers:(builder) => {
        builder.addCase(fetchUsers.pending,(state) => {
            state.loading = true
        }),
        builder.addCase(fetchUsers.fulfilled, (state,action) => {
            state.user = action.payload
            state.loading = false
           // state.error = ''
        })
        builder.addCase(fetchUsers.rejected,(state,action) => {
            state.error = action.error.message
            state.loading = false
            state.user=[]

        })
    }
})
export default userSlice.reducer
