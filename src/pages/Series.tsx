import GroupedFilmList from "@/components/common/GroupedFilmList";
import Banner from "../components/common/Banner";
import { ListDataPerPage } from "@/types/allTypes";


const ListDataSeriesPage: ListDataPerPage[] = [
  {
    title: "Melanjutkan Tonton Series",
    query: "/tv/popular",
  },
  {
    title: "Series Persembahan Chill",
    query: "/discover/movie?sort_by=popularity.desc&with_genres=28",
  },
  {
    title: "Top Rating Series Hari ini",
    query: "/movie/popular",
  },
  {
    title: "Series Trending",
    query: "/tv/top_rated",
  },
  {
    title: "Rilis baru",
    query: "/discover/tv?with_genres=16",
  },
];

const Series = () => {


  return (
    <>
      <Banner selectGenre/>
      <GroupedFilmList data={ListDataSeriesPage}/>
    </>
  );
};

export default Series;
