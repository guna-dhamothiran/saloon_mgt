// src/components/UserProfile.js
import React from 'react';
import '../styles/UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.avatar} alt={`${user.name}'s avatar`} className="avatar" />
        <h1>{user.name}</h1>
        <p>@{user.username}</p>
      </div>
      <div className="profile-details">
        <h2>About</h2>
        <p>{user.bio}</p>
        <h2>Contact</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};

export default UserProfile;
