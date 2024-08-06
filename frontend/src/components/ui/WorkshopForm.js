import React, { useState } from "react";
import axios from "axios";
// import "./WorkshopForm.css"; // If you have specific styles, keep this import

const WorkshopForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required");
      return;
    }
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:5000/workshop",
        formData
      );
      console.log(response.data); // Log the response for debugging
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error); // Log the detailed error
      setError("Failed to submit the form");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-r from-blue-50 to-white shadow-lg rounded-lg overflow-hidden p-6 md:p-8">
      <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
        Contact Us
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        We are committed to promoting safe drinking water through traditional
        filtration methods and awareness programs. If you would like to schedule
        a physical demonstration or learn more about our drinking water
        awareness initiatives, please fill out the contact form below. Our team
        will get in touch with you shortly.
      </p>
      {submitted && (
        <p className="text-green-600 text-center font-medium mb-4">
          Thank you for your message!
        </p>
      )}
      {error && (
        <p className="text-red-600 text-center font-medium mb-4">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm resize-none min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            placeholder="Enter your message"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkshopForm;
