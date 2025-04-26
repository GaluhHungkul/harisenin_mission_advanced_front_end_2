import { FilmtmbdApi } from "@/types/allTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedFilmState {
    value : FilmtmbdApi | null
}

const initialState : SelectedFilmState = {
    value : null
}

export const selectedFilmSlice = createSlice({
    name : "selectedFilm",
    initialState,
    reducers : {
        setSelectedFilm : (state, action : PayloadAction<FilmtmbdApi>) => {
            state.value = action.payload
        },
        clearSelectedFilm : (state) => {
            state.value = null
        }
    }
})

export const { setSelectedFilm, clearSelectedFilm } = selectedFilmSlice.actions
export default selectedFilmSlice.reducer