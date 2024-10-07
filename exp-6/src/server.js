// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize express
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/itemsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Create schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  quantity: Number,
});

const Item = mongoose.model('Item', itemSchema);

// Create POST route to add item to the database
app.post('/api/items', async (req, res) => {
  const { name, description, quantity } = req.body;

  const newItem = new Item({
    name,
    description,
    quantity,
  });

  try {
    await newItem.save();
    res.status(201).send('Item added');
  } catch (error) {
    res.status(500).send('Error saving item');
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
