import GroupedFilmList from "@/components/common/GroupedFilmList";
import Banner from "../components/common/Banner";
import { ListDataPerPage } from "@/types/allTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { Dialog } from "@radix-ui/react-dialog";
import PopupCard from "@/components/common/PopupCard";
import { clearSelectedFilm } from "@/store/slices/selectedFilmSlice";


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

  const { showPopup }  = useSelector((state:RootState) => state.selectedFilm)

  const dispatch = useDispatch()

  return (
    <>
      <Banner selectGenre/>
      <GroupedFilmList data={ListDataSeriesPage}/>
      {showPopup && <div className="fixed right-1/2 translate-x-1/2 top-10 z-[999] lg:top-3 rounded ">
        <Dialog open={showPopup} onOpenChange={(isOpen) => {
          if(!isOpen) dispatch(clearSelectedFilm())
        }}>
          <PopupCard />
        </Dialog>
      </div>}
    </>
  );
};

export default Series;
