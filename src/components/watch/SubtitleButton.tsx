import { faCheck, faClosedCaptioning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, FC, SetStateAction } from "react"

type Props = {
    activeMenu : string | null;
    setActiveMenu : Dispatch<SetStateAction<null | "sub/audio" | "episodeList" | "nextEpisode">>
}

const SubtitleButton : FC<Props>= ({activeMenu, setActiveMenu}) => {

    const isActive = activeMenu === "sub/audio"

  return (
    <button onClick={() => setActiveMenu(isActive ? null : "sub/audio")} title="Subtitle dan Audio" className={`hover:bg-gray-500/50 ${isActive && "bg-gray-500/50"} lg:scale-110 duration-100 rounded-full lg:py-1 lg:px-2 cursor-pointer relative`}>
        <FontAwesomeIcon className="lg:text-lg" icon={faClosedCaptioning} />
        {isActive && <div className={`text-[12px] rounded overflow-hidden flex p-2 lg:p-3 absolute h-[100px] w-[300px] lg:w-[392px] lg:h-[100px] bottom-10 right-1/2 lg:translate-x-1/2 bg-primary lg:text-sm`}>
            <section className="text-start space-y-1 lg:space-y-2 flex-1">
                <h1 className="lg:text-base font-semibold">Audio</h1>
                <p className="text-white"><FontAwesomeIcon icon={faCheck} className="lg:mr-2"/>Bahasa Inggris</p>
            </section>
            <section className="text-start space-y-1 lg:space-y-2 flex-1">
                <h1 className="lg:text-base font-semibold">Terjemahan</h1>
                <p className="text-white"><FontAwesomeIcon icon={faCheck} className="lg:mr-2"/>Bahasa Indonesia</p>
                <p className="text-gray-400 lg:ml-5">Bahasa Inggris</p>
            </section>
        </div>}
    </button>
  )
}

export default SubtitleButton