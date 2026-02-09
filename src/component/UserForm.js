import React, { useState } from "react";

const UserForm = ({ formData, onChange, onSubmit, onCancel }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!formData.username) temp.username = "User name required";
    if (!formData.gender) temp.gender = "Gender required";
    if (!formData.userType) temp.userType = "User type required";
    if (!formData.phone) temp.phone = "Phone required";
    if (!formData.mail) temp.mail = "Mail required";
    if (!formData.location) temp.location = "Location required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded shadow max-w-5xl"
    >
      {/* USER NAME */}
      <div className="mb-6">
        <label className="block text-sml font-medium text-[#272757] mb-1">
          User Name<span className="text-[#272757]"> *</span>
        </label>
        <input
          name="username"
          value={formData.username}
          onChange={onChange}
          placeholder="Enter user name"
          className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm"
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1">{errors.username}</p>
        )}
      </div>

      {/* FIRST + LAST */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sml font-medium text-[#272757] mb-1">
            First Name
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            placeholder="Enter first name"
            className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sml font-medium text-[#272757] mb-1">
            Last Name
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            placeholder="Enter last name"
            className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm"
          />
        </div>
      </div>

      {/* DOB + GENDER */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sml font-medium text-[#272757] mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={onChange}
            className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sml font-medium text-[#272757] mb-1">
            Gender<span className="text-[#272757]"> *</span>
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={onChange}
            className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
          )}
        </div>
      </div>

      {/* USER TYPE */}
      <div className="mb-6">
        <label className="block text-sml font-medium text-[#272757] mb-1">
          User Type<span className="text-[#272757]">*</span>
        </label>
        <select
          name="userType"
          value={formData.userType}
          onChange={onChange}
          className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm"
        >
          <option value="">Select user type</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        {errors.userType && (
          <p className="text-red-500 text-xs mt-1">{errors.userType}</p>
        )}
      </div>

      {/* PHONE + MAIL */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sml font-medium text-[#272757] mb-1">
            Phone
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={onChange}
            placeholder="Enter phone no."
            className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sml font-medium text-[#272757] mb-1">
            Mail
          </label>
          <input
            name="mail"
            value={formData.mail}
            onChange={onChange}
            placeholder="Enter mail"
            className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm"
          />
          {errors.mail && (
            <p className="text-red-500 text-xs mt-1">{errors.mail}</p>
          )}
        </div>
      </div>

      {/* LOCATION + STATUS */}
      <div className="grid grid-cols-2 gap-6 mb-8 items-center">
        <div>
          <label className="block text-sml font-medium text-[#272757] mb-1">
            Location
          </label>
          <input
            name="location"
            value={formData.location}
            onChange={onChange}
            placeholder="Enter location"
            className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm"
          />
          {errors.location && (
            <p className="text-red-500 text-xs mt-1">{errors.location}</p>
          )}
        </div>

        <div>
          <label className="block text-sml font-medium text-[#272757] mb-2">
            Status
          </label>

          <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="status"
                checked={formData.status}
                onChange={onChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
            </label>
            <span className="text-sm text-gray-700">
              {formData.status ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-8 py-2 rounded-md text-sml"
        >
          Create
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="border border-indigo-600 text-indigo-600 px-8 py-2 rounded-md text-sml"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;
