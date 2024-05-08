import {configureStore} from "@reduxjs/toolkit"
import bookSlice from './book_slice'
import userSlice from './userSlice'
export const store=configureStore({
    reducer:{
        book:bookSlice,
        user:userSlice
    }
})