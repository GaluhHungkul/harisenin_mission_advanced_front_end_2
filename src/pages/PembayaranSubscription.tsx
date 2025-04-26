import {  useLocation } from "react-router-dom"
import MetodePembayaran from "../components/subscription/pembayaran/MetodePembayaran"
import PaketSubscriptionCard from "../components/subscription/pembayaran/PaketSubscriptionCard"
import RingkasanTransaksi from "../components/subscription/pembayaran/RingkasanTransaksi"
import VoucherInput from "../components/subscription/pembayaran/VoucherInput"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import CountdownTimer from "../components/subscription/pembayaran/CountDownTimer"

const dataListPaket = [
    {
      paket : "Individual",
      harga : 49900,
      jumlahAkun : "1",
      keuntungan : [
        "Tidak ada iklan", "Kualitas 720p", "Download konten pilihan"
      ]
    },
    {
      paket : "Berdua",
      harga : 79900,
      jumlahAkun : "2",
      keuntungan : [
        "Tidak ada iklan", "Kualitas 1080p", "Download konten pilihan"
      ]
    },
    {
      paket : "Keluarga",
      harga : 159900,
      jumlahAkun : "5 - 7",
      keuntungan : [
        "Tidak ada iklan", "Kualitas 4K", "Download konten pilihan"
      ]
    },
]



const PembayaranSubscription = () => {

  const { search } = useLocation()
  const query = new URLSearchParams(search)
  const paket = query.get("paket") ?? "Individual"
  const selectedPaket = dataListPaket.find((data) => data.paket === paket) ?? dataListPaket[0]

  const [isFormPayment, setIsFormPayment] = useState<boolean>(true)
 
  return (
    <div className="min-h-screen px-6 py-8 lg:py-10 lg:px-20">
        {!isFormPayment && <CountdownTimer />}
        <h1 className="text-xl text-white mb-4">Ringkasan Pembayaran</h1>
        <main className="lg:flex lg:gap-10">
          <PaketSubscriptionCard data={selectedPaket}/>
          <div className="lg:flex-1">
            <MetodePembayaran formPayment={isFormPayment}/>
            {isFormPayment 
            ?
            <VoucherInput />
            :
            <main className="space-y-1">
              <div className="flex justify-between text-sm">
                <h1 className="text-gray-400">Tanggal Pembelian</h1>
                <h3 className="text-gray-300">11 April 2025</h3>
              </div>
              <div className="flex justify-between text-sm">
                <h1 className="text-gray-400">Kode Pembayaran</h1>
                <h3 onClick={() => navigator.clipboard.writeText("3KDJ5XFOV")} className="text-gray-300">3KDJ5XFOV <FontAwesomeIcon  icon={faCopy} className="cursor-pointer text-blue-500"/></h3>
              </div>
            </main>
            }
            <RingkasanTransaksi isFormPayment={isFormPayment} paket={selectedPaket.paket} harga={selectedPaket.harga} setIsFormPayment={setIsFormPayment}/>
            
          </div>
        </main>
    </div>
  )
}

export default PembayaranSubscription