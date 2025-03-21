import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/logout.css"

const Loogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic
    alert("You have been logged out!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="logout-container">
      <h1>Logout</h1>
      <p>Are you sure you want to log out?</p>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Loogout;
