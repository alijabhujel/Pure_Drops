import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

const AdminSidebar = ({ handleLogout }) => {
  return (
    <div className="h-screen bg-blue-500 text-white w-64 flex flex-col p-4">
      <div className="flex items-center mb-6">
        <img src="images/puredrops.png" alt="logo" className="h-12 w-auto" />
        <h1 className="text-2xl font-bold ml-4">Admin</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-4">
          <li>
            <Link
              to="/AdminDashboard/"
              className="block py-2 px-4 hover:bg-blue-600 rounded transition-colors duration-200"
            >
              Workshop Requests
            </Link>
          </li>
          <li>
            <Link
              to="/AdminDashboard/AddMethods"
              className="block py-2 px-4 hover:bg-blue-600 rounded transition-colors duration-200"
            >
              Add Methods
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="flex items-center py-2 px-4 hover:bg-blue-600 rounded transition-colors duration-200 mt-auto"
      >
        <AiOutlineLogout className="mr-1" />
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
