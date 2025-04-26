import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const userId = localStorage.getItem("userId")
    if (!userId) {
      navigate("/login", { replace: true })
    }
  }, [navigate])

  return <>{children}</>  
}

export default ProtectedRoute
