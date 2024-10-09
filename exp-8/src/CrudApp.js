import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CrudApp.css'; // For custom styling

const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [error, setError] = useState(''); // For handling error messages

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/items'); // Update with correct backend URL
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
      setError('Error fetching items: ' + (error.response ? error.response.data : error.message));
    }
  };

  const addItem = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!newItem.trim()) return; // Don't add if the input is empty

    try {
      const response = await axios.post('http://localhost:5000/api/items', { name: newItem });
      setItems([...items, response.data]); // Update the state to include the new item
      setNewItem(''); // Clear input after adding
    } catch (error) {
      console.error('Error adding item:', error.response ? error.response.data : error.message);
      setError('Error adding item: ' + (error.response ? error.response.data : error.message));
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/${id}`);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      setError('Error deleting item: ' + (error.response ? error.response.data : error.message));
    }
  };

  const editItem = async (id) => {
    if (!editValue.trim()) return;

    try {
      const response = await axios.put(`http://localhost:5000/api/items/${id}`, { name: editValue });
      setItems(items.map((item) => (item._id === id ? response.data : item)));
      setEditId(null);
      setEditValue('');
    } catch (error) {
      setError('Error updating item: ' + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <div className="crud-container">
      <h1>CRUD Application</h1>
      
      {error && <p className="error-message">{error}</p>}

      <form className="add-item-form" onSubmit={addItem}>
        <input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul className="item-list">
        {items.map((item) => (
          <li key={item._id} className="item">
            {editId === item._id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={() => editItem(item._id)}>Save</button>
              </>
            ) : (
              <>
                <span>{item.name}</span>
                <button
                  onClick={() => {
                    setEditId(item._id);
                    setEditValue(item.name);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteItem(item._id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
