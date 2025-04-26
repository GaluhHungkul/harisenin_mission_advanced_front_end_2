import {  faArrowLeft,  faListUl } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, FC, ReactNode, SetStateAction } from "react"

type Props = {
    list : ReactNode;
    activeMenu : string | null;
    setActiveMenu : Dispatch<SetStateAction<null | "sub/audio" | "episodeList" | "nextEpisode">>
}

const ShowEpisodeListButton : FC<Props> = ({list, activeMenu, setActiveMenu}) => {

    const isActive = activeMenu === "episodeList"    

  return (
    <button onClick={() => setActiveMenu(isActive ? null : "episodeList")} title="List Episode " className={`hover:bg-gray-500/50 ${isActive && "bg-gray-500/50"} lg:scale-110 duration-100 rounded-full lg:py-1 lg:px-3 cursor-pointer relative group`}>
            <FontAwesomeIcon className="lg:text-lg" icon={faListUl} />
            {isActive && <div onClick={(e) => e.stopPropagation()} className={`rounded overflow-hidden  w-64 min-h-[210px] absolute lg:w-[457px] lg:min-h-[336px] bottom-10 right-1/2 lg:translate-x-1/2 bg-[#3D4142]`} >
                <div  className="flex items-center ">
                    <button onClick={() => setActiveMenu(null)} className="px-2 py-1 lg:px-4 lg:py-1  h-full hover:bg-black/50 cursor-pointer">
                        <FontAwesomeIcon  icon={faArrowLeft}/>
                    </button>
                    <p className=" lg:py-1 text-start lg:px-4 lg:font-semibold ">Episode Selanjutnya</p>
                </div>
                {list}
            </div>}
    </button>
  )
}

export default ShowEpisodeListButton