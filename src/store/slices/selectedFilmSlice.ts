import { FilmtmbdApi } from "@/types/allTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedFilmState {
    value : FilmtmbdApi | null;
    showPopup : boolean;
}

const initialState : SelectedFilmState = {
    value : null,
    showPopup : false
}

export const selectedFilmSlice = createSlice({
    name : "selectedFilm",
    initialState,
    reducers : {
        setSelectedFilm : (state, action : PayloadAction<FilmtmbdApi>) => {
            state.value = action.payload
            state.showPopup = true
        },
        clearSelectedFilm : (state) => {
            state.value = null
            state.showPopup = false
        }
    }
})

export const { setSelectedFilm, clearSelectedFilm } = selectedFilmSlice.actions
export default selectedFilmSlice.reducer