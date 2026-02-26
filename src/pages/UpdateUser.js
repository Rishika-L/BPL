
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";

import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import CommonForm from "../component/CommonForm";


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

  { name: "location", label: "Location" },

  { name: "status", label: "Status", type: "toggle" },

  { name: "image", label: "Profile Image", type: "file", fullWidth: true },
];

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.id === parseInt(id));
    if (user) {
    setInitialData({
  userId: user.user_id || "",
  group: user.group_name || "",
  firstName: user.first_name || "",
  lastName: user.last_name || "",
  dob: user.dob ? user.dob.split("T")[0] : "",
  gender: user.gender || "",
  phone: user.phone || "",
  email: user.email || "",
  address: user.location || "",
  status: user.status === 1,
  image: null,
  imagePreview: user.image
    ? `http://localhost:8000/uploads/${user.image}`
    : "",
});
    } else {
      navigate("/users"); 
    }
  }, [id, navigate]);

  const handleSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) => {
      if (u.id === parseInt(id)) {
        return {
          ...u,
          ...data,
          imagePreview: data.image
            ? URL.createObjectURL(data.image)
            : u.imagePreview, 
        };
      }
      return u;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate("/users");
  };

  if (!initialData) return null; 

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 px-16 py-20">
          {/* HEADER */}
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/users")}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <IoIosArrowDropleft className="text-xl text-gray-600 mt-7" />
              </button>
              <div>
                <p className="text-sm text-gray-500">Manage Users / Edit</p>
                <h2 className="text-2xl font-semibold text-[#272757]">
                  Edit User
                </h2>
              </div>
            </div>
            {/* <div className="mt-3 pb- border-b border-gray-300" /> */}
          </div>

          {/* COMMON FORM */}
          <CommonForm
            fields={fields}
            initialData={initialData}
            // onClick={handleEdit}
            onSubmit={handleSubmit}
            onCancel={() => navigate("/users")}
          />
        </div>
      </div>
    </div>
  );
};

export default EditUser;
