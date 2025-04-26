import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons"
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"


const MetodePembayaran = ({formPayment} : { formPayment : boolean }) => {

    const [pembayaran, setPembayaran] = useState<string>("BCA")

  return (
    <div className="mt-4 lg:mt-0 ">
        <h1 className="text-lg text-white">Metode Pembayaran</h1>
        
        <div className="lg:flex lg:gap-4">
         {formPayment || pembayaran === "debit/kredit" ? <button onClick={() => setPembayaran("debit/kredit")} className={`flex gap-2 items-center border-2 w-full px-2.5 py-2.5 rounded my-4   hover:border-white ${pembayaran === "debit/kredit" ? "border-white text-white" : "text-white border-gray-500" } lg:my-2 `}>
            <FontAwesomeIcon icon={pembayaran === "debit/kredit" ? faCircleSolid : faCircleRegular} />
            <img src="/assets/img/subscription/pembayaran/logoBank/visa.png" alt="" />
            <img src="/assets/img/subscription/pembayaran/logoBank/mastercard.png" alt="" />
            <img src="/assets/img/subscription/pembayaran/logoBank/jcb.png" alt="" />
            <img src="/assets/img/subscription/pembayaran/logoBank/american_express.png" alt="" />
            <span className="text-sm">Kartu Debit/Kredit</span>
          </button> : null}
          {formPayment || pembayaran === "BCA" ? <button onClick={() => setPembayaran("BCA")} className={`flex gap-2 items-center border-2 w-full px-2.5 py-2.5 rounded my-4  cursor-pointer hover:border-white ${pembayaran === "BCA" ? "border-white text-white" : "text-white border-gray-500" } lg:my-2 `}> 
            <FontAwesomeIcon  icon={pembayaran === "BCA" ? faCircleSolid : faCircleRegular} />
            <img src="/assets/img/subscription/pembayaran/logoBank/bca.png" alt="" />
            <span className="text-sm">BCA Virtual Account</span>
          </button> : null}
        </div>
        
    </div>
  )
}

export default MetodePembayaran