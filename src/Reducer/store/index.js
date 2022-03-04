
// this includes Redux DevTools extension so that you can inspect the store while developing.
import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../counter/todo'

export const toolStore = configureStore({
    reducer: {
        todo: todoSlice
    },
})