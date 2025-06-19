import React, { useState } from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./Login.css";

const Login = ({ onLogin }) => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (loginData.email && loginData.password) {
            // Replace this with your own email/password auth logic
            onLogin(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Please enter your email and password.");
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Google User:", user);
            onLogin(true);
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

            <hr />

            <button onClick={handleGoogleLogin} className="google-button">
                Login with Google
            </button>
        </div>
    );
};

export default Login;
