import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const dataListPaket = [
  {
    paket : "Individual",
    harga : "Mulai dari Rp.49,990/bulan",
    jumlahAkun : "1",
    keuntungan : [
      "Tidak ada iklan", "Kualitas 720p", "Download konten pilihan"
    ]
  },
  {
    paket : "Berdua",
    harga : "Mulai dari Rp.79,990/bulan",
    jumlahAkun : "2",
    keuntungan : [
      "Tidak ada iklan", "Kualitas 1080p", "Download konten pilihan"
    ]
  },
  {
    paket : "Keluarga",
    harga : "Mulai dari Rp.159,990/bulan",
    jumlahAkun : "5 - 7",
    keuntungan : [
      "Tidak ada iklan", "Kualitas 4K", "Download konten pilihan"
    ]
  },
]

const ListPaketSubscription = () => {
  return (
    <div className="bg-[#22282A] rounded w-80 p-10 flex flex-col items-center lg:w-full ">
      <h1 className="text-2xl font-semibold lg:text-3xl">Pilih Paketmu</h1>
      <p className="text-center text-sm  mt-2 mb-12 lg:text-lg">Temukan paket sesuai kebutuhanmu!</p>
      <div className="w-full space-y-8 lg:flex lg:justify-center lg:gap-18">
        {dataListPaket.map((data, index) => (
          <div key={index} className="w-59 h-90 rounded-xl p-6 bg-gradient-to-r from-[#4F6BD2] to-[#263BBD] text-white/80 text-sm duration-300 lg:hover:scale-110 ">
            <span className="bg-[#3D4142] px-6 py-2 rounded-full ">{data.paket}</span>
            <h1 className="mt-4">{data.harga}</h1>
            <p className="mb-4">{data.jumlahAkun} akun</p>
            <ul className="border-b border-gray-400 pb-6 space-y-2">
              {data.keuntungan.map((item, index) => (
                <li key={index}><FontAwesomeIcon icon={faCheck} className="mr-2"/>{item}</li>
              ))}
            </ul>
            <div className="text-center mt-6 ">
              <Link to={`/subscription/pembayaran?paket=${data.paket}`} className="bg-white font-bold text-blue-900 w-full px-15 py-2  rounded-full   cursor-pointer hover:bg-white/80 active:bg-white/60">Langganan</Link>
              <p className="mt-4">Syarat dan Ketentuan Berlaku</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListPaketSubscription