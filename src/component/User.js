import React, { useState } from "react";
import login from "../images/bpl.png";

import {
  LayoutGrid,
  Monitor,
  Box,
  Users,
  HelpCircle,
  Bell,
  ChevronDown,
  MoreVertical,
  Search,
} from "lucide-react";

const users = [
  {
    username: "user_rishika",
    firstName: "Rishika",
    lastName: "L",
    gender: "Female",
    phone: "9876543210",
    email: "rishika@mail.com",
    type: "Admin",
    created: "05/01/2024",
    status: "Active",
  },
  {
    username: "user_kavi",
    firstName: "Kavi",
    lastName: "A",
    gender: "Female",
    phone: "9123456789",
    email: "kavi@mail.com",
    type: "System Admin",
    created: "29/11/2024",
    status: "Active",
  },
  {
    username: "user_mugi",
    firstName: "Mugil",
    lastName: "S",
    gender: "Male",
    phone: "9345678901",
    email: "mugi@mail.com",
    type: "Product Admin",
    created: "01/11/2024",
    status: "Inactive",
  },
  {
    username: "user_rishika",
    firstName: "Rishika",
    lastName: "L",
    gender: "Female",
    phone: "9876543210",
    email: "rishika@mail.com",
    type: "Admin",
    created: "05/01/2024",
    status: "Active",
  },
  {
    username: "user_kavi",
    firstName: "Kavi",
    lastName: "A",
    gender: "Female",
    phone: "9123456789",
    email: "kavi@mail.com",
    type: "System Admin",
    created: "29/11/2024",
    status: "Active",
  },
  {
    username: "user_mugi",
    firstName: "Mugil",
    lastName: "S",
    gender: "Male",
    phone: "9345678901",
    email: "mugi@mail.com",
    type: "Product Admin",
    created: "01/11/2024",
    status: "Inactive",
  },
  
];

const ManageUsers = () => {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="h-14 bg-indigo-900 text-white flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">
        <img
                 src={login}
                 alt="login visual"
                 className="w-30 h-30 object-cover"
               />

        <div className="flex items-center gap-5">
          <HelpCircle className="w-5 h-5 cursor-pointer" />

          <div className="relative">
            <Bell className="w-5 h-5 cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm">
              JK
            </div>
            <div className="text-sm leading-tight">
              <div>John Kennedy</div>
              <div className="text-xs text-indigo-200">System Admin</div>
            </div>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

       
      <div className="flex">
      
        <div className="w-16 bg-white border-r 
                        mt-14 
                        h-[calc(100vh-56px)] 
                        sticky top-14
                        flex flex-col items-center space-y-10 py-6">
          <LayoutGrid className="w-6 h-6 text-gray-400" />
          <Monitor className="w-6 h-6 text-gray-400" />
          <Box className="w-6 h-6 text-gray-400" />
          <LayoutGrid className="w-6 h-6 text-gray-400" />
          <Users className="w-6 h-6 text-white bg-indigo-900 p-1 rounded" />
        </div>

        <div className="flex-1 p-20  overflow-auto">
          <h1 className="text-lg font-semibold text-indigo-900 mb-4 -pl-40">
            Manage Users
          </h1>

          
          <div className="flex gap-6 border-b mb-4">
            <button
              onClick={() => setActiveTab("users")}
              className={`pb-2 text-sm ${
                activeTab === "users"
                  ? "border-b-2 border-indigo-700 text-indigo-700 font-medium"
                  : "text-gray-500"
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab("groups")}
              className={`pb-2 text-sm ${
                activeTab === "groups"
                  ? "border-b-2 border-indigo-700 text-indigo-700 font-medium"
                  : "text-gray-500"
              }`}
            >
              Groups
            </button>
          </div>

          
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div className="relative">
              <Search className="absolute left-4 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-11 pr-4 py-2 w-72 text-sm rounded-md border bg-white focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <select className="px-4 py-2 rounded-full border text-sm bg-white">
                <option>Gender</option>
              </select>
              <select className="px-4 py-2 rounded-full border text-sm bg-white">
                <option>Type</option>
              </select>
              <select className="px-4 py-2 rounded-full border text-sm bg-white">
                <option>Status</option>
              </select>
              <button className="bg-indigo-700 text-white px-5 py-2 rounded-md text-sm hover:bg-indigo-800">
                Create New
              </button>
            </div>
          </div>

        
          {activeTab === "users" && (
            <div className="bg-white rounded shadow overflow-x-auto">
              <table className="w-full min-w-[900px] text-sm text-center">
                <thead className="bg-gray-200 text-gray-700">
                  <tr>
                    <th className="p-3">
                      <input type="checkbox" />
                    </th>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Created</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                      <td className="p-3">
                        <input type="checkbox" />
                      </td>
                      <td>{u.username}</td>
                      <td>{u.firstName}</td>
                      <td>{u.lastName}</td>
                      <td>{u.gender}</td>
                      <td>{u.phone}</td>
                      <td className="text-gray-600">{u.email}</td>
                      <td>{u.type}</td>
                      <td>{u.created}</td>
                      <td>
                        <span className="flex items-center justify-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              u.status === "Active"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          ></span>
                          {u.status}
                        </span>
                      </td>
                      <td>
                        <MoreVertical className="w-4 h-4 mx-auto cursor-pointer" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
