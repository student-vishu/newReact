import React from "react";
import { Link } from "react-router-dom";
import "../styles/adminslidebar.css";

const AdminSlider = () => {
  return (
    <aside className="admin-slider">
      <ul>
        <li> <Link to="/">Dashboard</Link> </li>
        <li> <Link to="/manageuser">ManageUsers</Link> </li>
        <li> <Link to="/managebook">ManageBooks</Link> </li>
        <li> <Link to="/manageorder">ManageOrder</Link> </li>
        <li> <Link to="/profile">Profile</Link>  </li>
        <li> <Link to="/loogout">Logout</Link> </li>
      </ul>
    </aside>
  );
};

export default AdminSlider;
