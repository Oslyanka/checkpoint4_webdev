import { } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Nav from './Nav'
import About from './About'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route/>
      <Route path='/Sobre' element={<About/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
