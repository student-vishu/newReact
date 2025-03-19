import React from "react";
import { Link } from "react-router-dom";
import "../styles/adminheader.css";

const AdminHeader = () => {
  return (
    <header className="admin-header">
    <h2>Admin Panel</h2>
    <nav>
      <Link to="/profile">Profile</Link> | <Link to="/logout">Logout</Link>
    </nav>
  </header>
  );
};

export default AdminHeader;
