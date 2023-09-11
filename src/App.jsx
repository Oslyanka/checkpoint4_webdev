import { } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Nav from './Nav'
import About from './About'
import Produtos from './Products'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Produtos' element={<Produtos/>}/>
      <Route path='/Sobre' element={<About/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
