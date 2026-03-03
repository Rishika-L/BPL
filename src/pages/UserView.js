// src/pages/UserView.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import CommonForm from "../component/CommonForm";

import { SquareChevronLeft } from 'lucide-react';

const UserView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state?.user;

  if (!user) {
    return (
      <div className="p-10">
        <h2>User not found</h2>
        <button
          onClick={() => navigate("/users")}
          className="mt-4 bg-[#2E2C72] text-white px-6 py-2 rounded-md"
        >
          Back
        </button>
      </div>
    );
  }

  
  const fields = [
    {
      label: "User ID",
      name: "user_id",
      required: true,
      fullWidth: true, 
    },
    {
      label: "Group Name",
      name: "group",
      type: "select",
      required: true,
      options:  ["Admin", "User", "Manager"],
      fullWidth: true, 
    },
    {
      label: "First Name",
      name: "firstName",
      required: true,
    },
    {
      label: "Last Name",
      name: "lastName",
    },
    {
      label: "Date of Birth",
      name: "dob",
      type: "date",
    },
    {
      label: "Gender",
      name: "gender",
      type: "select",
      required: true,
      options: ["male", "female","Others"],
    },
    {
      label: "Phone",
      name: "phone",
      required: true,
    },
    {
      label: "Mail",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "Address",
      name: "location",
    },
    {
      label: "Status",
      name: "status",
      type: "toggle",
    },
    
  ];


//   const handleSubmit = (data) => {
//     console.log("Updated User Data:", data);
//     navigate("/users");
//   };

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Navbar />

      <div className="flex">
        <Sidebar />

       <div className="flex-1 px-12 py-8 mt-20">

  <div className="flex items-center justify-between mb-5">
  
    <div className="flex items-center gap-4">
      <button
        onClick={() => navigate("/users")}
        className="p-2 rounded-full hover:bg-gray-200 transition"
      >
        <SquareChevronLeft className="w-5 h-5 mt-6 text-[#686889]" />
      </button>

      <div className="flex flex-col">
        <p className="text-sml text-[#686889]">Manage Users /</p>
        <h2 className="text-2xl font-bold text-[#272757]">
          {user.firstName} {user.lastName}
        </h2>
      </div>
    </div>


    <button
      onClick={() =>
        navigate("/users/new", {
          state: { editData: user },
        })
      }
      className="bg-[#3F3F8D] text-white px-6 py-2 rounded-md text-sml font-medium hover:bg-[#2e2e70] transition"
    >
      Edit
    </button>
     
  </div>
  <div className="bg-pink-100">
 <div className="mb-0">
                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#3F3F8D]"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-300 border-2 border-[#3F3F8D]" />
                )}
              </div>
</div>
          
          <div className="bg-white  ">

            <CommonForm
              title=""
              fields={fields}
              initialData={user}
              isView={true}
            //  onSubmit={handleSubmit}
             onCancel={() => navigate("/users")}
              submitLabel="Update"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserView;