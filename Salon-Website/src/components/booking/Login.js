import React, { useState } from "react";
import { auth } from "./firebase"; // Adjust the import path as necessary
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = ({ onLogin }) => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // You can add your logic for email/password authentication here
        if (loginData.email && loginData.password) {
            onLogin(true); // Trigger the onLogin callback to indicate successful login
            setErrorMessage(""); // Clear any previous error message
        } else {
            setErrorMessage("Please enter your email and password."); // Set a general error message
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log("Google User:", user);
            onLogin(true); // Trigger the onLogin callback to indicate successful login
        } catch (error) {
            console.error("Google login error:", error);
            setErrorMessage("Failed to log in with Google.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" className="submit-button">Login</button>
            </form>
            <button onClick={handleGoogleLogin} className="google-button">
                Login with Google
            </button>
        </div>
    );
};

export default Login;
