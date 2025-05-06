import React, { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { getProducts } from '../../services/productServices'
import { Navbar } from '../Navbar/Navbar';



const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getProduct = async () => {
    setLoading(true);
    const product_list_response = await getProducts();
    if (product_list_response) {
        setProducts(product_list_response);
    } else {
        setError('Error al obtener productos');
    }
    setLoading(false);
    }

    useEffect(() => {
    getProduct();
    }, [])

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
    <div>
        <Navbar/>
        {products.map((product) => (
        <ProductCard {...product} key={product.id} />
        ))}
    </div>
    )
}

export default ProductList