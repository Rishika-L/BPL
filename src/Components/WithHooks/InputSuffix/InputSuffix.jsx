import React from 'react';
import styles from './InputSuffix.module.css'

export default function InputSuffix({
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
        suffix=false,
        suffixContent=''
        
      }  
) {
    const handleChange = (e) => {
        let value = e.target.value;
        if (upper) {
          value = value.toUpperCase();
        }
        if (allowNumbersOnly) {
          value = value.replace(/[^0-9]/g, ""); // Restrict to numbers only
        }
        e.target.value = value;
      };
  return (
    <div className={`${styles.inputContainer} ${className} my-5`}>
    {/* <label htmlFor={id}>
      {label}
      {showStar && <span className="text-red-500 text-sm"> *</span>}
    </label> */}
    {label && (
      <label htmlFor={id}>
      
        <span className={`${labelColor ?labelColor:'text-primary-800'} text-md`}>{label}</span>
        {showStar && <span className={`${labelColor ?labelColor:'text-primary-800'} text-md`}> *</span>}
      </label>
    )}
    <div className={`bg-white flex items-center rounded  ${upper ? styles['uppercase-input'] : ''} ${className || 'w-full'} ${errors[id] ? styles.error : ''}`}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className='border-none flex-1'
        // className={`${upper ? styles['uppercase-input'] : ''} ${className || 'w-full'} ${errors[id] ? styles.error : ''}`}
        // className={`${upper ? styles['uppercase-input'] : ''} {className} ${errors[id] ? styles.error : ''}`}
        style={{ borderColor: errors[id] ? 'red' : '#dbdade' }}
        {...(register && register(id, validation))}
        disabled={disabled}
        onInput={handleChange} 
        maxLength={max}
        max={max}
        min={min}
      />
      {suffix && <p className="text-primary-800 text-sm pr-5  flex-shrink-0">{suffixContent}</p>}

    </div>
    {errors[id] && showStar && (
      <p className={styles.errorMessage}>{errors[id]?.message}</p>
     )} 
  </div>
  )
}
