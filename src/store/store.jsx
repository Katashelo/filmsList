import { configureStore } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { FilmsReducers } from './reducer'

export const store = configureStore({
    reducer: FilmsReducers,
    state: initialState
})