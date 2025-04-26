import { faForwardStep } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bg_episode_2 from "/assets/img/series/2.png"



const NextEpisode = () => {
  return (
    <button title="Episode selanjutnya" className="hover:bg-gray-500/50 lg:scale-110 duration-100 rounded-full lg:py-1 lg:px-3 cursor-pointer relative group">
        <FontAwesomeIcon className="lg:text-lg" icon={faForwardStep} />
        <div className="rounded w-80 text-[10px]  overflow-hidden hidden  group-hover:block absolute lg:w-[457px] lg:h-[165px]  bottom-10 right-32  lg:right-1/2 translate-x-1/2 bg-primary lg:text-base" >
            <p className="bg-[#3D4142] py-1 px-2 lg:py-1 text-start lg:px-4 lg:font-semibold">Episode Selanjutnya</p>
            <section className="flex px-2 py-1 lg:px-3 lg:pt-5 ">
                <div style={{ backgroundImage : `url(${bg_episode_2})` }} className="hidden lg:block lg:w-[170px] lg:h-24 bg-cover bg-center" />
                <div className="lg:w-1/2 text-start lg:ml-4 lg:text-sm">
                    <p>Episode 2 : Biscuits</p>
                    <p className="text-gray-300">It's Ted's first day of coaching, and fans aren't happy. He makes little headway but remains undeterred as the team play their first match.</p>
                </div>
            </section>
        </div>
    </button>
  )
}

export default NextEpisode