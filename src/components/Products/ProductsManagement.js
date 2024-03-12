// ProductsManagement.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductsManagement.css';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { useNavigate } from 'react-router-dom';
const ProductsManagement = () => {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 0, stockQuantity: 0 });
  const [isEditing, setEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    const newProductId = Math.max(...products.map((product) => product.id), 0) + 1;
    setProducts([...products, { ...newProduct, id: newProductId }]);
    setNewProduct({ name: '', category: '', price: 0, stockQuantity: 0 });
  };

  const handleEditProduct = (id) => {
    setEditing(true);
    setEditProductId(id);
    const productToEdit = products.find((product) => product.id === id);
    setNewProduct(productToEdit);
  };

  const handleUpdateProduct = () => {
    setProducts(products.map((product) => (product.id === editProductId ? newProduct : product)));
    localStorage.setItem('products', JSON.stringify(products));
    setEditing(false);
    setEditProductId(null);
    setNewProduct({ name: '', category: '', price: 0, stockQuantity: 0 });
  };

  const handleDeleteProduct = (id) => {
    // Set the new state after filtering out the deleted product
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  
    // Update the local storage with the new state
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };
  const navigate = useNavigate();
  const handleGoToDashboard = ()=>{
    navigate('/');
  }
  return (
    <>
    <div className="productManagement">
      <h2>Products Management</h2>
      <ProductForm
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        isEditing={isEditing}
        handleAddProduct={handleAddProduct}
        handleUpdateProduct={handleUpdateProduct}
      />
      </div>
      <div className="link">
      <Link style={{ textDecoration: 'none', color: '#3498db', fontWeight: 'bold' }} onClick={handleGoToDashboard} to="/">Go to Dashboard</Link>
      </div>
      <div className="product-list">
      <ProductList
        products={products}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
      />
      </div>
  
    
 </> );
};

export default ProductsManagement;
