// Product.js
import React from 'react';
import './ProductsManagement.css';
const Product = ({ product, handleEditProduct, handleDeleteProduct }) => {
  return (
    <li key={product.id} >
      {product.name} - {product.category} - ${product.price} - {product.stockQuantity} in stock
      <div className="action-button">
      <button   onClick={() => handleEditProduct(product.id)}>Edit</button>
      <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
      </div>
    </li>
  );
};

export default Product;
