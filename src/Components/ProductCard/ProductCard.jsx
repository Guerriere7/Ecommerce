import React, { useState } from 'react'
import './ProductCard.css'


export const ProductCard = ({tittle, real_price, final_price, discount, img,}) =>{

    const [isBought, setIsBought] = useState(false)

    const handleClickBuyButton = () =>{
        alert('Gracias por su compra')
        setIsBought(true)
    }

    let button 

    if (isBought) {
        button = <button disabled>Comprado</button>
    }
    else{
        button = <button onClick={handleClickBuyButton}>Comprar</button>
    }
    return (
        <div className="product-card">
          <img src={img} alt="producto" />
          <h3>{tittle}</h3>
          <div className="price-container">
            <span className="real-price">${real_price}</span>
            <span className="discount">{discount}% OFF</span>
          </div>
          <span className="final-price">${final_price}</span>
          {button}
        </div>
      )
    }

