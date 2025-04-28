import GroupedFilmList from "@/components/common/GroupedFilmList";
import Banner from "../components/common/Banner";
import { ListDataPerPage } from "@/types/allTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { Dialog } from "@radix-ui/react-dialog";
import PopupCard from "@/components/common/PopupCard";
import { clearSelectedFilm } from "@/store/slices/selectedFilmSlice";


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
  
  const dispatch = useDispatch()
  const { showPopup } = useSelector((state:RootState) => state.selectedFilm)

  return (
    <>
      <Banner />
      <GroupedFilmList data={ListDataHomePage} page="home"/>
      {showPopup && <div className="fixed right-1/2 translate-x-1/2 top-10  z-[999] lg:top-3 rounded ">
        <Dialog open={showPopup} onOpenChange={(isOpen) => !isOpen && dispatch(clearSelectedFilm())}>
          <PopupCard />
        </Dialog>
      </div>}
    </>
  );
};

export default HomePage;
