import { useRef } from "react";
import FilmNavigate from "../components/watch/FilmNavigate";

import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import PremiumPromo from "../components/watch/PremiumPromo";

const Watch = () => {
  const playerRef = useRef<ReactPlayer>(null);

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const episode = query.get("episode");

  return (
    <div className="w-full relative h-screen bg-black  overflow-hidden">
      <PremiumPromo />
      <ReactPlayer
        ref={playerRef}
        url={`/assets/video/watch/${episode}.mp4`}
        controls
        width={"100%"}
        height={"100%"}
        playsinline={false}
      />
      <FilmNavigate playerRef={playerRef} />
    </div>
  );
};

export default Watch;
