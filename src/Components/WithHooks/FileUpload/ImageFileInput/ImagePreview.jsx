import React from "react";
import styles from "./FileInput.module.css";
import ImageIcon from "../../../../assets/customizedIcon/ImageIcon";

export default function ImagePreview({ file, handleRemoveFile }) {
  const truncateFileName = (name, maxLength = 25) => {
    return name?.length > maxLength
      ? `${name.substring(0, maxLength)}...`
      : name;
  };
  return (
    <div className={`mt-3 ${styles.fileContainer}`}>
      {/* {selectedFiles.map((file, index) => ( */}
      <div className="flex gap-2 items-center bg-gray-100 p-2 rounded mt-2">
        <div className="flex gap-2 items-center flex-1">
          <ImageIcon />
          <div className="flex flex-col">
            <span className="font-medium text-primary-800 font-medium">
              {truncateFileName(file?.name)}
            </span>
            <span className="text-sm text-secondary-800">
              {(file?.size / 1024).toFixed(2)} KB
            </span>
          </div>
        </div>
        <button
          type="button"
          className="text-primary-800 font-medium flex-none self-start"
          onClick={() => handleRemoveFile()}
        >
          X
        </button>
      </div>
      {/* ))} */}
    </div>
  );
}
