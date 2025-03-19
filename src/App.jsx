import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHeader from "./admin-penal/components/Adminheader";
import AdminSlider from "./admin-penal/components/Adminslidbar";
import Profile from "./admin-penal/pages/Profile";
import Logout from "./admin-penal/pages/Logout";
import AdminDashboard from "./admin-penal/pages/AdminDashboard";
import ManageUsers from "./admin-penal/pages/ManageUsers";
import ManageBooks from "./admin-penal/pages/ManageBooks";
import ManageOrders from "./admin-penal/pages/ManageOrder";

const App = () => {
  return (
    <Router>
      <AdminHeader />
      <div className="admin-container">
        <AdminSlider />
        <div className="admin-content">
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/manageuser" element={<ManageUsers />} />
            <Route path="/managebook" element={<ManageBooks />} />
            <Route path="/manageorder" element={<ManageOrders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
