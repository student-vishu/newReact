import AdminHeader from "../components/Adminheader";
import AdminSidebar from "../components/Adminslidbar";
import "../styles/admindashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-content">
        <AdminHeader />
        <div className="dashboard-content">
          <h2>Welcome to the Admin Panel</h2>
          <p>Manage books, users, and orders from here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
