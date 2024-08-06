// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import './styles/App.css';

// Sample user data
const user = {
  name: 'Guna',
  username: 'Guna',
  avatar: './download.jfif', // Make sure this image is in the public/images directory
  bio: 'Software engineer with a passion for web development and design.',
  email: 'gunad210@gmail.com',
  phone: '6369917195',
};

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<UserProfile user={user} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
