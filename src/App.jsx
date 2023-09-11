import { } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Nav from './Nav'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route/>
      <Route/>
      <Route/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
