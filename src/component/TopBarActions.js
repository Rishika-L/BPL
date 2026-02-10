
import React from "react";
import { FiSearch } from "react-icons/fi";

const TopBarActions = ({
  title = "Title Label",
  assistiveText = "",
  search = "",
  setSearch,
  gender = "ALL",
  setGender,
  role = "ALL",
  setRole,
  status = "ALL",
  setStatus,
  onCreate,
  onClear,
}) => {
  return (
    <div className=" p-4   mb-4 flex flex-col md:flex-row md:items-center gap-4">
     
      <div className="relative flex-1 relative flex-1">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border  p-2 pl-12 mr-25 w-full md:w-64 focus:ring-2 focus:ring-[#272757] outline-none"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <FiSearch />
        </span>

 
        {search && (
          <div className="mt-1 text-sm text-gray-500">
            Searching for: <span className="font-medium">{search}</span>
          </div>
        )}
      </div>

      
      <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-2 md:mt-0 ml-auto items-start sm:items-center">
        {/* GENDER */}
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border rounded-full p-2 focus:ring-2 focus:ring-[#272757] outline-none"
        >
          <option value="ALL">ALL</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* ROLE */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded-full p-2 focus:ring-2 focus:ring-[#272757] outline-none"
        >
          <option value="ALL">ALL</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="User">User</option>
        </select>

        {/* STATUS */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-full p-2 focus:ring-2 focus:ring-[#272757] outline-none"
        >
          <option value="ALL">ALL</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        {/* CLEAR BUTTON */}
        <button
          onClick={onClear}
          className="bg-blue-150 text-gray-800 px-4 py-2   transition"
        >
          Clear
        </button>

        {/* CREATE BUTTON */}
        <button
          onClick={onCreate}
          className="bg-[#272757] text-white px-4 py-2  hover:bg-[#3b3b9f] transition"
        >
          Create New
        </button>
      </div>
    </div>
  );
};

export default TopBarActions;
