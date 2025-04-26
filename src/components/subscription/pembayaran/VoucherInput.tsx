import { useState } from "react"
import FloatingLabelInput from "../../tag/FloatingLabelInput"
import toast from "react-hot-toast"

const VoucherInput = () => {

    const [voucher, setVoucher] = useState<string>("")

    const handleVoucher = () => {
        if(!voucher.length) return toast.error("Masukkan kode voucher terlebih dahulu")
        const processToast = toast.loading("Memproses kode voucher...")
        setTimeout(() => {
          toast.dismiss(processToast)
          toast.success("Kode voucher berhasil digunakan")
        }, 1000);
      }

  return (
    <div className="my-4 lg:my-2    ">
        <h1 className="text-lg text-white mb-4">Kode Voucher (Jika ada)</h1>
        <div className="flex gap-4 items-center">
            <FloatingLabelInput value={voucher} onChange={(e) => setVoucher(e.target.value)} type="text" id="voucher" label="Masukkan kode voucher"/>
            <button onClick={handleVoucher} className="bg-[#3D4142] text-white px-4 py-3   rounded-full  font-semibold hover:brightness-90 active:brightness-75 cursor-pointer">Gunakan</button>z
        </div>
    </div>
  )
}

export default VoucherInput