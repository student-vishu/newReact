import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHeader from "./admin-penal/components/Adminheader";
import AdminSlider from "./admin-penal/components/Adminslidbar";
import Profile from "./admin-penal/pages/Profile";
import Logout from "./admin-penal/pages/Logout";

const App = () => {
  return (
    <Router>
      <AdminHeader />
      <div className="admin-container">
        <AdminSlider />
        <div className="admin-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
