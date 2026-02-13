import React from "react";
import Styles from "./Button.module.css";
import { FaSpinner } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';

export default function IconButton({
  label,
  className = "px-3",
  icon,
  type = "button",
  onClick,
  loading = false,
  disabled = false,
  id,tool_content
}) {
  return (
    <>
    <button
      className={`text-nowrap  ${Styles.btn}  flex justify-center items-center gap-3 rounded-full bg-secondary-400 h-12`}
      style={{ padding: "10px 30px",  }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-tooltip-id={id}
        data-tooltip-content={tool_content}
    >
      
      {/* {label} */} Clear
    </button>
    <Tooltip id={id} />


    </>
  );
}
