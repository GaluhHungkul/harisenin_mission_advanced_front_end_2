import { FC,  useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from './tags/Input'
import google from "/assets/img/others/google.png"
import toast from 'react-hot-toast'

type Props = {
    isLogin : boolean
}

const AuthCard: FC<Props> = ({isLogin}) => {


  const namaPengguna = useRef<HTMLInputElement>(null)
  const kataSandi = useRef<HTMLInputElement>(null)


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!isLogin) return navigate("/login")
    const loadingToast = toast.loading("Melakukan authentikasi...")
    try {
      const res = await fetch(import.meta.env.VITE_BASE_URL_MOCKAPI_USERS, {
        method : "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          username : namaPengguna.current?.value.length ?  namaPengguna.current?.value : "William",
          kataSandi : kataSandi.current?.value.length ? kataSandi.current?.value : "acumalaka",
          email : "william1980@gmail.com"
        })
      })
      if(!res.ok) throw new Error("Gagal login")
      toast.success("Berhasil login")
      toast.dismiss(loadingToast)
      const { id } = await res.json()
      localStorage.setItem("userId", id)
      navigate("/")

    } catch (error) {
      console.log("Error : ", error)
      toast.error("Gagal login")
      toast.dismiss(loadingToast)
    }
    
   
  }

  return (
    <div className={`text-white w-[306px] ${isLogin ? "h-96 lg:h-[663px]" : "h-[452.28px] lg:h-[728px]"}  lg:w-[529px] px-8 mx-auto rounded-xl flex flex-col items-center pt-7 backdrop-blur-sm bg-primary/60 lg:p-10 `}>
    <header>
      <img src="assets/img/other/Logo.png" alt="" />
      <section className=" flex flex-col items-center">
        <h1 className="font-semibold text-[18px] lg:text-[32px]">{isLogin ? "Login" : "Register"}</h1>
        <p className="text-slate-300 text-[10px] lg:text-[16px]">
          Selamat datang {isLogin && "kembali"}!
        </p>
      </section>
    </header>
    <form onSubmit={handleSubmit}  className="w-full space-y-5 mt-5 lg:mt-9 lg:space-y-10">
      <label htmlFor="username" className="flex flex-col gap-1 lg:gap-2">
        <span className="text-[10px] lg:text-lg">Username</span>
        <Input ref={namaPengguna} id='username' placeholder='Masukkan username ' type='text'/>
        </label>
      <label htmlFor="KataSandi" className="flex flex-col gap-1 lg:gap-2">
        <span className="text-[10px] lg:text-lg">kata Sandi</span>
        <div className="relative w-full ">
        <Input ref={kataSandi} id='KataSandi' placeholder='Masukkan Kata Sandi' type='password'/>
          <span className="absolute right-3 cursor-pointer top-1">
            <i className="fa-solid fa-eye-slash"></i>
          </span>
        </div>
      </label>
      {!isLogin && <label htmlFor="KonfirmasiKataSandi" className="flex flex-col gap-1">
        <div>
          <span className="text-[10px] lg:text-lg">
            Konfirmasi Kata Sandi
          </span>
          <div className="relative w-full ">

          <Input id='KonfirmasiKataSandi' placeholder='Konfirmasi Kata Sandi' type='password'/>
            <span className="absolute right-3 cursor-pointer top-1">
              <i className="fa-solid fa-eye-slash"></i>
            </span>
          </div>
        </div>
      </label>}
        <section className="flex justify-between items-center w-full  text-[10px] lg:text-[16px]">
          <div>
            <span className="text-gray-300">
              {isLogin ? "Belum" :"Sudah"} punya akun? {""}
              <Link to={isLogin ? "/register" : "/login"} className="text-white">
                {isLogin ? "Buat akun" : "Masuk"}
              </Link>
            </span>
          </div>
          {isLogin && <Link to="/" className="text-gray-300">
            Lupa kata sandi?
          </Link>}
        </section>
      <button onClick={handleSubmit} className=" bg-white/30  font-semibold w-full rounded-full py-1 lg:py-2 hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer disabled:bg-zinc-800 text-[10px] lg:text-[16px]">
        {isLogin ? "Login" :"Daftar"}
      </button>
    </form>
    <section className="flex items-center flex-col  w-full text-[10px] lg:text-[16px]">
      <span className="text-gray-400 my-1">Atau</span>
      <button className=" border w-full rounded-full py-2 hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer flex items-center justify-center gap-2">
        <img src={google} className="size-4" alt="" />
        {isLogin ? "Login" :"Daftar"} dengan Google
      </button>
    </section>
  </div>
  )
}

export default AuthCard