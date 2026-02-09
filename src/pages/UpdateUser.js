import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import UserForm from "../component/UserForm";

const UpdateUser = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  // load user
  useEffect(() => {
    const user = users.find((u) => u.id === Number(id));
    if (user) setFormData(user);
  }, [id, users]);

  //  handle change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //  update
  const handleUpdate = (e) => {
    e.preventDefault();

    setUsers((prev) =>
      prev.map((u) => (u.id === formData.id ? formData : u))
    );

    navigate("/users");
  };

  if (!formData) return null;

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
                <IoIosArrowDropleft className="text-xl text-gray-600" />
              </button>

              <div>
                <p className="text-sm text-gray-500">Manage Users /</p>
                <h2 className="text-xl font-semibold text-[#272757]">
                  Update User
                </h2>
              </div>
            </div>
            <div className="mt-3 border-b border-gray-300" />
          </div>

          <UserForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleUpdate}
            submitLabel="Update"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
