import React from "react";
import ProductList from "./Components/ProductList/ProductList";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  console.log(useLocation());
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
