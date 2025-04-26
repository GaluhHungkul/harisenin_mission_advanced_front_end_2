import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon,    } from "@fortawesome/react-fontawesome"
import {  useState } from "react"
import { Link } from "react-router-dom"
import SelectGenre from "../common/SelectGenre"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css";


const DataBanner = [
    {
        title : "Duty After School",
        img : "/assets/img/home/banner.png",
        synopsis : "Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.",
        href : "/watch?film=dutyafterschool&episode=1"
    },
    {
        title : "Happiness",
        img : "/assets/img/series/banner_series.png",
        synopsis : "Mengisahkan tentang sekelompok orang yang berjunag untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.",
        href : "/watch?film=happiness&episode=1"
    },
    {
        title : "Avatar",
        img : "/assets/img/film/banner_film.png",
        synopsis : "Di planet Pandora yang kaya akan sumber daya alam, manusia datang untuk mengeksploitasi isinya. Namun mereka harus berhadapan dengan suku asli Na'vi. Jake Sully, mantan prajurit yang dikirim sebagai avatar manusia-Na'vi, terjebak di antara dua dunia. Dalam pertempuran besar antara keserakahan dan harmoni alam, Jake harus memilih di sisi mana dia berdiri.",
        href : "/watch?film=avatar&episode=1"
    }
]

const Banner  = ({selectGenre = false} : { selectGenre ?: boolean  }) => {

    const [isVolumeOn, setIsVolumeOn] = useState(false)   


  return (
    <Swiper
    modules={[ Autoplay]}
    autoplay={{
      delay :2000,
      disableOnInteraction : false
    }}
    slidesPerView={1}
    loop
    className="relative"
    >
        {selectGenre && <SelectGenre />}
        {DataBanner.map((data, index) => (
            <SwiperSlide key={index}>
                <div className="w-full h-56 pt-10 lg:h-[587px] relative p-5 bg-cover bg-center bg-no-repeat   " style={{ backgroundImage: `url(${data.img})` }}>
                    <div className="w-full  h-[138px] relative  mt-10 text-white flex flex-col  gap-3 lg:w-[1280px] lg:h-[233px] lg:gap-5    lg:mt-56 lg:mx-auto">
                        <p className="font-bold text-[24px] lg:text-5xl">{data.title}</p>
                        <p className="text-[12px] line-clamp-2 lg:line-clamp-none font-medium lg:w-[698px] lg:text-lg">{data.synopsis}</p>
                        <section className="flex items-center justify-between w-full lg:mt-5 ">
                            <div className="flex gap-[8px] lg:gap-[10px]">
                                <Link  to={"/"} className="text-[12px] lg:px-[26px] lg:py-[10px] py-1 px-3 rounded-full  bg-gray-800 hover:bg-gray-900 active:bg-black lg:text-[16px] "><i className="mr-2 fa-solid fa-circle-info "></i>Selengkapnya</Link>
                                <Link to={data.href}  className="lg:px-[26px] lg:py-[10px]  rounded-full text-[12px] py-1 px-3 bg-blue-800 hover:bg-blue-900 lg:text-[16px] active:bg-blue-700">Mulai</Link>
                                <span className="text-[12px] border font-bold rounded-full px-2 py-1 lg:p-[10px] lg:text-[16px]">18+</span>
                            </div>
                            <FontAwesomeIcon onClick={() => setIsVolumeOn(!isVolumeOn)} icon={isVolumeOn ? faVolumeHigh : faVolumeXmark} className="border p-1.5 rounded-full cursor-pointer"/>
                        </section>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Banner