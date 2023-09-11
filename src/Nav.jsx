import {} from 'react'
import { NavLink } from 'react-router-dom'

function Nav(){
  return(
    <>
    <NavLink to="/">Home </NavLink>
    <NavLink to="/Produtos">Produtos </NavLink>
    <NavLink to="/Sobre">Sobre </NavLink>
    </>
  )
}
export default Nav