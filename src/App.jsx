import React from 'react'
import ProductList from './Components/ProductList/ProductList'
import { Route, Routes, useLocation } from 'react-router-dom'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'




function App() {
  console.log(useLocation())
  return (
    
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
  )
}



export default App
