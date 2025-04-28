import { FC } from "react";

import { useDispatch } from "react-redux";
import { setSelectedFilm } from "@/store/slices/selectedFilmSlice";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules"


import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FilmtmbdApi } from "@/types/allTypes";
import Card from "../common/Card";
import ModalHoverFilm from "../common/ModalHoverFilm";

type Props = {
  title: string;
  data: FilmtmbdApi[];
  isVertical : boolean;
  index : number;
};

const FilmList: FC<Props> = ({ title, data, isVertical, index,  }) => {

  const dispatch = useDispatch()

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
        {data.map((film) => (
          <SwiperSlide onClick={() => dispatch(setSelectedFilm(film))} key={film.id} className={`${isVertical && "!w-max"} lg:!w-max group hover:!z-10  !overflow-visible !static !transform-none `}>
            <Card img={isVertical ? film.poster_path : (film.backdrop_path)} isVertical={isVertical} title={film.title} rating={film.vote_average}>
              <ModalHoverFilm
                img={film.backdrop_path}
                title={title}
                />                
            </Card>
          </SwiperSlide>
        ))} 
        <button id="next" className="absolute z-10 hidden px-3 py-2 text-white -translate-y-1/2 bg-gray-600 rounded-full cursor-pointer lg:block right-5 top-1/2 size-max hover:bg-gray-700 active:bg-gray-800 ">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Swiper>
     
    </div>
  );
};

export default FilmList;
