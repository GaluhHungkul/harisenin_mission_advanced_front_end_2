import { FC, useState } from "react";

import { useDispatch } from "react-redux";
import { setSelectedFilm } from "@/store/slices/selectedFilmSlice";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules"

import { Dialog } from "../ui/dialog";
import { Skeleton } from "../ui/skeleton";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FilmtmbdApi } from "@/types/allTypes";
import Card from "../common/Card";
import ModalHoverFilm from "../common/ModalHoverFilm";
import PopupCard from "./PopupCard";

type Props = {
  title: string;
  data: FilmtmbdApi[];
  isVertical : boolean;
  index : number;
  loadingCard? : boolean;
};

const FilmList: FC<Props> = ({ title, data, isVertical, index, loadingCard }) => {

  const dispatch = useDispatch()


  const [showPopup, setShowPopup] = useState<boolean>(false)



  const handleOpenFilm = (film) => {
    dispatch(setSelectedFilm(film))
    setShowPopup(true)
  }

  return (
    <div className="py-5 lg:py-10 w-full lg:px-16 lg:w-[95vw] overflow-visible">
      <h1 className="font-bold text-[20px] text-white mb-5 lg:text-[32px] ">
        {title}
      </h1>
      <Swiper
      modules={[Navigation, Autoplay]}
      navigation={{
        prevEl : "#prev",
        nextEl : "#next"
      }}
      autoplay={{
        delay :3000,
        disableOnInteraction : false,
        reverseDirection : index % 2 === 0,
      }}
      slidesPerView={"auto"}
      spaceBetween={10} 
      loop
      
      className="!overflow-y-visible !overflow-x-clip"
      >
        <button id="prev" className="absolute z-10 hidden px-3 py-2 text-white -translate-y-1/2 bg-gray-600 rounded-full cursor-pointer lg:block left-5 top-1/2 size-max hover:bg-gray-700 active:bg-gray-800 ">
          <FontAwesomeIcon icon={faArrowLeft} color="#fff" />
        </button>
       {!loadingCard ?
        <>
          {data.map((film) => (
            <SwiperSlide onClick={() => handleOpenFilm(film)} key={film.id} className={`${isVertical && "!w-max"} lg:!w-max group hover:!z-10  !overflow-visible !static !transform-none `}>
              <Card img={isVertical ? film.poster_path : (film.backdrop_path)} isVertical={isVertical} title={film.title} rating={film.vote_average}>
                <ModalHoverFilm
                  img={film.backdrop_path}
                  title={title}
                  />                
              </Card>
            </SwiperSlide>
          ))}        
        </> 
        :
        <>
          {Array(6).fill(0).map((_, index) => (
            <SwiperSlide key={index} className="!w-max">
              <div className="h-[125px] w-[250px] lg:w-[200px] lg:h-[300px]">
                <Skeleton className="w-full h-full rounded-xl" />
              </div>
            </SwiperSlide>
          ))}
        </>
        }
        <button id="next" className="absolute z-10 hidden px-3 py-2 text-white -translate-y-1/2 bg-gray-600 rounded-full cursor-pointer lg:block right-5 top-1/2 size-max hover:bg-gray-700 active:bg-gray-800 ">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Swiper>
      {showPopup && (
        <div className="fixed right-1/2 translate-x-1/2 top-10 z-[999] lg:top-3 rounded ">
          <Dialog open={showPopup} onOpenChange={setShowPopup} >
            <PopupCard />
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default FilmList;
