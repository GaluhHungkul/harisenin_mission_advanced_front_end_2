import DetailMovie from "../series/DetailMovie";
import EpisodeList from "../series/EpisodeList";
import { FC } from "react";
import RekomendasiSerupa from "../film/RekomendasiSerupa";
import BannerPopUpDetail from "./BannerPopUpDetail";

type Props = {
  isPremium: boolean;
  isSeriesPage : boolean;
  img_banner : string;
  img_poster : string;
  title : string;
  overview : string
  vote_average : number;
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

const dataRekomendasiSerupa = ["/assets/img/home/3/card/card1.png","/assets/img/home/3/card/card3.png","/assets/img/home/3/card/card4.png"]

const PopupDetail: FC<Props> = ({ isPremium, isSeriesPage, img_banner, title, overview, img_poster, vote_average }) => {

  return (
    <div className="pb-4">
      <BannerPopUpDetail
        isPremium={isPremium}
        img_banner={img_banner}
        img_poster={img_poster}
        title={title}
        vote_average={vote_average}
        selectGenre={false}
      />       
      <div className="px-4 text-white relative mt-5 bottom-1 text-[10px] lg:px-16 lg:mt-10">
        <DetailMovie overview={overview}/>
        {isSeriesPage ? <EpisodeList data={dataEpisodeSeries} /> : <RekomendasiSerupa data={dataRekomendasiSerupa}/>}
      </div>
    </div>
  );
};

export default PopupDetail;
