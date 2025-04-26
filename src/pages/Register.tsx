import bg_register from "../assets/img/bg/bg_daftar.jpg";
import AuthCard from "../components/AuthCard";

const RegisterPage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_register})` }}
      className=" bg-cover min-h-screen bg-center py-20 bg-no-repeat lg:py-5"
    >
     <AuthCard isLogin={false}/>
    </div>
  );
};

export default RegisterPage;
