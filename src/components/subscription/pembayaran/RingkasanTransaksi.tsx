import { FC } from "react";
import TataCaraPembayaran from "./TataCaraPembayaran";
import { useNavigate } from "react-router-dom";

type Props = {
    paket : string;
    harga : number;
    setIsFormPayment : (value:boolean) => void;
    isFormPayment : boolean;
}

const RingkasanTransaksi : FC<Props> = ({paket, harga, setIsFormPayment, isFormPayment}) => {

    const biayaAdmin = 3000

    const nagigate = useNavigate()

    const handleBayar = () => {
        if(!isFormPayment) nagigate("/myprofile?isSubscribe=true")
        else setIsFormPayment(false)
    }

  return (
    <div className="text-white">
        <h1 className="text-lg  mb-4">Ringkasan Transaksi</h1>
        <main className="space-y-2">
            <div className="flex justify-between ">
                <h1 className="text-gray-400">Paket Premium {paket}</h1>
                <p>Rp. {harga}</p>
            </div>
            <div className="flex justify-between ">
                <h1 className="text-gray-400">Biaya Admin Rp. {biayaAdmin}</h1>
                <p>Rp. {biayaAdmin}</p>
            </div>
            <div className="flex justify-between text-lg">
                <h1 className="text-gray-400">Total Pembayaran </h1>
                <p>Rp. {harga + biayaAdmin}</p>
            </div>
        </main>
        {!isFormPayment && <TataCaraPembayaran />}
        <button onClick={handleBayar} className="bg-blue-900 px-6 py-2 rounded-full mt-4 text-lg cursor-pointer hover:brightness-90 active:brightness-75 lg:px-8">Bayar</button>
    </div>
  )
}

export default RingkasanTransaksi