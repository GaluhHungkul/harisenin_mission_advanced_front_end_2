import { Link, useLocation } from "react-router-dom"
import logoMobile from "/assets/img/others/logo.png"
import  logoDesktop from "/assets/img/others/logo_desktop.png"
import  avatar from "/assets/img/others/avatar.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faUser, faStar, faRightFromBracket, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react"

type navigateProfile = {
    icon : IconDefinition
    name : string;
    href : string
}

type navigate = {
    name : string;
    href : string
}

const profileNavigate : navigateProfile[]  = [
    {
        icon : faUser,
        name : "Profil Saya",
        href : "/myprofile?isSubscribe=false"
    },
    {
        icon : faStar,
        name : "Ubah Premium",
        href : "/subscription"
    },
    {
        icon : faRightFromBracket,
        name : "Keluar",
        href : "/login"
    }
]

const navigate : navigate[] = [
    {
        name : "Series",
        href : "/series"
    },
    {
        name : "Film",
        href : "/film"
    },
    {
        name : "Daftar Saya",
        href : "/daftarsaya"
    }
]

const Navbar = () => {

    const location = useLocation()
    const disableNavbar = ["/login", "/register", "/watch", "/404"]

    const [showProfile, setShowProfile] = useState(false)

    useEffect(() => {
        setShowProfile(false)
    },[location])

  return (
    <>
    {!disableNavbar.includes(location.pathname) && <nav className="bg-primary sticky top-0 z-50 flex items-center justify-between px-5 py-2 h-14 lg:h-24 lg:px-20 lg:py-6 ">
        <div className="flex justify-start  lg:justify-between ">
            <Link to="/" className="mr-4">
                <img src={logoMobile} alt="" className="lg:hidden" />
                <img src={logoDesktop} alt="" className="hidden lg:block"/>
            </Link>
            <ul className="flex gap-3 text-white justify-end items-center  w-max text-[10px] lg:w-[585px] lg:gap-20 lg:text-[18px]">
                {navigate.map((item, index) =>(
                    <li className="hover:text-blue-500" key={index}>
                        <Link to={item.href}>{item.name}</Link>
                    </li>
                ) )}
            </ul>
        </div>
        <div className="relative items-center flex gap-4 cursor-pointer lg:scale-150 " onClick={() => setShowProfile(!showProfile)}>
            <img src={avatar} alt="" className=""/>            
            <FontAwesomeIcon icon={faChevronDown} className={`${showProfile && "rotate-180"} duration-300 `} color="#fff" />
        </div>
        {showProfile &&
            <div className={`absolute text-white  p-5 right-3 top-12 rounded  w-max gap-2 flex flex-col bg-primary text-[10px] lg:text-[18px] lg:right-4 lg:top-20`}>
                {profileNavigate.map((item, index) => (
                    <Link to={item.href} onClick={() => {
                        if(item.href === "/login") localStorage.removeItem("userId")
                    }} key={index} className="flex items-center hover:text-blue-500">
                        <FontAwesomeIcon icon={item.icon} />
                        <span className="ml-2">{item.name}</span>
                    </Link>  
                ))}
            </div>        
           }
    </nav>}
    </>
  )
}

export default Navbar