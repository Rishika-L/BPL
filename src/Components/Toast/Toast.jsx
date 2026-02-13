import React, { useEffect } from "react";
import "./Toast.css";
import Icons from "../../Content/Icons";

export default function Toast({
  show,
  duration =3000,
  title = "Success",
  message = "alert",
  onClose,
  type = "success",
}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);
  return (
    <div
      className={`toast__container w-40 p-1 fixed top-16 right-2 toast-${type} ` }
      style={{zIndex:"5000"}}
    >
      <div className="relative">
        <button
          className="alert-close absolute right-2 top-0"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="p-3 flex gap-2 items-center">
        {type=='success'&& <img src={Icons?.successIcon} alt="success Icon"  className="w-8"/>}
        {type=='error'&& <img src={Icons?.errorIcon} alt="Error Icon"  className="w-8"/>}

        <span className={`content  `}>{message || "No message provided"}</span>
        </div>
      </div>
    </div>
  );
}
