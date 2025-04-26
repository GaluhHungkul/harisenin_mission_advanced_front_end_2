import { Link } from "react-router-dom"

const SubscriptionOff = () => {
  return (
    <div className="bg-[#3D4142] absolute top-4 w-[90%] rounded-xl  right-1/2 translate-x-1/2 h-[191px] flex items-start px-4 py-6 gap-6 lg:static lg:translate-x-0 lg:flex-1">
        <img src="/assets/img/myprofile/Warning.png" alt="" />
        <section className="relative">
        <h1 className="font-semibold mb-2">Berlangganan</h1>
        <p className="text-sm lg:text-base">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
        <Link to={"/subscription"} className="bg-primary/40 px-6 py-1 rounded-full hover:bg-primary/60 active:bg-primary/80 cursor-pointer mt-6 absolute -bottom-14 right-0">Mulai Berlangganan!</Link>
      </section>
    </div>
  )
}

export default SubscriptionOff