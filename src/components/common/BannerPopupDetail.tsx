import { addToMyMovieList } from "@/services/api/tmdb"
import { setSelectedFilm } from "@/store/slices/selectedFilmSlice"
import { faPlus, faVolumeHigh, faVolumeXmark, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon,    } from "@fortawesome/react-fontawesome"
import { DialogClose } from "@radix-ui/react-dialog"
import { FC, useState } from "react"
import { Link } from "react-router-dom"

type Props = {
    img_banner : string;
    selectGenre : boolean;
    title? : string;
    isPremium : boolean;
    img_poster : string;
    vote_average : number
}

const BannerPopUpDetail : FC<Props> = ({img_banner,  title, isPremium, img_poster, vote_average}) => {

    const [isVolumeOn, setIsVolumeOn] = useState(false)        
   
    const [loading, setLoading] = useState<boolean>(false)    
    

  return (
    <div className="w-full h-[190px] pt-10 lg:h-[500px] relative p-4 lg:px-16 bg-cover bg-center bg-no-repeat rounded-tr rounded-tl" style={{ backgroundImage: `url(${img_banner})` }}>
        <DialogClose className="absolute top-2 right-2 cursor-pointer lg:text-2xl" asChild >
            <button onClick={() => setSelectedFilm(null)} className="px-2 text-white"><FontAwesomeIcon icon={faX}/></button>
        </DialogClose>
        <div className="w-full  h-max top-10 relative  mt-10 text-white flex flex-col lg:top-60  gap-3 lg:w-full lg:h-max  lg:gap-3  lg:mx-auto">
            {title && <p className="font-bold text-[14px] lg:text-[32px] 
            ">{title}</p>}
            <section className="flex items-center text-sm lg:text-base justify-between w-full lg:mt-5 ">
                <div className="flex gap-[8px] lg:gap-[10px]">
                    <Link to={`/watch?episode=1&film=${title}`}  className="lg:px-[26px] lg:py-[10px]  rounded-full text-[12px] py-1 px-3 bg-blue-800 hover:bg-blue-900 lg:text-[16px] active:bg-blue-700">Mulai</Link>
                    <button disabled={loading} onClick={async () => {
                        setLoading(true)
                        await addToMyMovieList({title, img : img_poster, vote_average})
                        setLoading(false)
                    }} className="text-[12px] font-bold rounded-full bg-primary px-2 py-1 lg:py-[10px] lg:px-4 lg:text-[16px] hover:bg-slate-800 active:bg-slate-900 cursor-pointer"><FontAwesomeIcon icon={faPlus}/></button>
                    {isPremium && 
                    <span className="bg-yellow-600 text-[8px] rounded-full px-2 content-center lg:text-base lg:px-3">
                        Premium
                    </span>}
                </div>
                <FontAwesomeIcon onClick={() => setIsVolumeOn(!isVolumeOn)} icon={isVolumeOn ? faVolumeHigh : faVolumeXmark} className="border p-1.5 rounded-full cursor-pointer "/>
            </section>
        </div>
    </div>
  )
}

export default BannerPopUpDetail