import React, { useState } from "react";
import { Link } from "react-router-dom";
import BuyNowButton from "../Buttons/BuyButton/BuyNowButton";
import AddToCartButton from "../Buttons/AddToCartButton/AddToCartButton";
import "./ProductCard.css";

export const ProductCard = ({
  id,
  tittle,
  short_description,
  real_price,
  final_price,
  discount,
  img,
}) => {
  const [isBought, setIsBought] = useState(false);

  const handleAddToCart = () => {
    setIsBought(true);
  };

  const handleBuyNow = () => {
    setIsBought(true);
    alert("Gracias por su compra");
  };

  return (
    <div className="product-card">
      <img src={img} alt="producto" />
      <h3>{tittle}</h3>
      <span className="short-description">{short_description}</span>
      <div className="price-container">
        <span className="real-price">${real_price}</span>
        <span className="discount">{discount}% OFF</span>
      </div>
      <span className="final-price">${final_price}</span>

      <div className="flex gap-3 mt-3">
        <AddToCartButton added={isBought} onAdd={handleAddToCart} />
        <BuyNowButton bought={isBought} onBuy={handleBuyNow} />
        <Link to={`/products/${id}`}>
          <button className="view-more-button">Ver Más</button>
        </Link>
      </div>
    </div>
  );
};
