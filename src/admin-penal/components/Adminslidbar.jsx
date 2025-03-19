import { Link } from "react-router-dom";
import "../styles/adminslidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/books">Manage Books</Link></li>
        <li><Link to="/admin/users">Manage Users</Link></li>
        <li><Link to="/admin/orders">Manage Orders</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
