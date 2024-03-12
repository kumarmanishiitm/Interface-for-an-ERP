// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ProductsManagement from './components/Products/ProductsManagement';
import OrdersManagement from './components/Orders/OrdersManagement';

function App() {
  // Assuming this is where you manage the state of products
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard products={products} />} 
        />
        <Route
          path="/products"
          element={<ProductsManagement products={products} setProducts={setProducts} />}
        />
    <Route
          path="/orders"
          element={<OrdersManagement/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
