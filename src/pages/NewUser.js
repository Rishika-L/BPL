import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import CommonForm from "../component/CommonForm";
import Toast from "../Components/Toast/Toast";

const NewUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state?.editData;

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({
      show: true,
      message: message,
      type: type,
    });
  };

  const closeToast = () => {
    setToast({
      show: false,
      message: "",
      type: "success",
    });
  };

  const fields = [
    {
      name: "userId",
      label: "User ID",
      required: true,
      fullWidth: true,
      disabled: !!editData,
    },
    {
      name: "group",
      label: "Group Name",
      type: "select",
      options: ["Admin", "User", "Manager"],
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
    { name: "phone", label: "Phone", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "address", label: "Address" },
    { name: "status", label: "Status", type: "toggle" },
    { name: "image", label: "Profile Image", type: "file", fullWidth: true },
  ];

  const handleCreateUser = async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const type_id = "87076d07-c3cc-4c72-af9a-a9b069c680be";

      const data = new FormData();

      data.append("user_id", formData.userId);
      data.append("first_name", formData.firstName);
      data.append("last_name", formData.lastName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("gender", formData.gender);
      data.append("dob", formData.dob);
      data.append("address", formData.address);
      data.append("user_type_id", type_id);
      data.append("group_name", formData.group);
      data.append("status", formData.status ? 1 : 0);

      if (formData.image) {
        data.append("user_image", formData.image);
      }

      const response = await fetch(
        "http://127.0.0.1:8000/api/user-create",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
          body: data,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "User creation failed");
      }

      showToast(result.message || "User Created Successfully", "success");

      setTimeout(() => {
        navigate("/users");
      }, 1500);

    } catch (error) {
      showToast(error.message || "Server Error", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Toast */}
      {toast.show && (
        <Toast
          show={toast.show}
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}

      <div className="flex">
        <Sidebar />

        <div className="flex-1 px-16 py-20">
          <div className="mb-6 flex items-center gap-4">
            <button
              onClick={() => navigate("/users")}
              className="p-2 rounded-full hover:bg-gray-200"
            >
              <IoIosArrowDropleft />
            </button>

            <div>
              <p className="text-sm text-gray-500">
                Manage Users /
              </p>
              <h2 className="text-2xl font-semibold text-[#272757]">
                {editData ? "Edit User" : "New User"}
              </h2>
            </div>
          </div>

          <CommonForm
            fields={fields}
            initialData={editData || { status: true }}
            onSubmit={handleCreateUser}
            onCancel={() => navigate("/users")}
            submitLabel={editData ? "Update" : "Create"}
          />
        </div>
      </div>
    </div>
  );
};

export default NewUser;