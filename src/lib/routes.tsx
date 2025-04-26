import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
import DaftarSaya from "../pages/DaftarSaya"
import Series from "../pages/Series"
import Film from "../pages/Film"
import Watch from "../pages/Watch"
import MyProfile from "../pages/MyProfile"
import Subscription from "../pages/Subscription"
import PembayaranSubscription from "../pages/PembayaranSubscription"
import NotFound from "../pages/NotFound"

export const appRoutes = [
  { path: "/", element: <HomePage />, isProtected: true },
  { path: "/home", element: <HomePage />, isProtected: true }, // nanti redirect juga
  { path: "/daftarsaya", element: <DaftarSaya />, isProtected: true },
  { path: "/series", element: <Series />, isProtected: true },
  { path: "/film", element: <Film />, isProtected: true },
  { path: "/watch", element: <Watch />, isProtected: true },
  { path: "/myprofile", element: <MyProfile />, isProtected: true },
  { path: "/subscription", element: <Subscription />, isProtected: true },
  { path: "/subscription/pembayaran", element: <PembayaranSubscription />, isProtected: true },
  { path: "/login", element: <LoginPage />, isProtected: false },
  { path: "/register", element: <RegisterPage />, isProtected: false },
  { path: "/404", element: <NotFound />, isProtected: false },
]
