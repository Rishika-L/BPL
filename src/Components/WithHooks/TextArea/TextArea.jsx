// TextArea.js
import React from 'react';
import styles from './TextArea.module.css'
export default function TextArea({ id, label, placeholder, register, validation, errors,
  showStar = false,className,iconLabel

 }) {
  return (
    <div className={`my-4 ${styles.inputContainer}`}>
      {/* <label htmlFor={id} >{label}
      {showStar && <span className="text-red-500 text-sm"> *</span>}
      </label> */}
      {label && (
        <label htmlFor={id}>
          <span>{label}</span>
          {showStar && <span className="text-error text-md"> *</span>}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        {...register(id, validation)}
        className={`${styles['form-textarea']} darkCardBg  ${className}`}
        aria-invalid={errors[id] ? "true" : "false"}
      />
      {errors[id] &&showStar&& <span className="text-error text-md">{errors[id].message}</span>}
    </div>
  );
}
