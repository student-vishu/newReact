import React from "react";
import "../styles/adminslidebar.css";

const AdminSlider = () => {
  return (
    <aside className="admin-slider">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </aside>
  );
};

export default AdminSlider;
