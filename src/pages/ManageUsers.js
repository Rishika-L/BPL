import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

import CommonTable from "../component/CommonTable";
import TopBarActions from "../component/TopBarActions";

const ManageUsers = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("users");

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("ALL");
  const [role, setRole] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  // LOAD USERS
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(stored);
  }, []);

  //  FILTER LOGIC
  const filteredUsers = users.filter((u) => {
    return (
      (search === "" ||
        u.firstName?.toLowerCase().includes(search.toLowerCase()) ||
        u.email?.toLowerCase().includes(search.toLowerCase())) &&
      (gender === "ALL" || u.gender === gender) &&
      (role === "ALL" || u.role === role) &&
      (status === "ALL" ||
        (status === "Active" ? u.status === true : u.status === false))
    );
  });

  //  DELETE
  const handleDelete = (id) => {
    if (!window.confirm("Delete this user?")) return;
    const updated = users.filter((u) => u.id !== id);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  //  USER TABLE COLUMNS
  const userColumns = [
    {
      key: "imagePreview",
      label: "Profile",
      render: (row) =>
        row.imagePreview ? (
          <img
            src={row.imagePreview}
            alt="profile"
            className="w-9 h-9 rounded-full object-cover mx-auto"
          />
        ) : (
          "-"
        ),
    },
    { key: "userId", label: "User ID" },
    { key: "firstName", label: "User Name" },
    { key: "gender", label: "Gender" },
    { key: "phone", label: "Phone" },
    { key: "email", label: "Email" },
    { key: "group", label: "Group Name" },
    { key: "role", label: "Role Name" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/*  NAVBAR */}
      <Navbar />

      <div className="flex">
        {/*  SIDEBAR */}
        <Sidebar />

        {/*  CONTENT */}
        <div className="flex-1 p-6">
          {/*  PAGE TITLE */}
          <h2 className="text-xl font-semibold text-[#272757] mb-4">
            Manage Users
          </h2>

        
        <div className="flex-1 p-6">

          {/*  MANAGE USERS TITLE (USERS TAB KU MELA) */}
          <h2 className="text-xl font-semibold text-[#272757] mb-3">
            Manage Users
          </h2>

          {/*  USERS | USER GROUPS */}
          <div className="flex gap-6 border-b mb-6">
            <button
              onClick={() => setActiveTab("users")}
              className={`pb-2 ${
                activeTab === "users"
                  ? "border-b-2 border-[#272757] text-[#272757] font-medium"
                  : "text-gray-500"
              }`}
            >
              Users
            </button>

            <button
              onClick={() => setActiveTab("groups")}
              className={`pb-2 ${
                activeTab === "groups"
                  ? "border-b-2 border-[#272757] text-[#272757] font-medium"
                  : "text-gray-500"
              }`}
            >
             Groups
            </button>
          </div>
         <TopBarActions
  title="Manage Users"
  assistiveText="Filter users by search, gender, role, status"
  search={search}
  setSearch={setSearch}
  gender={gender}
  setGender={setGender}
  role={role}
  setRole={setRole}
  status={status}
  setStatus={setStatus}
  onCreate={() => navigate("/users/new")}
  onClear={() => {
    setSearch("");
    setGender("ALL");
    setRole("ALL");
    setStatus("ALL");
  }}
/>

          {/*  TABLE  */}
          {activeTab === "users" && (
            <div className="mt-6">
              <CommonTable
                columns={userColumns}
                data={filteredUsers}
                onEdit={(row) => navigate(`/users/update/${row.id}`)}
                onDelete={handleDelete}
              />
            </div>
          )}

          {activeTab === "groups" && (
            <div className="mt-10 text-gray-500 text-sm">
               Groups table
            </div>
          )}
        </div>
      </div>
    </div></div>
  );
};

export default ManageUsers;
