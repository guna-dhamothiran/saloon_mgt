import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Booking from './Booking';
import './App.css'; // Importing the CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation bar */}
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/booking" className="nav-link">Booking</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
