import React from "react";
import { FiSearch } from "react-icons/fi";

const TopBarActions = ({
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
    <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-6 gap-4">
      
   
<div className="relative w-full mt-6 lg:w-72">
  <input
    type="text"
    placeholder="Search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border border-[#D5D5EC] rounded-md pl-4 pr-10 py-2 size-14px focus:outline-none focus:ring-2 focus:ring-[#272757]"
  />


  <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
</div>

    
      <div className="flex flex-wrap items-center gap-3">
        
        <div className="flex flex-col">
  <label className="mb-1 text-[#686889] text-sml">
    Gender
  </label>

  <select
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    className="border border-[#D5D5EC] text-[#686889] rounded-full px-6 py-2 size-14px focus:outline-none focus:ring-2 focus:ring-[#272757]"
  >
    <option value="ALL">ALL</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="Other">Other</option>
  </select>
</div>

        <div className="flex flex-col">
  <label className="mb-1 text-[#686889] text-sml">
   Role Name
  </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-[#D5D5EC] text-[#686889] rounded-full px-6 py-2 size-14px focus:outline-none focus:ring-2 focus:ring-[#272757]"
        >
          <option value="ALL">ALL</option>
          <option value="Product Admin"> Admin</option>
          <option value="System Admin"> User</option>
              <option value="System Admin"> Manager</option>
        </select>
        </div>

       {/* Status */}
        <div className="flex flex-col">
  <label className="mb-1 text-[#686889] text-sml">
    Status
  </label>
<select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  className="border border-[#D5D5EC] text-[#686889] rounded-full px-6 py-2 text-14px focus:outline-none focus:ring-2 focus:ring-[#272757]"
>
  <option value="ALL">Active</option>
  <option value="1">Active</option>
  <option value="0">Inactive</option>
</select>
</div>

        {/* Clear BTN */}
        <div className="flex mt-6 justify-end">
    <button
      onClick={onClear}
      className="border border-[#272757] bg-[#D5D5EC] text-[#272757] px-5 py-2 rounded-md size-14px transition"
    >
      Clear
    </button>
  </div>

        {/* Create BTN */}
         <div className="flex mt-6 justify-end">
        <button
          onClick={onCreate}
          className="bg-[#272757] text-white px-5 py-2 rounded-md size-14px hover:bg-[#1f1f4d] transition"
        >
          Create New
        </button>
</div>
      </div>
    </div>
  );
};

export default TopBarActions;