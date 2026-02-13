import React from 'react';
import styles from './Input.module.css';

export default function Input(
    {
        id,
        label,
        type = "text",
        placeholder,
        register,
        validation = {},
        errors,
        className,
        showStar = true,
        disabled = false,
        upper = false,
        iconLabel,
        labelColor,
        max,
        min,
        allowNumbersOnly =false,
        allowDecimalOnly = false,
        allowNumbersOnlyminus=false,
        onBlur =()=>{}
      }  
) {
    const handleChange = (e) => {
        let value = e.target.value;
        if (upper) {
          value = value.toUpperCase();
        }
        if (allowDecimalOnly) {
          value = value.replace(/[^0-9.]/g, ""); // allow digits + dot

          // allow only ONE dot
          const parts = value.split(".");
          if (parts.length > 2) {
            value = parts[0] + "." + parts.slice(1).join("");
          }

          e.target.value = value;
          return;
        }
        if (allowNumbersOnly) {
          value = value.replace(/[^0-9]/g, ""); // Restrict to numbers only
        }
        if (allowNumbersOnlyminus) {
          value = value.replace(/[^0-9-]/g, ""); // Restrict to numbers only
        }
        e.target.value = value;
      };
  return (
    <div className={`${styles?.inputContainer} ${className} my-5`}>
    {/* <label htmlFor={id}>
      {label}
      {showStar && <span className="text-red-500 text-sm"> *</span>}
    </label> */}
    {label && (
      <label htmlFor={id}>
      
        <span className={`${labelColor ?labelColor:'text-primary-800'} text-md`}>{label}</span>
        {showStar && <span className={`${labelColor ?labelColor:'text-error'} text-md`}> *</span>}
      </label>
    )}
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`${upper ? styles['uppercase-input'] : ''} ${className || 'w-full'} ${errors[id] ? styles.error : ''}`}
      // className={`${upper ? styles['uppercase-input'] : ''} {className} ${errors[id] ? styles.error : ''}`}
      style={{ borderColor: errors[id] ? 'red' : '#dbdade' }}
      {...(register &&
  register(id, {
    ...validation, // spread rules properly
    onBlur: (e) => {
      validation?.onBlur?.(e); // call RHF rule-specific onBlur if present
      if (onBlur) onBlur(e);   // call custom prop onBlur
    },
  }))}

      disabled={disabled}
      onInput={handleChange} // Use onInput to update value
      maxLength={max}
      max={max}
      min={min}
    />
    {errors[id] && showStar && (
      <p className={styles.errorMessage}>{errors[id]?.message}</p>
     )} 
  </div>
  )
}
