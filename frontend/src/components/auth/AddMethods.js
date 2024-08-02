import React from "react";
import AdminSidebar from "./AdminSidebar"; // Import the AdminSidebar component

const AddMethods = () => {
  const handleLogout = () => {
    // Logic for logout
    // For example, clearing authentication tokens, redirecting to login page, etc.
  };

  return (
    <div className="flex">
      <AdminSidebar handleLogout={handleLogout} />
      <div className="flex-grow p-4">
        <h2 className="text-xl font-bold mb-4">Add Methods</h2>
        {/* Add your content for adding methods here */}
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="method-name"
            >
              Method Name
            </label>
            <input
              type="text"
              id="method-name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="method-description"
            >
              Method Description
            </label>
            <textarea
              id="method-description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Method
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMethods;
