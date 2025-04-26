import { faClosedCaptioning, faDisplay, faDownload, faFilm, faRectangleAd, faTv } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

const ReasonSubscription = ({gridMobile = 3} : { gridMobile? : number }) => {
  return (
    <div className="w-80 mb-6  lg:mb-20 lg:w-full">        
      <h2 className="text-xl text-center font-semibold lg:text-2xl">Kenapa Harus Berlangganan?</h2>
      <div className={`grid mx-auto justify-items-center  ${`grid-cols-${gridMobile}`} pt-6 gap-5 lg:gap-x-10 lg:gap-y-8 lg:mt-8 text-sm lg:text-base lg:grid-cols-3 lg:w-4/5`}>
          {alasanBerlangganan.map((item, index) => (
              <div key={index} className="w-28 space-y-4 lg:w-40 hover:text-gray-400 text-center hover:bg-white/10 rounded duration-100 lg:p-2 content-center ">
                  <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                  <p className="text-gray-300">{item.reason}</p>
              </div>
          ))}
      </div>
    </div>
  )
}

export default ReasonSubscription