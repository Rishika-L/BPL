import React from "react";
import { useNavigate } from "react-router-dom"; 

const UserFilters = () => {
  const navigate = useNavigate(); 

  return (
    <div className="flex justify-between items-center mb-4">
     
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search user"
          className="border p-2 rounded text-sm"
        />

        <select className="border p-2 rounded text-sm">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <select className="border p-2 rounded text-sm">
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <button
        onClick={() => navigate("/users/new")}
        className="bg-indigo-600 text-white px-4 py-2 rounded text-sm"
      >
         Create New
      </button>
    </div>
  );
};

export default UserFilters;
