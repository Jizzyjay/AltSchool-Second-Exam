import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Counter from "./Components/Counter"
import ErrorPage from "./Components/ErrorPage"
import NotFound from './Components/NotFound'
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
          <Route path='/error' element={<ErrorPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App