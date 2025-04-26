import { FC } from "react";
import { useLocation } from "react-router-dom";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FilmtmbdApi } from "@/types/allTypes";
import Card from "../common/Card";
import ModalHoverFilm from "../common/ModalHoverFilm";
import PopupDetail from "../common/PopupDetail";
import { Skeleton } from "../ui/skeleton";

type Props = {
  title: string;
  data: FilmtmbdApi[];
  isVertical : boolean;
  index : number;
  loadingCard? : boolean;
};

const FilmList: FC<Props> = ({ title, data, isVertical, index, loadingCard }) => {

  const location = useLocation();

  const disabelModalDetail = location.pathname === "/";

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
          {data.map((film, index) => (
            <SwiperSlide  key={film.id} className={`${isVertical && "!w-max"} lg:!w-max group hover:!z-10  !overflow-visible !static !transform-none `}>
              <Dialog>
                  <DialogTrigger className={`${!isVertical && "w-full"} lg:!w-max `}>
                      <Card img={isVertical ? film.poster_path : (film.backdrop_path)} isVertical={isVertical} title={film.title} rating={film.vote_average}>
                        <ModalHoverFilm
                          img={film.backdrop_path}
                          title={title}
                          />                
                      </Card>
                  </DialogTrigger>
                {!disabelModalDetail && (
                  <DialogContent className="w-80  min-h-[680px] bg-primary p-0 border-none  flex flex-col border lg:w-[933px] lg:max-w-screen overflow-x-hidden lg:max-h-[90vh] overflow-y-auto  lg:h-[1568px]  ">
                    <DialogTitle className="sr-only">Detail Movie</DialogTitle>                
                    <PopupDetail vote_average={film.vote_average} overview={film.overview} img_banner={film.backdrop_path} img_poster={film.poster_path} title={film.title} isPremium={index % 2 === 0} isSeriesPage={location.pathname === '/series'} />
                  </DialogContent>
                )}
              </Dialog>  
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
    </div>
  );
};

export default FilmList;
