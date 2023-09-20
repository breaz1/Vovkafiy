import { configureStore } from '@reduxjs/toolkit'
import postSlice from '../features/postSlice'
import commentSlice from '../features/commentSlice'
import { type } from 'os'
import userSlice from '../features/userSlice'

export const store = configureStore({
    reducer:{
        comment: commentSlice,
        post: postSlice,
        user:userSlice,
    },
})  

export type AppDispatch = typeof store.dispatch