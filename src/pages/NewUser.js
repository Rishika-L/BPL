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
  console.log("1111",editData);
  

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
      name: editData ? "id":"userId",
      label: "User ID",
      required: true,
      fullWidth: true,
      disabled: editData,
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
      options: ["Male", "Female" , "Others"],
      required: true,
    },
    { name: "phone", label: "Phone", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "location", label: "Location" },
    { name: "status", label: "Status", type: "toggle" },
    {
      name: editData ? "image":"image",
      label: "Profile Image",
      type: "file",
      required: editData, 
      fullWidth: true,
    },
  ];
  const handleCreateUser = async (formData) => {
    console.log("22222", formData);
    
  try {
    const token = localStorage.getItem("token");
    const type_id = "87076d07-c3cc-4c72-af9a-a9b069c680be";
  const username = `${formData.firstName} ${formData.lastName || ""}`;
    

    if (!editData && !formData.image) {
      // showToast("Profile image is required", "error");
      return;
    }

    const data = new FormData();

    data.append("user_id", formData.userId);
   data.append("first_name", formData.firstName);  
  data.append("last_name", formData.lastName);  
  data.append("user_name", username);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("gender", formData.gender);
    data.append("dob", formData.dob);
    data.append("location", formData.location);
    data.append("user_type_id", type_id);
    data.append("group_name", formData.group);
    data.append("status", formData.status ? 1 : 0);
 

    if (formData.image) {
      data.append("user_image", formData.image);
    }

    let response;
    
//edit
if (editData) {
  console.log("EDIT DATA:", editData);
  const token = localStorage.getItem("token");
  const type_id = "87076d07-c3cc-4c72-af9a-a9b069c680be";
   const username = `${formData.firstName} ${formData.lastName || ""}`;

  const data = new FormData();

   data.append("emp_id", editData?.emp_id);  

    data.append("user_id", formData.userId);
    

    data.append("user_name", username);
    data.append("first_name", formData.firstName);
    data.append("last_name", formData.lastName);
    data.append("dob", formData.dob);
    data.append("gender", formData.gender);
    data.append("user_type_id", type_id);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("location", formData.location);  
    data.append("status", formData.status ? 1 : 0);

  if (formData.image) {
    data.append("user_image", formData.image);
  }

  const response = await fetch(
    "http://127.0.0.1:8000/api/user-update",
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
    // throw new Error(result.message || "Update failed");
  }

  showToast(result.message || "User Updated Successfully", "success");

  setTimeout(() => {
    navigate("/users");
  }, 1500);
}
 else {
  if (!formData.image) {
    showToast("Profile image is required", "error");
    return;
  }

  response = await fetch(
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
}
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Operation failed");
    }

    showToast(
      result.message || (editData ? "User Updated Successfully" : "User Created Successfully"),
      "success"
    );

    setTimeout(() => {
      navigate("/users");
    }, 1500);

  } catch (error) {
    showToast(error.message || "Server Error", "error");
  }
};

const formattedEditData = editData
  ? {
      ...editData,
      userId: editData.user_id || editData.id,
      imagePreview: editData.image, // 👈 important
    }
  : { status: true };
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

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
            initialData={formattedEditData}
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