import React from "react";
import Styles from "./Button.module.css";
import { FaSpinner } from "react-icons/fa";
export default function Button({
  label,
  className,
  icon,
  type = "button",
  onClick,
  loading = false,
  disabled = false,
}) {
  return (
    <button
      className={`text-nowrap ${Styles.btn} ${className} flex justify-center items-center gap-3 h-12`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && (
        <span className={`${Styles.spinner} spinner`}>
          <FaSpinner />
        </span>
      )}
      {label}
    </button>
  );
}
