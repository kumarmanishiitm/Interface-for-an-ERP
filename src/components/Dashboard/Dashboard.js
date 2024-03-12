import orderlist from '../Orders/OrderList';
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
const Dashboard = ({ products }) => {
  const totalorder=orderlist.length;
  const totalProducts = products ? products.length : 0;
  console.log('Products in Dashboard:', products);
  return (
    <div className="dashboard-container">
      <div className="navbar">
        <h1>ERP System</h1>
        <div className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/orders">Orders</Link>
        </div>
      </div>
      <div className="main-content">
        <h2 className="dash_heading">Dashboard</h2>
        <div className="metrics-container">
          <div className="metric">
            <h3>Total Products</h3>
            <p>{totalProducts}</p>
          </div>
          <div className="metric">
            <h3>Total Orders</h3>
            <p>{totalorder}</p>
          </div>
          {/* Add more metrics as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
