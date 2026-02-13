import React from "react";
import styles from "./RadioInput.module.css";

export default function RadioInput({
  id,
  label,
  options = [],
  register,
  validation = {},
  errors,
  className,
  showStar = true,
  disabled = false,
  labelColor
}) {
  return (
    <div className={`${styles.radioContainer} ${className} mb-5`}>
      {label && (
        <label htmlFor={id} className="block text-md">
          <span className={`${labelColor ? labelColor : "text-primary-800"}`}>{label}</span>
          {showStar && <span className="text-error"> *</span>}
        </label>
      )}

      <div className="flex gap-4 mt-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id={`${option.value}`}
              value={option.value}
              {...(register && register(id, validation))}
              disabled={disabled || option.disabled}
              className={`${styles.radioInput} ${errors[id] ? styles.error : ""}`}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {errors[id] && showStar && <p className={`text-red-400 text-[14px]`}>{errors[id]?.message}</p>}
    </div>
  );
}
