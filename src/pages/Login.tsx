import bg_login from "../assets/img/bg/bg_login.jpg"
import AuthCard from "../components/AuthCard"

const LoginPage = () => {
  return (
    <div  style={{ backgroundImage: `url(${bg_login})` }}
    className=" bg-cover bg-center min-h-screen bg-fixed py-20 lg:py-5">
      <AuthCard isLogin={true}/>
    </div>
  )
}

export default LoginPage