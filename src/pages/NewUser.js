import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import UserForm from "../component/UserForm";

const NewUser = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    userType: "",
    phone: "",
    mail: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Create clicked!", { ...formData, status });

    // Navigate to Update page with state
    navigate("/users/update", { state: { ...formData, status } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 px-16 py-20">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => navigate("/users")}
                className="p-2 rounded-full hover:bg-gray-200 flex items-center"
              >
                <FiArrowLeft className="text-lg text-gray-600 mt-0.5" />
              </button>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 font-medium">
                  Manage Users /
                </span>
                <span className="text-xl text-indigo-700 font-semibold">
                  New User
                </span>
              </div>
            </div>
            <div className="mt-3 border-b border-gray-300"></div>
          </div>

          {/* Form */}
          <div className="max-w-5xl">
            <UserForm
              formData={formData}
              onChange={handleChange}
              status={status}
              setStatus={setStatus}
            />

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                type="button" // important!
                onClick={handleSubmit}
                className="bg-indigo-700 text-white px-10 py-2 rounded-md hover:bg-indigo-800"
              >
                Create
              </button>
              <button
                type="button"
                onClick={() => navigate("/users")}
                className="border border-indigo-700 text-indigo-700 px-10 py-2 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
