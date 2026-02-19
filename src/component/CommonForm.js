// src/component/CommonForm.jsx
import React, { useState } from "react";
import uploadIcon from "../images/Union.png";

const CommonForm = ({
  title,
  fields = [],
  initialData = {},
  onSubmit,
  onCancel,
  submitLabel = "Create",
}) => {
  const [formData, setFormData] = useState(() => {
    const data = {};
    fields.forEach((f) => {
      data[f.name] = initialData[f.name] ?? "";
    });
    return data;
  });

  const [errors, setErrors] = useState({});

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));

   
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // VALIDATION
  const validate = () => {
    let temp = {};

    fields.forEach((f) => {
      if (f.type === "toggle") return; 

      if (!formData[f.name] || formData[f.name] === "") {
        temp[f.name] = `${f.label} is required`;
      }
    });

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-3xl">
      <form
        onSubmit={handleSubmit}
        className="bg-[#f7f8fc] p-8 rounded-lg grid grid-cols-2 gap-x-8 gap-y-6"
      >
        {title && (
          <h2 className="col-span-2 text-lg font-semibold text-[#272757]">
            {title}
          </h2>
        )}

        {fields.map((field) => (
          <div
            key={field.name}
            className={field.fullWidth ? "col-span-2" : "col-span-1"}
          >
            {/* LABEL */}
            <label className="block text-sm font-medium text-[#272757] mb-1">
              {field.label}
              <span className="text-red-500"> *</span>
            </label>

            {/* SELECT */}
            {field.type === "select" && (
              <select
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className={`w-full h-11 border rounded px-3 text-sm bg-white ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-gray-300"
                } ${
                  !formData[field.name]
                    ? "text-gray-400"
                    : "text-[#272757]"
                }`}
              >
                <option value="" disabled>
                  {field.placeholder || `Select ${field.label}`}
                </option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt} className="text-[#272757]">
                    {opt}
                  </option>
                ))}
              </select>
            )}

            {/* DATE */}
            {field.type === "date" && (
              <input
                type="date"
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className={`w-full h-11 border rounded px-3 text-sm ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
            )}

            {/* TOGGLE */}
            {field.type === "toggle" && (
              <div className="flex items-center gap-3 mt-2">
                <div
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      [field.name]: !prev[field.name],
                    }))
                  }
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                    formData[field.name]
                      ? "bg-[#39AA16]"
                      : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-all duration-300 ${
                      formData[field.name]
                        ? "translate-x-4"
                        : "translate-x-0"
                    }`}
                  />
                </div>

                <span className="text-sm text-[#272757]">
                  {formData[field.name] ? "Active" : "Inactive"}
                </span>
              </div>
            )}

            {/* FILE */}
            {field.type === "file" && (
              <>
                <label
                  className={`bg-[#e4e5f2] rounded p-3 w-80 flex items-center gap-3 cursor-pointer ${
                    errors[field.name] ? "border border-red-500" : ""
                  }`}
                >
                  <img
                    src={uploadIcon}
                    alt="upload"
                    className="w-4 h-4"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#272757]">
                      {field.placeholder || "Upload file"}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      JPG / PNG · &lt; 1MB
                    </p>
                  </div>
                  <input
                    type="file"
                    name={field.name}
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
              </>
            )}

            {/* INPUT */}
            {!["select", "date", "toggle", "file"].includes(
              field.type
            ) && (
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={
                  field.placeholder || `Enter ${field.label}`
                }
                className={`w-full h-11 border rounded px-3 text-sm ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
            )}

            {/* ERROR */}
            {errors[field.name] && (
              <p className="text-red-500 text-xs mt-1">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}

        

        {/* BUTTONS */}
        <div className="col-span-2 flex gap-4 mt-6">
          <button
            type="submit"
            className="bg-[#3f3d8f] text-white px-10 py-2 rounded"
          >
            {submitLabel}
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="border border-[#3f3d8f] text-[#3f3d8f] px-10 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommonForm;
