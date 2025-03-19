import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./admin-penal/pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Add a default home route */}
        <Route path="/" element={<h1>Welcome to Book Management System</h1>} />
        
        {/* Your existing admin route */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
