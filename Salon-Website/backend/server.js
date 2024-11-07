const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Define schema for Booking
const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    serviceType: { type: String, required: true },
    preferredDate: { type: Date, required: true },
    preferredTime: { type: String, required: true },
    period: { type: String, required: true },
    gender: { type: String, required: true }, // Added gender field
    timestamp: { type: Date, default: Date.now } // Added timestamp
});

// Check if 'Booking' model already exists in mongoose models to prevent redeclaration
const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/salon_booking', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Handle booking request
app.post('/api/book', async (req, res) => {
    try {
        // Extract form data from the request body
        const { name, contact, email, serviceType, preferredDate, preferredTime, period, gender } = req.body;

        // Create a new booking object
        const newBooking = new Booking({
            name,
            contact,
            email,
            serviceType,
            preferredDate,
            preferredTime,
            period,
            gender
        });

        // Save the new booking to the database
        await newBooking.save();

        // Respond with success message
        res.status(200).json({ message: "Booking successfully created", booking: newBooking });
    } catch (error) {
        // Respond with an error message
        res.status(500).json({ message: "Error creating booking", error });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
