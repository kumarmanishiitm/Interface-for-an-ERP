// OrdersManagement.js
import React, { useState } from 'react';
import orderlist from './OrderList';
import './OrderList.css'
import '../Products/ProductsManagement.css';
import { Link } from 'react-router-dom';
const OrdersManagement = () => {

  const [orders, setOrders] = useState(orderlist);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  const handleViewDetails = (order) => {
    // Set the selected order for viewing details
    setSelectedOrder(order);
  };

  const handleUpdateStatus = () => {
    // Update the status of the selected order
    setOrders(
      orders.map((order) =>
        order.id === selectedOrder.id ? { ...order, status: newStatus } : order
      )
    );
    // Clear the selected order and new status
    setSelectedOrder(null);
    setNewStatus('');
  };

  const handleDeleteOrder = (id) => {
    // Delete the order from the list
    setOrders(orders.filter((order) => order.id !== id));
    // Clear the selected order and new status
    setSelectedOrder(null);
    setNewStatus('');
  };

  return (
    <div className=''>
      <h2>Orders Management</h2>
      <div className="link">
      <Link style={{ textDecoration: 'none', color: '#3498db', fontWeight: 'bold' }}  to="/">Go to Dashboard</Link>
      </div>
      {/* Orders List */}
      <div className='order-list-container'>
        {orders.map((order) => (
          <li key={order.id} style={{textDecoration: 'none',border:'none',marginLeft:'12px'}}>
            Order ID: {order.id} - Customer: {order.customerName} - Order Date: {order.orderDate} - Status: {order.status}
           <div className="button-click">
            <button onClick={() => handleViewDetails(order)}>View Details</button>
            <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
            </div>
          </li>
        ))}
      </div>

      {/* View Details and Update Status */}
      {selectedOrder && (
        <div >
        <h3 style={{textAlign: 'center'}}>Order Details</h3>
        <div className="order-details-container">
          <p>Order ID: {selectedOrder.id}</p>
          <p>Customer: {selectedOrder.customerName}</p>
          <p>Order Date: {selectedOrder.orderDate}</p>
          <p>Status: {selectedOrder.status}</p>
          </div>
          {/* Update Status Form */}
          <div className="form-detail-container">
          <form className="form-details">
             <div className="input-level">
            <label >New Status:</label>
            <input 
              type="text"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            />
            </div>
            <button type="button" onClick={handleUpdateStatus}>
              Update Status
            </button>
          </form>
          </div>
        </div>
      )}
      </div>
  );
};

export default OrdersManagement;
