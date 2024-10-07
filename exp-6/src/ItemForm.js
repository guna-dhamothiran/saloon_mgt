// ItemForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = { name, description, quantity };

    try {
      // Send the data to the backend
      await axios.post('http://localhost:5000/api/items', newItem);
      alert('Item added successfully');
      
      // Add the new item to the parent component's state
      addItem(newItem);

      // Reset form
      setName('');
      setDescription('');
      setQuantity('');
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Error adding item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
