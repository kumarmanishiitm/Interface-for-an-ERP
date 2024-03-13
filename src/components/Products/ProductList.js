// ProductList.js
import React from 'react';
import Product from './Product';
import './ProductsManagement.css';
import './ProductList.css';

const ProductList = ({ products, handleEditProduct, handleDeleteProduct, additionalProps }) => {
  return (<>
      <h2 className="product-list-title">Product List</h2>
      <div className="product-list-container">
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleEditProduct={handleEditProduct}
            handleDeleteProduct={handleDeleteProduct}
            additionalProps={additionalProps}
          />
        ))}
      </div>
    </div>
    </>);
};

export default ProductList;
