const caraPembayaran : string[] = [
    "Buka aplikasi BCA Mobile Banking atau akses BCA Internet Banking.",
    "Login ke akun anda.",
    'Pilih menu "Transfer" atau "Pembayaran".',
    'Pilih opsi "Virtual Account" or "Virtual Account Number".',
    "Masukkan nomor virtual account dan jumlah pembayaran, lalu konfirmasikan pembayaran"
]

const TataCaraPembayaran = () => {
  return (
    <div>
        <h1 className="my-4 text-white mb-4">Tata Cara Pembayaran</h1>
        <ol className="text-gray-300 text-sm">
            {caraPembayaran.map((item, index) => (
                <li key={index}>{index + 1}. {item}</li>
            ))}
        </ol>
    </div>
  )
}

export default TataCaraPembayaran