import { Route, Routes } from "react-router"
import Homepage from "./pages/HomePage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import GPS from "./pages/Gps"
import AccessControl from "./pages/AccessControl"
import Payments from "./pages/Payments"
import Pricing from "./pages/Pricing"
import SchoolSoftware from "./pages/SchoolSoftware"
import SmartID from "./pages/SmartID"
import Blog from "./pages/Blog"
import Demo from "./pages/Demo"


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<About />} />
    <Route path="/solutions/access-control" element={<AccessControl />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/solutions/gps" element={<GPS />} />
    <Route path="/solutions/payments" element={<Payments />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/solutions/school-software" element={<SchoolSoftware />} />
    <Route path="/solutions/smart-id" element={<SmartID />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/demo" element={<Demo />} />
  </Routes>
    </>
  )
}

export default App
