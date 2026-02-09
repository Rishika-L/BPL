import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";

import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import CommonForm from "../component/CommonForm";

/* 🔹 FORM FIELDS CONFIG */
const fields = [
  { name: "userId", label: "User ID", required: true, fullWidth: true },

  {
    name: "group",
    label: "Group Name",
    type: "select",
    options: ["Admin", "User"],
    required: true,
    fullWidth: true,
  },

  { name: "firstName", label: "First Name", required: true },
  { name: "lastName", label: "Last Name" },

  { name: "dob", label: "Date of Birth", type: "date" },

  {
    name: "gender",
    label: "Gender",
    type: "select",
    options: ["Male", "Female"],
    required: true,
  },

  { name: "phone", label: "Phone Number", required: true },
  { name: "email", label: "Email", type: "email", required: true },

  { name: "address", label: "Address" },

  { name: "status", label: "Status", type: "toggle" },

  { name: "image", label: "Profile Image", type: "file", fullWidth: true },
];

const NewUser = () => {
  const navigate = useNavigate();

  /* 🔹 SUBMIT HANDLER */
  const handleSubmit = (data) => {
    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      id: Date.now(),
      ...data,

      // 🔹 image preview for table
      imagePreview: data.image
        ? URL.createObjectURL(data.image)
        : "",

      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "users",
      JSON.stringify([...existingUsers, newUser])
    );

    navigate("/users");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 px-16 py-20">
          {/* 🔹 HEADER */}
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/users")}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <IoIosArrowDropleft className="text-xl text-gray-600 mt-7" />
              </button>

              <div>
                <p className="text-sm text-gray-500">
                  Manage Users /
                </p>
                <h2 className="text-2xl font-semibold text-[#272757]">
                  New User
                </h2>
              </div>
            </div>

            <div className="mt-3 border-b border-gray-300" />
          </div>

          {/* 🔹 COMMON FORM */}
          <CommonForm
            fields={fields}
            initialData={{ status: true }}
            onSubmit={handleSubmit}
            onCancel={() => navigate("/users")}
          />
        </div>
      </div>
    </div>
  );
};

export default NewUser;
