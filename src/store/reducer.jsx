import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addToFilm, removeFilm } from "./action";

export const FilmsReducers = createReducer(initialState, (builder) => {
    builder
        .addCase(addToFilm, (state, action) => {
            console.log(action, 'qaq')
            if (!state.filmsItem.find((item) => item.id === action.payload.id)) {
                state.filmsItem = [...state.filmsItem, action.payload]
            }

        })
        .addCase(removeFilm, (state, action) => {
            state.filmsItem = state.filmsItem.filter((item) => item.id !== action.payload)
        })
})

// export const FilmsReducers = createReducer( initialState, {
//     [addToFilm]: (state, action) => {
//         console.log(action.payload.id)
//         if(!state.filmsItem.find((item) => item.id === action.payload.id )){
//             state.filmsItem =  [...state.filmsItem, action.payload]
//         }
//     },
//     [removeFilm]: (state, action) => {
//         state.filmsItem = state.filmsItem.filter( (item) => item.id !== action.payload )
//     }
// } )