import { Routes, Route } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Packages from "./pages/Packages"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="paketi" element={<Packages />} />
        <Route path="galerija" element={<Gallery />} />
        <Route path="kontakt" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
