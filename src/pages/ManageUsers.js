import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import UserFilters from "../component/UserFilters";
import UsersTable from "../component/UsersTable";
import { users } from "../data/usersData";

const ManageUsers = () => {
  const [activeTab, setActiveTab] = useState("users");
 

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-20 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold text-indigo-900">
              Manage Users
            </h1>

            
          </div>

          <div className="flex gap-6 border-b mb-4">
            {["users", "groups"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm ${
                  activeTab === tab
                    ? "border-b-2 border-indigo-700 text-indigo-700 font-medium"
                    : "text-gray-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <UserFilters />

          {activeTab === "users" && <UsersTable users={users} />}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
