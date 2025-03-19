import React from "react";
import "../styles/manageorder.css";

const ManageOrders = () => {
  return (
    <div className="manage-orders">
      <h1>Manage Orders</h1>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Book Title</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5001</td>
            <td>Michael Scott</td>
            <td>JavaScript Essentials</td>
            <td>$15.99</td>
            <td>
              <select>
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
