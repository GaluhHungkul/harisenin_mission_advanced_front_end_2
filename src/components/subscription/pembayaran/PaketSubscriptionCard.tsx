import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"
import { Link } from "react-router-dom"

type Props = {
    data : {
        paket : string;
        harga : number;
        jumlahAkun : string;
        keuntungan : string[];
    }
}

const PaketSubscriptionCard : FC<Props>= ({data}) => {
  return (
    <div  className="w-full h-90 rounded-xl p-6 bg-gradient-to-r from-[#4F6BD2] to-[#263BBD] text-white/80 text-sm duration-300  lg:w-59 lg:h-100">
        <span className="bg-[#3D4142] px-5 py-3 rounded-full font-semibold">{data.paket}</span>
        <h1 className="mt-8">Mulai dari Rp. {data.harga}/bulan</h1>
        <p className="mb-6">{data.jumlahAkun} akun</p>
        <ul className="border-b border-gray-400 pb-6 space-y-2">
            {data.keuntungan.map((item, index) => (
            <li key={index}><FontAwesomeIcon icon={faCheck} className="mr-2"/>{item}</li>
            ))}
        </ul>
        <div className="text-center mt-6 lg:mt-16">
            <Link to={`/subscription/pembayaran?paket=${data.paket}`} className="bg-white font-bold text-blue-900 w-full px-15 py-2  rounded-full   cursor-pointer hover:bg-white/80 active:bg-white/60">Langganan</Link>
            <p className="mt-4">Syarat dan Ketentuan Berlaku</p>
        </div>
    </div>
  )
}

export default PaketSubscriptionCard