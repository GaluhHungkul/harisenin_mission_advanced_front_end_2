import { getMovieData } from "@/services/api/tmdb";
import {  FetchedAllData, ListDataPerPage } from "@/types/allTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllData = createAsyncThunk("datafilm/fetchAllData", async ({data, pages} : { data : ListDataPerPage[], pages : string }) :  Promise<{ responses : FetchedAllData[]; pages : string }> => {
    try {
        const responses = await Promise.all(
            data.map(async (list) => {
                const res = await getMovieData(list.query);
                const fallbacked = res.map((film) => ({
                ...film,
                backdrop_path: film.backdrop_path
                    ? import.meta.env.VITE_BASE_URL_TMDB_IMG + film.backdrop_path
                    : "/assets/img/home/2/banner/banner1.png",
                poster_path: film.poster_path
                    ? import.meta.env.VITE_BASE_URL_TMDB_IMG + film.poster_path
                    : "/assets/img/home/2/card/card1.png",
                    title :  film?.title || film?.name || film?.original_title || film?.original_name || "Ted Lasso"
                }));                
                return {
                title: list.title,
                data: fallbacked,
                };
            })
        );
        return { responses, pages  }
    } catch (error) {
        console.error("Error fetchAll Data : " , error)
        throw Error
    }
})


interface dataFilmState {
    pages : {
        home : FetchedAllData[] | null;
        series : FetchedAllData[] | null;
        film : FetchedAllData[] | null;
    };
    loading : boolean;
    error : null | string;
}

const initialState : dataFilmState = {
    pages : {
        home : null,
        series : null,
        film : null,
    },
    loading : false,
    error : null
}

export const dataFilm = createSlice({
    name : "dataFilm",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
            .addCase(fetchAllData.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchAllData.fulfilled, (state, action) => {
                state.loading =  false
                state.pages[action.payload.pages] = action.payload.responses
            })
            .addCase(fetchAllData.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Something went wrong"
            })
            
    }
})

export default dataFilm.reducer