import { faClosedCaptioning, faDisplay, faDownload, faFilm, faRectangleAd, faStar, faTv } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const alasanBerlangganan = [
  {
    reason : "Download Konten pilihan",
    icon : faDownload
  },
  {
    reason : "Tidak Ada Iklan",
    icon : faRectangleAd
  },
  {
    reason : "Tonton Semua Konten",
    icon : faFilm
  },
  {
    reason : "Kualitas Maksimal Sampai Dengan 4K",
    icon : faTv
  },
  {
    reason : "Tonton di TV, Tablet, Mobile dan Laptop",
    icon : faDisplay
  },
  {
    reason : "Subtitle Konten Pilihan",
    icon : faClosedCaptioning
  },
]

const PremiumPromoButton = () => {

  const [showPromo, setShowPromo] = useState<boolean>(false)

  const navigate = useNavigate()

  return (
    <div className="absolute size-full">
      <button onClick={() => setShowPromo(!showPromo)} className="absolute z-[101]    top-42 right-5 lg:top-5 lg:right-8 text-white cursor-pointer hover:text-yellow-400">
          <FontAwesomeIcon icon={faStar} className="text-xl lg:text-2xl "/>
      </button>
      <div className={`absolute size-full z-[100] bg-black/80 ${!showPromo ? "translate-y-full" : "-translate-y-0"} duration-300 text-white flex flex-col items-center justify-center text-center`}>
        <section className="lg:mb-20">
          <h1 className="font-bold mb-1 text-base lg:text-3xl lg:mb-2">Layanan Premium 🌟</h1>
          <p className="text-sm lg:text-base">Tingkatkan paket anda untuk dapat menonton video ini.</p>
        </section>
        <section>
          <h2 className="text-sm lg:text-base">Kenapa Harus Berlangganan?</h2>
          <div className="grid grid-cols-3 mt-2 gap-x-5 gap-y-3 lg:gap-x-10 lg:gap-y-4 lg:mt-6 text-[10px] lg:text-base ">
            {alasanBerlangganan.map((item, index) => (
              <div key={index} className="w-28 space-y-2 lg:w-40 lg:space-y-4 hover:text-gray-400 ">
                <FontAwesomeIcon icon={item.icon} className="lg:text-2xl"/>
                <p>{item.reason}</p>
              </div>
            ))}
          </div>
          <button onClick={() => navigate("/subscription")} className="bg-blue-900 mt-4 text-[10px] lg:text-base px-3 p-1 lg:px-4 lg:py-1 rounded-full lg:mt-10 cursor-pointer hover:bg-blue-800 active:bg-blue-700">Ubah Jadi Premium</button>
        </section>
      </div>
    </div>
  )
}

export default PremiumPromoButton