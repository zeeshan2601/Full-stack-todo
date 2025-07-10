import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Make Navbar floating/sticky at the top */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="flex-1 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
