import { Route, Routes } from "react-router"
import Homepage from "./pages/HomePage"
import ForSchool from "./pages/ForSchool"


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/for-school" element={<ForSchool />} />
  </Routes>
    </>
  )
}

export default App
