import {createSlice} from "@reduxjs/toolkit"

let initialState={item:null};
function select_book(state,action){
    state.item=action.payload;
}
export const bookSlice=createSlice({
    name:'book',
    initialState,
    reducers:{
        edit:(state,action)=>select_book(state,action)
    }

})

export const {edit}=bookSlice.actions;
export default bookSlice.reducer;