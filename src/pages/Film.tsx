import {  ListDataPerPage } from "@/types/allTypes";
import Banner from "../components/common/Banner";
import GroupedFilmList from "@/components/common/GroupedFilmList";
import { Dialog } from "@radix-ui/react-dialog";
import PopupCard from "@/components/common/PopupCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { clearSelectedFilm } from "@/store/slices/selectedFilmSlice";

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

  const { showPopup } = useSelector((state : RootState) => state.selectedFilm)

  const dispatch = useDispatch()
  
  return (
    <>
      <Banner selectGenre/>
      <GroupedFilmList data={ListDataFilmPage}/>  
      {showPopup && <div className="fixed right-1/2 translate-x-1/2 top-10 z-[999] lg:top-3 rounded ">
        <Dialog open={showPopup} onOpenChange={(isOpen) => !isOpen && dispatch(clearSelectedFilm())}>
          <PopupCard />
        </Dialog>
      </div>}
    </>
  );
};

export default Film;
