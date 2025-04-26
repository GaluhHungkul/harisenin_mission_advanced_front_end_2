import SubsCriptionCard from "../components/myprofile/SubsriptionCard"
import ProfileCard from "../components/myprofile/ProfileCard"
import DaftarMovie from "../components/common/DaftarMovie"
import { Link } from "react-router-dom"

const MyProfile = () => {
  return (
    <div className="min-h-screen py-10 px-4  relative text-white lg:px-12">
        <h1 className="mt-48 font-semibold text-xl lg:mt-0">Profil Saya</h1>
        <main className="mt-4 lg:flex lg:gap-20">
            <ProfileCard />
            <SubsCriptionCard />
        </main>
        <div>
            <header className="flex justify-between items-center ">
                <h1 className="font-bold text-[20px]  text-white my-5 lg:text-[32px]">Daftar Saya</h1>
                <Link className="text-gray-300 text-sm" to={"/daftarsaya"}>Lihat Semua</Link>
            </header>
            <DaftarMovie length={6} disabled/>
        </div>
    </div>
  )
}

export default MyProfile