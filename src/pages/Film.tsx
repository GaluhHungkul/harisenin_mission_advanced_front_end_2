import {  ListDataPerPage } from "@/types/allTypes";
import Banner from "../components/common/Banner";
import GroupedFilmList from "@/components/common/GroupedFilmList";

const ListDataFilmPage: ListDataPerPage[] = [
  {
    title: "Melanjutkan Tonton Film",
    query: "/trending/all/day",
  },
  {
    title: "Film Persembahan Chill",
    query: "/discover/movie?sort_by=popularity.desc&with_genres=35",
  },
  {
    title: "Top Rating Film Hari ini",
    query: "/discover/movie?sort_by=popularity.desc&with_genres=878",
  },
  {
    title: "Film Trending",
    query: "/discover/movie?sort_by=popularity.desc&with_genres=9648 ",
  },
  {
    title: "Rilis baru",
    query: "/discover/movie?sort_by=popularity.desc&with_genres=16 ",
  },
];
const Film = () => {

  
  return (
    <>
      <Banner selectGenre />
      <GroupedFilmList data={ListDataFilmPage}/>
    </>
  );
};

export default Film;
