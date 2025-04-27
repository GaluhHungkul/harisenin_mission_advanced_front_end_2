import { DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import PopupDetail from "./PopupDetail"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "@/store"

const PopupCard = () => {

  const film = useSelector((state:RootState) => state.selectedFilm.value)

 

  const location = useLocation()


  return (
    <DialogContent className="w-80  min-h-[620px] bg-primary p-0 border-none  flex flex-col border lg:w-[933px] lg:max-w-screen overflow-x-hidden lg:max-h-[90vh] overflow-y-auto  lg:min-h-[680px]  ">
        <DialogTitle className="sr-only">Detail Movie</DialogTitle>                
        <PopupDetail vote_average={film.vote_average} overview={film.overview} img_banner={film.backdrop_path} img_poster={film.poster_path} title={film.title} isPremium={Math.ceil(Math.random() * 10) % 2 === 0} isSeriesPage={location.pathname === "/series"} />
    </DialogContent>
  )
}

export default PopupCard