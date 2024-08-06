import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "./AdminSidebar"; // Import the new AdminSidebar component

const AdminDashboard = () => {
  const [workshopRequests, setWorkshopRequests] = useState([]);
  const [selectedRequestId, setSelectedRequestId] = useState(null); // State to track the selected card
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/workshop/${id}`);
      setWorkshopRequests(
        workshopRequests.filter((request) => request._id !== id)
      );
    } catch (error) {
      console.error("Error deleting request:", error);
    }
  };

  const handleCardClick = (id) => {
    setSelectedRequestId(id === selectedRequestId ? null : id); // Toggle selected card
  };

  return (
    <div className="flex h-screen">
      <div className="w-64">
        <AdminSidebar handleLogout={handleLogout} />
      </div>
      <div className="flex-grow p-4 overflow-auto">
        <h2 className="text-xl font-bold mb-4">Workshop Requests</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {workshopRequests.map((request) => (
            <div
              key={request._id}
              className={`bg-white text-black p-4 rounded-lg shadow-md transition-all cursor-pointer ${
                selectedRequestId === request._id
                  ? "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
                  : ""
              }`}
              onClick={() => handleCardClick(request._id)}
            >
              <h3 className="text-lg font-bold mb-2">{request.name}</h3>
              <p className="mb-2">
                <strong>Email:</strong> {request.email}
              </p>
              <p className="mb-2">
                <strong>Message:</strong>{" "}
                {selectedRequestId === request._id ? (
                  request.message
                ) : (
                  <span className="block truncate">{request.message}</span>
                )}
              </p>
              {selectedRequestId === request._id && (
                <div>
                  {/* Add additional details you want to show when the card is expanded */}
                  <p className="mb-2">
                    <strong>Additional Info:</strong> Here you can add more
                    details...
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click handler
                      handleDelete(request._id);
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
