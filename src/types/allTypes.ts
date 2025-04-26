export type ListDataPerPage = {
    title : string;
    query : string;
}

export type FilmtmbdApi = {   
    id : number;
    title : string;
    backdrop_path : string;
    poster_path : string;
    overview : string;
    vote_average : number;   
    name : string;
    original_title : string;
    original_name : string;
}

export type FetchedAllData = {
    title : string;
    data : FilmtmbdApi[]
}