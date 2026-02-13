import React from "react";
import styles from "./FileInput.module.css";
import AttachementIcon from "../../../../assets/customizedIcon/AttachementIcon";

export default function ImageFileInput({
  className,
  label,
  labelColor,
  showStar,
  id,
  type = "file",
  placeholder,
  upper,
  validation,
  register,
  errors,
  handleChange,
  disabled,
  min,
  max,
  setError, // <-- Add setError from react-hook-form
  clearErrors,
}) {
  
  return (
    <div>
      {label && (
        <div htmlFor={id}>
          <span
            className={`${
              labelColor ? labelColor : "text-primary-800 font-medium"
            } text-md`}
          >
            {label}
          </span>
          {showStar && (
            <span
              className={`${labelColor ? labelColor : "text-error"} text-md`}
            >
              {" "}
              *
            </span>
          )}
        </div>
      )}
      <div className={`${styles?.inputContainer} ${className} my-2`}>
        <label htmlFor={id} className="flex gap-2 items-center my-2">
          <AttachementIcon />
          <input
            id={id}
            type="file"
            accept="image/*" // Only accept image formats
            placeholder={placeholder}
            className="hidden"
            style={{ borderColor: errors[id] ? "red" : "#dbdade" }}
            {...(register && register(id, validation))}
            disabled={disabled}
            onInput={handleChange}
            maxLength={max}
            max={max}
            min={min}

          />
          <span className="flex flex-col gap-2 w-full">
            <span>Add Attachment</span>
            
          </span>
          
        </label>
        <span className="text-sm text-secondary-500">
              Image size should be less than 1MB. only .jpg, .jpeg, .png formats
              are allowed.
            </span>
      </div>
      {errors[id] && showStar && (
        <p className="text-error text-md">{errors[id]?.message}</p>
      )}
    </div>
  );
}
