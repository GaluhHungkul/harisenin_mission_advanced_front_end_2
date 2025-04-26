import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";
import { useLocation } from "react-router-dom";
import Card from "../common/Card";
import ModalHoverFilm from "../common/ModalHoverFilm";
import PopupDetail from "../common/PopupDetail";
import { tmbdApi } from "@/types/tmdb";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules"

type Props = {
  title: string;
  data: tmbdApi[]
};

const FilmListTest: FC<Props> = ({ title, data }) => {

  const location = useLocation();

  const disabelModalDetail = location.pathname === "/";

  return (
    <div className="py-5 lg:py-10 w-full lg:px-16 ">
      <h1 className="font-bold text-[20px] text-white mb-5 lg:text-[32px] ">
        {title}
      </h1>
      <Swiper
      modules={[Navigation, Autoplay]}
      navigation={{
        prevEl : "#prev",
        nextEl : "#next"
      }}
      slidesPerView={"auto"}
      spaceBetween={30}
      loop
      
      className="!overflow-y-visible !overflow-x-clip "
      >
        <button id="prev" className="absolute z-10 hidden px-3 py-2 text-white -translate-y-1/2 bg-gray-600 rounded-full cursor-pointer lg:block left-5 top-1/2 size-max hover:bg-gray-700 active:bg-gray-800 ">
          <FontAwesomeIcon icon={faArrowLeft} color="#fff" />
        </button>
        {data.map((film, index) => (
         <SwiperSlide key={film.id} className=" lg:!w-max  ">
           <Dialog>
              <DialogTrigger className="w-full lg:!w-max">
                <Card img={film.backdrop_path} isVertical={false} title={film.title} rating={film.vote_average}>
                  <ModalHoverFilm
                    img={film.backdrop_path}
                    title={title}
                    />                
                </Card>
              </DialogTrigger>
            {!disabelModalDetail && (
              <DialogContent className="w-80  min-h-[670px] bg-primary p-0 border-none  flex flex-col border lg:w-[933px] lg:max-w-screen overflow-x-hidden lg:max-h-[90vh] overflow-y-auto  lg:h-[1568px]  ">
                <DialogTitle className="sr-only">Detail Movie</DialogTitle>                
                <PopupDetail isPremium={index % 2 === 0} isSeriesPage={location.pathname === '/series'} />
              </DialogContent>
            )}
          </Dialog>  
         </SwiperSlide>
        ))}
        <button id="next" className="absolute z-10 hidden px-3 py-2 text-white -translate-y-1/2 bg-gray-600 rounded-full cursor-pointer lg:block right-5 top-1/2 size-max hover:bg-gray-700 active:bg-gray-800 ">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Swiper>
    </div>
  );
};

export default FilmListTest;
