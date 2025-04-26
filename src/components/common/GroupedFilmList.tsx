import { FilmtmbdApi, ListDataPerPage } from "@/types/allTypes";
import { FC, useEffect, useState } from "react";
import FilmList from "./FilmList";
import { getAllData } from "@/services/api/tmdb";

type Props = {
    data : ListDataPerPage[]
}

const GroupedFilmList : FC<Props> = ({data}) => {

    const [allData, setAllData] = useState<{ title: string; data: FilmtmbdApi[] }[]>([]);
    
    const [loadingCard, setLoadingCard] = useState<boolean>(true)

    useEffect(() => {
      const fetchAllMovies = async () => {
        await getAllData(data, setAllData)
        setLoadingCard(false)
      }
      fetchAllMovies()
    }, [data]);
    

  return (
    <div className="px-5 min-h-screen lg:px-10 lg:flex lg:flex-col lg:items-center">
        {allData?.map((data, index) => (
          <div key={data.title} className="text-white ">
            <FilmList
              data={data?.data}
              title={data?.title}
              index={index}
              isVertical={index !== 0}
              loadingCard={loadingCard}
            />
          </div>
        ))}
      </div>
  )
}

export default GroupedFilmList