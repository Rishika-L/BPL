import React, { useState } from "react";
import styles from "./PasswordInput.module.css";
import Icons from "../../../Content/Icons";


export default function PasswordInput({
  id,
  label,
  type = "password",
  placeholder,
  register,
  validation,
  onChange,
  errors
  
}) {
  
  return (
    <>
      <div className={`${styles.input__container} mb-3`}>
        <label htmlFor={id}>{label}</label>
        <div className={`${styles.input__container__input} flex`}>
          <input
            id={id}
            style={{border:"none"}}
            type={type}
            placeholder={placeholder}
            className="w-full"
            {...(register && register(id, validation))} // Ensure register is a function before calling
            errors={errors}
          />
          {
            type=="password"&&
          <button className="flex justify-around items-center" onClick={onChange}>
            {Icons?.eyeIcon}
          </button>
          }
          {
            type!=="password"&&
          <button className="flex justify-around items-center" onClick={onChange}>
            {Icons?.eyeSlashIcon}
          </button>
          }
        </div>
        {errors[id] && (
            <p className={`${styles.invalid__feedback}`}>{errors[id]?.message}</p>
          )}
      </div>
    </>
  );
}
