import {createSlice} from '@reduxjs/toolkit'

let initialState={user:null}

function log(state,action){
    state.user=action.payload;
}
export const userSlice=createSlice({
    name:'User',
    initialState,
    reducers:{
        login:(state,action)=>log(state,action)
    }
})

export const {login}=userSlice.actions;
export default userSlice.reducer;