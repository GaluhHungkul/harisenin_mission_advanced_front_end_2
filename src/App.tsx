import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop"
import { Toaster } from "react-hot-toast"
import { appRoutes } from "./lib/routes"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"

function App() {

  
  return (
    <div className='bg-primary  overflow-x-hidden relative '>
      <Router>
          <Toaster position="top-right" reverseOrder={false}/>
          <Navbar />
          <ScrollToTop />
          <Routes>
            {appRoutes.map(({ path, element, isProtected }) => (
              <Route path={path} key={path} element={
                isProtected ? (
                  <ProtectedRoute>
                    {element}
                  </ProtectedRoute>
                ) : (
                  element
                )
              }/>
            ))}
            <Route path="*" element={<Navigate to="/404" replace />}/>
          </Routes>
          <Footer />
      </Router>
    </div>
  )
}

export default App
