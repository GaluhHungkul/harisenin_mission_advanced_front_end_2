import { configureStore } from '@reduxjs/toolkit';
import  selectedFilmReducer  from './slices/selectedFilmSlice';

export const store = configureStore({
    reducer : {
        selectedFilm : selectedFilmReducer 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch