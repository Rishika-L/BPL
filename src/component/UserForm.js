import React from "react";

const UserForm = ({ formData, onChange, status, setStatus }) => {
  return (
    <form className="grid grid-cols-2 gap-x-10 gap-y-6">
      {/* Username */}
      <div className="col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          User Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={onChange}
          placeholder="Enter user name"
          className="w-full border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* First Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          placeholder="Enter first name"
          className="w-full border rounded-md px-4 py-2"
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          placeholder="Enter last name"
          className="w-full border rounded-md px-4 py-2"
        />
      </div>

      {/* DOB */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date of Birth
        </label>
        <div className="relative">
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={onChange}
            className="w-full border rounded-md px-4 py-2 pr-10"
          />
         
        </div>
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Gender<span className="text-red-500">*</span>
        </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={onChange}
          className="w-full border rounded-md px-4 py-2 text-gray-500"
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* User Type */}
      <div className="col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          User Type<span className="text-red-500">*</span>
        </label>
        <select
          name="userType"
          value={formData.userType}
          onChange={onChange}
          className="w-full border rounded-md px-4 py-2 text-gray-500"
        >
          <option value="">Select user type</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          placeholder="Enter phone no."
          className="w-full border rounded-md px-4 py-2"
        />
      </div>

      {/* Mail */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mail
        </label>
        <input
          type="email"
          name="mail"
          value={formData.mail}
          onChange={onChange}
          placeholder="Enter mail"
          className="w-full border rounded-md px-4 py-2"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={onChange}
          placeholder="Enter location"
          className="w-full border rounded-md px-4 py-2"
        />
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Status
        </label>
        <div className="flex items-center gap-3">
          <div
            onClick={() => setStatus(!status)}
            className={`w-12 h-6 rounded-full cursor-pointer flex items-center ${
              status ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
                status ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </div>
          <span className="text-sm text-gray-700">
            {status ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
