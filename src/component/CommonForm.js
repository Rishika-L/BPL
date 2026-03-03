// src/component/CommonForm.jsx
import React, { useState, useEffect } from "react";
// import uploadIcon from "../images/Union.png";

const CommonForm = ({
  title,
  fields = [],
  initialData = {},
  
  onSubmit,
  onCancel,
  submitLabel="Create",
   isView = false  
}) => {
  console.log("aaas",initialData)
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  console.log("55555",formData);
  
  // useEffect(() => {
  //   const data = {};
  //   fields.forEach((f) => {
  //     data[f.name] =
  //       initialData[f.name] ??
  //       (f.type === "toggle" ? false : "");
  //   });
  //   setFormData(data);
  // }, [initialData, fields]);
  
  useEffect(() => {
  const data = {};

  fields.forEach((f) => {
    let value = initialData[f.name];

   
    if (f.type === "date" && value) {
      if (value.includes("/")) {
        const [day, month, year] = value.split("/");
        value = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      }
    }

    data[f.name] =
      value ??
      (f.type === "toggle" ? false : "");
  });

  setFormData(data);
}, [initialData, fields]);


 
 
// const [formValues, setFormValues] = useState(initialData || {});

// useEffect(() => {
//   setFormValues(initialData || {});
// }, [initialData]);
 
const handleChange = (e) => {
  const { name, value, type, files } = e.target;

  if (type === "file") {
    const file = files[0];

    setFormData((prev) => ({
      ...prev,
      image: file,
      previewImage: URL.createObjectURL(file),
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


const validate = () => {
  let temp = {};

  fields.forEach((f) => {
    const value = formData[f.name];

    // REQUIRED VALIDATION
    if (f.required) {
      if (f.type === "file") {
        if (!value) {
          temp[f.name] = `${f.label} is required`;
        }
      } else if (f.type === "toggle") {
        if (value === undefined || value === null) {
          temp[f.name] = `${f.label} is required`;
        }
      } else {
        if (!value || value.toString().trim() === "") {
          temp[f.name] = `${f.label} is required`;
        }
      }
    }

    // PHONE NO
    if (f.name === "phone" && value) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(value)) {
        temp[f.name] = "Phone number must be 10 digits";
      }
    }

    // EMAIL
    if (f.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        temp[f.name] = "Enter a valid email address";
      }
    }

    //IMAGE
    if (f.type === "file" && value) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

      if (!allowedTypes.includes(value.type)) {
        temp[f.name] = "Only JPG, JPEG, PNG files are allowed";
      }

      if (value.size > 1024 * 1024) {
        temp[f.name] = "Image size must be less than 1MB";
      }
    }
  });

  setErrors(temp);
  return Object.keys(temp).length === 0;
};

// //validation
//   const validate = () => {
//     let temp = {};

//     fields.forEach((f) => {
//       if (f.required) {
//         if (
//           f.type === "file" &&
//           !formData[f.name]
//         ) {
//           temp[f.name] = `${f.label} is required`;
//         } else if (
//           f.type !== "file" &&
//           !formData[f.name]
//         ) {
//           temp[f.name] = `${f.label} is required`;
//         }
//       }
//     });

//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

 //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full bg-[#F7F8FC]  min-h-screen mb-5 -px-1 py-19">
      {/* HEADER */}
     <div className="mb-6 pb-1">

  <div className="border-b border-[#D5D5EC] mt-4 "></div>

  {title && (
    <h2 className="text-2xl font-semibold text-[#272757] mt-2">
      {title}
    </h2>
  )}

</div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mb-20 mr-7 grid grid-cols-2 gap-x-12 gap-y-6"
      >
        {fields.map((field) => (
          <div
            key={field.name}
            className={
              field.fullWidth
                ? "col-span-2"
                : "col-span-1"
            }
          >
            {/* LABEL */}
            <label className="block text-sml font-medium text-[#272757] mb-2">
              {field.label}
              {field.required && (
                <span className="text-red-500">
                  {" "}
                  *
                </span>
              )}
            </label>

            {/* SELECT */}
            {field.type === "select" && (
              <select
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className={`w-full h-11 border rounded-md px-3 bg-white text-[#A9A9BC] border-[#D5D5EC] focus:ring-2 focus:ring-[#272757] focus:outline-none ${
                  errors[field.name]
                    ? "border-red-500"
                    : ""
                }`}
              >
                <option value="" disabled>
                  {field.placeholder ||
                    `Select ${field.label}`}
                </option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
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
                className={`w-full h-11 border  rounded-md px-3 border-[#D5D5EC] focus:ring-2 focus:ring-[#272757] focus:outline-none ${
                  errors[field.name]
                    ? "border-red-500"
                    : ""
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
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
        formData[field.name]
          ? "bg-[#39AA16]"
          : "bg-[#D2D5DA]"
      }`}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition duration-300 ${
          formData[field.name]
            ? "translate-x-5"
            : "translate-x-0"
        }`}
      />
    </div>

    <span className="text-sml text-[#272757]">
      {formData[field.name]
        ? "Active"
        : "Inactive"}
    </span>
  </div>
)}

      {field.type === "file" && (
  <div
    className={`bg-[#D5D5EC] border border-[#D5D5EC] rounded-md p-4 w-[420px] ${
      errors[field.name] ? "border-red-500" : ""
    }`}
  >
    {/* Preview from API (edit mode) */}
    {formData.imagePreview && !formData.image && (
      <img
        src={formData.imagePreview}
        alt="Preview"
        className="w-24 h-24 mb-3 rounded"
      />
    )}

    {/* Preview from newly selected file */}
    {formData.previewImage && (
  <img
    src={formData.previewImage}
    alt="Preview"
    className="w-24 h-24 rounded-md object-cover mt-2"
  />
)}

    <p className="text-sm font-medium text-[#272757]">
      Add Profile Image
    </p>
    <p className="text-xs text-gray-500 mb-2">
      Image size should be less than 1MB. Only jpg, jpeg, png allowed.
    </p>

    <input type="file" name="image" onChange={handleChange} />
  </div>
)}


            {/* DEFAULT INPUT */}
            {![
              "select",
              "date",
              "toggle",
              "file",
            ].includes(field.type) && (
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={
                  field.placeholder ||
                  `Enter ${field.label}`
                }
                className={`w-full h-11 border rounded-md px-3 border-[#D5D5EC] focus:ring-2 focus:ring-[#272757] focus:outline-none ${
                  errors[field.name]
                    ? "border-red-500"
                    : ""
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
 {!isView && (
      <div className="col-span-2 flex gap-6 mt-8">
        <button
          type="submit"
          className="bg-[#3F3D8F] text-white px-12 py-2 rounded-md hover:bg-[#2f2d6f] transition"
        >
          {submitLabel}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="border border-[#3F3D8F] text-[#3F3D8F] px-12 py-2 rounded-md hover:bg-[#F0F1FA] transition"
        >
          Cancel
        </button>
      </div>
    )}
</form>
       
    </div>
  );
};

export default CommonForm;