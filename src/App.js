import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Counter from "./Components/Counter"
import Error from "./Components/Error"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/error' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App