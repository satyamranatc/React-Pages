import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from "./components/NavBar"
import Home from './pages/Home'
import Service from './pages/Service'
import About from './pages/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>

        <BrowserRouter>
            <NavBar/>
            
            <Routes>
              <Route path='' element={<Home/>}  />
              <Route path='/service' element={<Service/>}  />
              <Route path='/about' element={<About/>}  />
            </Routes>

            <Footer/>
          </BrowserRouter>


    </div>
  )
}
