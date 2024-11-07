// AdminPanel.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import BookingContainer from '../../components/booking/Booking';
import './adminPanel.css'; // Add CSS for styling

const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <nav className="admin-nav">
                <h2>Admin Dashboard</h2>
                <ul>
                    <li><Link to="/admin/bookings">Bookings</Link></li>
                    <li><Link to="/admin/users">Users</Link></li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
            <div className="admin-content">
                <Routes>
                    <Route path="bookings" element={<BookingContainer />} />
                    <Route path="users" element={<div>User Management Coming Soon</div>} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </div>
    );
};

export default AdminPanel;
