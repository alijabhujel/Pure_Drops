import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "./AdminSidebar"; // Import the new AdminSidebar component

const AdminDashboard = () => {
  const [workshopRequests, setWorkshopRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch workshop requests from the API when component mounts
    const fetchWorkshopRequests = async () => {
      try {
        const response = await axios.get("http://localhost:5000/workshop");
        setWorkshopRequests(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching workshop requests:", error);
      }
    };

    fetchWorkshopRequests();
  }, []);

  const handleLogout = () => {
    // Logic for logout
    // For example, clearing authentication tokens, redirecting to login page, etc.
    navigate("/"); // Redirect to home or login page after logout
  };

  return (
    <div className="flex">
      <AdminSidebar handleLogout={handleLogout} />
      <div className="flex-grow p-4">
        <h2 className="text-xl font-bold mb-4">Workshop Requests</h2>
        <table className="w-full bg-white text-black rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Message</th>
            </tr>
          </thead>
          <tbody>
            {workshopRequests.map((request) => (
              <tr key={request._id}>
                <td className="p-2 border">{request.name}</td>
                <td className="p-2 border">{request.email}</td>
                <td className="p-2 border">{request.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
