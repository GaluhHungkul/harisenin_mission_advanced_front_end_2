import { configureStore } from '@reduxjs/toolkit';
import  selectedFilmReducer  from './slices/selectedFilmSlice';
import dataFilmReducer from './slices/dataFilmSlice';

export const store = configureStore({
    reducer : {
        selectedFilm : selectedFilmReducer,
        dataFilm : dataFilmReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch