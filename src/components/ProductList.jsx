import React, { useState, useEffect } from 'react';
import API from '../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    // Fetch all products from backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // इथे /products ऐवजी /products/all केले आहे
                const response = await API.get('/products/all');
                setProducts(response.data);
                setError('');
            } catch (err) {
                console.error(err);
                setError('Failed to load products! Please check backend or CORS configuration.');
            }
        };
        fetchProducts();
    }, []);

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Available Products</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id || product.productId} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p style={{ fontWeight: 'bold', color: '#28a745' }}>₹{product.price}</p>
                            <button style={{ padding: '8px 12px', backgroundColor: '#ff9900', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    !error && <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;