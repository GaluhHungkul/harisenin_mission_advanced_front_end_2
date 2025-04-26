import { useEffect } from "react";

const NotFound = () => {

    useEffect(() => {
        document.title = "404 - Page Not Found";
      }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <img src="/assets/img/others/logo_desktop.png" alt="" />
        <h1 className="text-5xl font-bold mb-4 text-white mt-4">404</h1>
        <p className="text-xl text-gray-400">Oops! Page not found.</p>
    </div>
  )
}

export default NotFound