// src/components/Home.js
import React from 'react';
import Card from './Card';
import '../styles/Home.css';

// Sample data for cards
const cardData = {
  services: {
    image: 'public/images/download.jfif',  // Relative to the public directory
    title: 'Our Services',
    description: 'Explore our wide range of beauty services including hair styling, skin care, and more.',
  },
  products: {
    image: '/images/products.jpg',  // Relative to the public directory
    title: 'Our Products',
    description: 'Browse our selection of premium beauty products for all your needs.',
  },
  gallery: {
    image: '/images/gallery.jpg',  // Relative to the public directory
    title: 'Gallery',
    description: 'Check out some of our recent work and client transformations in our gallery.',
  },
};

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Our Beauty Parlour</h2>
      <div className="cards-container">
        <Card
          image={cardData.services.image}
          title={cardData.services.title}
          description={cardData.services.description}
        />
        <Card
          image={cardData.products.image}
          title={cardData.products.title}
          description={cardData.products.description}
        />
        <Card
          image={cardData.gallery.image}
          title={cardData.gallery.title}
          description={cardData.gallery.description}
        />
      </div>
    </div>
  );
};

export default Home;
