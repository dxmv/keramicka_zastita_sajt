import { Outlet } from "react-router"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
