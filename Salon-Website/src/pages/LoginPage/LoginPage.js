import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from './firebase'; // Import Firebase auth and provider
import './LoginPage.css';
//import firebase from "./firebase";


const LoginPage = () => {
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate(); // Initialize navigate

  // Handle Google Sign-In
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Successfully signed in
        setSuccessMessage('Successfully logged in with Google!');
        setTimeout(() => {
          setSuccessMessage('');
          navigate('/'); // Redirect to home after 2 seconds
        }, 2000);
      })
      .catch((error) => {
        console.error('Error during Google sign-in:', error);
        setSuccessMessage('Failed to sign in with Google.');
      });
  };

  const handleBack = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>Login</h2>
        <button className="google-button" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
        <button onClick={handleBack} className="back-button">Back to Home</button>
      </div>
    </div>
  );
};

export default LoginPage;
