import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productServices";
import { Navbar } from "../Navbar/Navbar";
import AddToCartButton from "../Buttons/AddToCartButton/AddToCartButton";
import BuyNowButton from "../Buttons/BuyButton/BuyNowButton";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const product_response = await getProductById(id);
      if (product_response) {
        setProduct(product_response);
      } else {
        setError("Error al obtener el detalle del producto");
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Cargando detalle del producto...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div>
      <Navbar />
      <main className="product-detail-page">
        <div className="product-detail-card">
          <img src={product.img} alt={product.tittle} />
          <h3>{product.tittle}</h3>
          <span className="short-description">
            {product.short_description}
          </span>{" "}
          <span className="description">{product.description}</span>
          <div className="price-container">
            <span className="real-price">${product.real_price}</span>
            <span className="discount">{product.discount}% OFF</span>
          </div>
          <span className="final-price">${product.final_price}</span>
          <div className="flex gap-3 mt-3">
            <AddToCartButton />
            <BuyNowButton />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
