import { deleteFromMyMovieList, getMyMovieList } from "@/services/api/tmdb"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {   useEffect, useState } from "react"
import { Skeleton } from "../ui/skeleton"

type DataMovies = {
  img : string;
  title : string;
  vote_average : number;
  id : string;
}

const DaftarMovie = ({ length=50, disabled=false } : { length? : number, disabled? : boolean }) => {

  const [data, setData] = useState<DataMovies[]>([]) 

  const [loading, setLoading] = useState<boolean>(false)

  const [loadingCard, setLoadingCard] = useState<boolean>(true)

  useEffect(() => {
    const getData = async () => {
      const results = await getMyMovieList()
      setData(results)
      setLoadingCard(false)
    }
    getData()
  },[length])    

  return (
    <div className="min-h-[70vh]">        
        {loadingCard ?
          <div className="grid grid-cols-3   gap-4 lg:gap-8 lg:grid-cols-6  ">
            {Array(6).fill(0).map((_, index) => (
              <Skeleton className="h-[125px] w-[250px] lg:w-50 lg:h-75 rounded-xl" key={index}/>
            ))}
          </div>
        :
          <>
            {data.length ?
              <div className="grid grid-cols-3 justify-items-center  gap-4 lg:gap-8 lg:grid-cols-6">
                {data.slice(0,length).map((film, index) => (
                <section key={index} className={`relative  text-white rounded  w-24 h-36 lg:w-[200px] lg:h-[300px] overflow-hidden group duration-300`}>
                  {!disabled && <button disabled={loading} onClick={async () => {
                    setLoading(true)
                    await deleteFromMyMovieList(film.id)
                    const newData = await getMyMovieList()
                    setData(newData)
                    setLoading(false)
                  }} className="absolute duration-300 right-0 p-2  z-20   bg-white text-primary top-0 text-sm rounded opacity-0  group-hover:opacity-100 cursor-pointer font-bold "><FontAwesomeIcon icon={faTrash} /></button>}
                  <div className={`absolute text-[10px] opacity-0 group-hover:opacity-100 p-2 bg-black/80 bottom-0 w-full duration-300  h-0 group-hover:h-1/2 z-10 lg:text-lg `}>
                    <p className="line-clamp-1 lg:line-clamp-2 ">{film.title}</p>
                    <p className="absolute bottom-2 right-4"><span className="text-yellow-500">{film.vote_average}</span> / 10</p>
                  </div>
                  <img src={film.img} className="object-center object-cover size-full  hover:scale-110   duration-300" alt={film.title} />
                </section>
                ))}
              </div>
          :
            <div className="h-full  text-white font-bold text-lg pt-48 text-center lg:pt-40 lg:text-2xl">
              Daftar Film Anda Kosong
            </div>
          }
        </>}          
      </div>
  )
}

export default DaftarMovie