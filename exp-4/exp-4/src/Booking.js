import React, { useState } from 'react';

function Booking() {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully booked for ${service} on ${date} by ${name}`);
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Service:</label>
          <select value={service} onChange={(e) => setService(e.target.value)} required>
            <option value="">Select Service</option>
            <option value="Haircut">Haircut</option>
            <option value="Facial">Facial</option>
            <option value="Manicure & Pedicure">Manicure & Pedicure</option>
            <option value="Hair Coloring">Hair Coloring</option>
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
