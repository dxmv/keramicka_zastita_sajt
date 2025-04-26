import Nav from "./Nav"
import Footer from "./Footer"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
