import { FC, useEffect, useState } from "react";
import type ReactPlayer from "react-player";
import ListNextEpisode from "./ListNextEpisode";
import NextEpisodeButton from "./NextEpisodeButton";
import ShowEpisodeListButton from "./ShowEpisodeListButton";
import SubtitleButton from "./SubtitleButton";
import BackwardButton from "./BackwardButton";
import ForwardButton from "./ForwardButton";
import { useLocation } from "react-router-dom";

type Props = {
    playerRef?: React.RefObject<ReactPlayer | null>; // biar bisa kontrol player dari luar
};

const dataEpisodeSeries = [
    {
      episode: 1,
      img: "/public/assets/img/series/1.png",
      title: "Pilot",
      description:
        "American football coach Ted Lasso is hired by a wealthy divorcee to coach the English soccer team AFC Richmond",
      duration: "30min",
    },
    {
      episode: 2,
      img: "/public/assets/img/series/2.png",
      title: "Biscuits",
      description:
        "It’s Ted’s first day of coaching, and fans aren’t happy. He makes little headway but remains undeterred as the team play their first match.",
      duration: "29min",
    },
    {
      episode: 3,
      img: "/public/assets/img/series/3.png",
      title: "Trent Crimm: Independent",
      description:
        "To arrange an in-depth exposé, Rebecca pairs cynical journalist Trent Crimm with Ted for a day. Ted and Roy venture into the community.",
      duration: "30min",
    },
    {
      episode: 4,
      img: "/public/assets/img/series/4.png",
      title: "For The Children",
      description:
        "Rebecca hosts the team’s annual charity benefit, where Ted stages a reconciliation between Roy and Jamie.",
      duration: "33min",
    },
    {
      episode: 5,
      img: "/public/assets/img/series/5.png",
      title: "Tan Lines",
      description:
        "With his wife and son visiting from America, Ted makes drastic changes to the lineup during a critical match.",
      duration: "31min",
    },
];
  
const FilmNavigate : FC<Props> = ({ playerRef }) => {

    const [activeMenu, setActiveMenu] = useState<null | "sub/audio" | "episodeList" | "nextEpisode">(null)

    const location = useLocation()

    useEffect(() => {
        setActiveMenu(null)
    },[location])


    const skip = (seconds: number) => {
      if (playerRef?.current) {
        const player = playerRef.current;
        const currentTime = player.getCurrentTime();
        player.seekTo(currentTime + seconds);
      }
    };



  return (
    <div className="absolute lg:w-[70%] bottom-16 text-sm w-full px-4 lg:h-10 lg:bottom-9 lg:left-40  lg:px-4 flex lg:items-center text-white backdrop-blur-sm justify-between">
        <div className="flex gap-2">
            <BackwardButton skip={skip}/>
            <ForwardButton skip={skip}/>
        </div>
        <h1 className="lg:text-sm">TED Lasso Episode 1 : Pilot</h1>
        <div className="flex gap-2 lg:gap-4 ">
            <NextEpisodeButton  />
            <ShowEpisodeListButton activeMenu={activeMenu} setActiveMenu={setActiveMenu} list={<ListNextEpisode data={dataEpisodeSeries}/>}/>            
            <SubtitleButton activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
    </div>
  )
}

export default FilmNavigate