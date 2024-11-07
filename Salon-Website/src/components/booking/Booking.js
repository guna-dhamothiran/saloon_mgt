import React, { useState } from "react";
import "./booking.css";
import logo from '../../assets/barber.png';
import genderImage from '../../assets/gender.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import Login from  './Login' // Import the Login component

const BookingContainer = ({ toggleBooking }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if user is logged in
    const [gender, setGender] = useState(null);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        serviceType: "",
        preferredDate: "",
        preferredTime: "",
        period: "AM",
    });

    // Handle input change for form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle gender selection
    const handleGenderSelection = (selectedGender) => {
        setGender(selectedGender);
    };

    // Handle booking submission
    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        const newBooking = {
            ...formData,
            gender,
            timestamp: new Date().toISOString(),
        };

        console.log("Submitting booking:", newBooking);

        // Simulate booking success
        try {
            console.log('Booking successful: Mocking API');
            setBookingSuccess(true); // Display success message
            sendEmail(newBooking); // Send confirmation email
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
    };

    // Send confirmation email using emailjs
    const sendEmail = (booking) => {
        const templateParams = {
            name: booking.name,
            serviceType: booking.serviceType,
            gender: booking.gender,
            preferredDate: booking.preferredDate,
            preferredTime: booking.preferredTime,
            period: booking.period,
            email: booking.email,
        };

        emailjs.send('service_yhyo8we', 'template_wcnl5if', templateParams, 'dTdew8Hyq58XaMGhL')
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
            }, (error) => {
                console.error('Failed to send email.', error);
            });
    };

    // Render gender selection buttons
    const renderGenderSelection = () => (
        <div className="gender-selection">
            <h2>Choose Your Gender</h2>
            <img className="gender-image" src={genderImage} alt="Gender Selection" />
            <div className="gender-buttons">
                <button
                    className={`gender-button ${gender === "male" ? "selected" : ""}`}
                    onClick={() => handleGenderSelection("male")}
                >
                    ♂️ Male
                </button>
                <button
                    className={`gender-button ${gender === "female" ? "selected" : ""}`}
                    onClick={() => handleGenderSelection("female")}
                >
                    ♀️ Female
                </button>
            </div>
        </div>
    );

    // Render form for booking
    const renderForm = () => (
        <form className="booking-form" onSubmit={handleBookingSubmit}>
            <h2>Let's not wait for the "Perfect Look"</h2>
            <p>Book An Appointment Now!</p>
            <div className="input-group">
                <label>Name*</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="input-group">
                <label>Contact*</label>
                <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="input-group">
                <label>Email Id*</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="input-group">
                <label>Service Type*</label>
                <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select...</option>
                    {gender === "male" ? (
                        <>
                            <option value="Haircut">Haircut</option>
                            <option value="Beard Trim">Beard Trim</option>
                            <option value="Shampoo and Style">Shampoo and Style</option>
                            <option value="Facial">Facial</option>
                            <option value="Skincare">Skincare</option>
                        </>
                    ) : (
                        <>
                            <option value="Haircut">Haircut</option>
                            <option value="Coloring">Coloring</option>
                            <option value="Deep Conditioning">Deep Conditioning</option>
                            <option value="Facial">Facial</option>
                            <option value="Skin Care">Skin Care</option>
                        </>
                    )}
                </select>
            </div>
            <div className="input-group">
                <label>Preferred Date*</label>
                <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="input-group">
                <label>Preferred Time*</label>
                <input
                    type="time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="input-group">
                <label>AM/PM*</label>
                <select
                    name="period"
                    value={formData.period}
                    onChange={handleInputChange}
                    required
                >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
            <button type="submit" className="submit-button">Book Appointment</button>
        </form>
    );

    // Render success message after booking
    const renderSuccessMessage = () => (
        <div className="success-message">
            <h3>🎉 Booking Successful!</h3>
            <p>Your booking has been confirmed. A confirmation email has been sent to <strong>{formData.email}</strong>.</p>
            <p><strong>Service:</strong> {formData.serviceType}</p>
            <p><strong>Date:</strong> {formData.preferredDate}</p>
            <p><strong>Time:</strong> {formData.preferredTime} {formData.period}</p>
            <button onClick={() => setBookingSuccess(false)}>Book Another Service</button>
        </div>
    );

    return (
        <div className="booking-overlay">
            <div className="booking-container">
                <div className="booking-header">
                    <img src={logo} alt="Logo" className="booking-logo" />
                    <div className="header-buttons">
                        {isAuthenticated ? (
                            <button className="logout-button" onClick={() => setIsAuthenticated(false)}>Logout</button>
                        ) : (
                            <button className="close-button" onClick={toggleBooking}>
                                <FontAwesomeIcon icon={faXmark} style={{ color: "gray" }} />
                            </button>
                        )}
                    </div>
                </div>
                <hr />
                {!isAuthenticated ? (
                    <Login onLogin={() => setIsAuthenticated(true)} /> // Render login if not authenticated
                ) : (
                    gender ? (bookingSuccess ? renderSuccessMessage() : renderForm()) : renderGenderSelection()
                )}
            </div>
        </div>
    );
};

export default BookingContainer;
