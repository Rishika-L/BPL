import React, { useState, useEffect } from "react";
import styles from "./FileInput.module.css";
import AttachementIcon from "../../../assets/customizedIcon/AttachementIcon";
import ImageIcon from "../../../assets/customizedIcon/ImageIcon";

export default function FileInput({
  id,
  label,
  register,
  iconLabel,
  validation = {},
  errors,
  className,
  showStar = true,
  disabled = false,
  accept = "", // Accept specific file types
  multiple = false, // Allow multiple files to be uploaded
  maxSize = 5 * 1024 * 1024, // Default max size: 5MB
  onFileSelect,
  showFileDetails = true, // Toggle to show or hide file details
  defaultValue = null, // New prop for default file
}) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Load default file if provided
  useEffect(() => {
    if (defaultValue) {
      const fileList = multiple ? defaultValue : [defaultValue];
      setSelectedFiles(fileList);
      if (onFileSelect) {
        onFileSelect(multiple ? fileList : fileList[0]);
      }
    }
  }, [defaultValue, multiple, onFileSelect]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    if (onFileSelect) {
      onFileSelect(multiple ? files : files[0]);
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
    if (onFileSelect) {
      onFileSelect(multiple ? updatedFiles : null);
    }
  };

  const truncateFileName = (name, maxLength = 50) => {
    return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
  };

  return (
    <div className={`${styles.fileInputContainer} ${className} my-5`}>
      {/* Render label if available */}
      {label && (
        <label htmlFor={id}>
          {iconLabel && <span className="">{iconLabel}</span>}
          <span>{label}</span>
          {showStar && <span className="text-red-500 text-sm"> *</span>}
        </label>
      )}

      {/* File Input */}
      <label
        className={`flex gap-3 items-center ${styles.inputContainer}`}
        htmlFor={id}
      >
        <AttachementIcon />
        <span className="text-md font-medium">Add Attachments</span>
        <input
          id={id}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          {...register(id, {
            validate: {
              maxSize: (files) => {
                if (!files || files.length === 0) return true; // No file selected
                const invalidFiles = Array.from(files).some(file => file.size > maxSize);
                return invalidFiles ? "File size exceeds limit" : true;
              },
            },
          })}
          onChange={(e) => {
            handleFileChange(e);
            register(id).onChange(e); // Ensure React Hook Form gets file data
          }}
        />
      </label>

      {/* Show error message */}
      {errors[id] && showStar && (
        <p className={styles.errorMessage}>{errors[id]?.message}</p>
      )}

      {/* Show selected file details */}
      {showFileDetails && selectedFiles.length > 0 && (
        <div className={`mt-3 ${styles.fileContainer}`}>
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="flex gap-2 items-center bg-gray-100 p-2 rounded mt-2"
            >
              <div className="flex gap-2 items-center flex-1">
                <ImageIcon />
                <div className="flex flex-col">
                  <span className="font-medium text-primary-800 font-medium">
                    {truncateFileName(file.name)}
                  </span>
                  <span className="text-sm text-secondary-800">
                    {(file.size / 1024).toFixed(2)} KB
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="text-primary-800 font-medium flex-none self-start"
                onClick={() => handleRemoveFile(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
