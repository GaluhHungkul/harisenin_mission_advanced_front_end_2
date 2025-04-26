import GroupedFilmList from "@/components/common/GroupedFilmList";
import Banner from "../components/common/Banner";
import { ListDataPerPage } from "@/types/allTypes";
import { useSelector } from "react-redux";


const ListDataHomePage: ListDataPerPage[] = [
  {
    title: "Melanjutkan Tonton Film",
    query: "/trending/movie/day",
  },
  {
    title: "Top Rating Film dan Series Hari ini",
    query: "/movie/popular",
  },
  {
    title: "Film Trending",
    query: "/movie/top_rated",
  },
  {
    title: "Rilis baru",
    query: "/movie/upcoming",
  },
];

const HomePage = () => {
  

  return (
    <>
      <Banner />
      <GroupedFilmList data={ListDataHomePage}/>
    </>
  );
};

export default HomePage;
