// ProductForm.js
import React from 'react';
import './productForm.css';

const ProductForm = ({ newProduct, setNewProduct, isEditing, handleAddProduct, handleUpdateProduct }) => {
  const { name, category, price, stockQuantity } = newProduct;

  const isFormValid = () => {
    return name.trim() !== '' && category.trim() !== '' && price > 0 && stockQuantity >= 0;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      if (isEditing) {
        handleUpdateProduct();
      } else {
        handleAddProduct();
      }
    } else {
      // Handle invalid form submission (e.g., show an error message)
      alert('Please fill in all the fields with valid values.');
    }
  };

  return (
    <>
      <form className="product-form">
        <div className="form-labal">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required />
        </div>
        <div className="form-labal">
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} required />
        </div>
        <div className="form-labal">
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 })} required />
        </div>
        <div className="form-labal">
          <label>Stock Quantity:</label>
          <input type="number" value={stockQuantity} onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: parseInt(e.target.value) || 0 })} required />
        </div>
        <div>
          {isEditing ? (
            <button type="button" onClick={handleSubmit}>
              Update Product
            </button>
          ) : (
            <button type="button" onClick={handleSubmit}>
              Add Product
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default ProductForm;
