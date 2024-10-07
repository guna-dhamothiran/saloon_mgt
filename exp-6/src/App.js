// App.js
import React, { useState } from 'react';
import './App.css';
import ItemForm from './ItemForm';

function App() {
  const [items, setItems] = useState([]); // State to store the list of items

  const addItem = (item) => {
    setItems([...items, item]); // Update the items array with the new item
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Add New Item</h1>
      </header>
      <ItemForm addItem={addItem} /> {/* Pass addItem function to ItemForm */}
      
      <h2>Items List:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.description} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
