import {  ListDataPerPage } from "@/types/allTypes";
import { FC, useEffect } from "react";
import FilmList from "./FilmList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchAllData } from "@/store/slices/dataFilmSlice";
import { Skeleton } from "../ui/skeleton";

type Props = {
    data : ListDataPerPage[];
    page : string;
}

const GroupedFilmList : FC<Props> = ({data, page}) => {

    const dispatch = useDispatch<AppDispatch>()


    const { loading, error, pages  } = useSelector((state:RootState) => state.dataFilm)   
 
    useEffect(() => {
      if(!pages[page]?.length)  dispatch(fetchAllData({data, pages : page}) )
    }, [data, page, dispatch, pages]);
    
    if(error)  return <div className="fixed inset-0 z-[999999] bg-black text-white font-bold text-2xl text-center content-center">Seomething Went Wrong</div>

  return (
    <div className="px-5 min-h-screen lg:px-10 lg:flex lg:flex-col lg:items-center">
      {loading
      ?
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-y-10  lg:w-[85vw]  justify-evenly lg:gap-y-20 lg:my-10">
          {Array(12).fill(0).map((_, index) => (
            <div key={index} className="!w-max">
              <div className="h-[125px] w-[80px] lg:w-[200px] lg:h-[300px]">
                <Skeleton className="w-full h-full rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      :
      <>
      {pages[page]?.map((data, index) => (
          <div key={data.title} className="text-white ">
            <FilmList
              data={data?.data}
              title={data?.title}
              index={index}
              isVertical={index !== 0}
            />
          </div>
        ))}
      </>
      }
        
         
      </div>
  )
}

export default GroupedFilmList