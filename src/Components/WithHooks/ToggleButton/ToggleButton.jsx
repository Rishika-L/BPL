import React from "react";
import styles from "./ToggleButton.module.css";

export default function ToggleButton({
  mainLabel,
  id,
  label,
  register,
  validation = {},
  disabled= false,
  errors,
}) {
  return (
    <div className=" my-4">
      <span className="text-md text-primary-800 font-medium">{mainLabel}</span>

      <div
        className={`${styles.toggleContainer} flex align-center items-center mt-2 gap-2`}
      >
        <label htmlFor={id} className={`${styles.switch} `}>
          <input
            type="checkbox"
            id={id}
            disabled={disabled}
            {...(register && register(id, validation))}
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        <span className="pb-1 text-md text-primary-800">{label}</span>
      </div>
    </div>
  );
}
