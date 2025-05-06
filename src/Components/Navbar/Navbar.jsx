import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <header>
      <h1>Ecommerce</h1>
      <nav>
        <Link to={'/'}>Inicio</Link>
        <Link to={'/Register'}>Registro</Link>
        <Link to={'/Login'}>Login</Link>
      </nav>
    </header>
  )
}


