import React, { useState } from 'react';
import styles from './Input.module.css';

export default function DateFilter({
  id,
  label,
  type = 'Date',
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
  allowNumbersOnly = false,
  allowNumbersOnlyminus = false,
  onChange, // Added onChange prop
}) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    let newValue = e.target.value;

    if (upper) {
      newValue = newValue.toUpperCase();
    }
    if (allowNumbersOnly) {
      newValue = newValue.replace(/[^0-9]/g, '');
    }
    if (allowNumbersOnlyminus) {
      newValue = newValue.replace(/[^0-9-]/g, '');
    }

    setValue(newValue);

    // Call the parent onChange if provided
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`${styles?.inputContainer} ${className} my-5`}>
      {label && (
        <label htmlFor={id}>
          <span className={`${labelColor ? labelColor : 'text-primary-800'} text-md`}>
            {label}
          </span>
          {showStar && (
            <span className={`${labelColor ? labelColor : 'text-error'} text-md`}> *</span>
          )}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`${upper ? styles['uppercase-input'] : ''} ${className || 'w-full'} ${
          errors[id] ? styles.error : ''
        }`}
        style={{ borderColor: errors[id] ? 'red' : '#dbdade' }}
        {...(register && register(id, validation))}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        maxLength={max}
        max={max}
        min={min}
        placeholder={type === 'date' ? (value ? '' : label) : placeholder}
      />
      {errors[id] && showStar && <p className={styles.errorMessage}>{errors[id]?.message}</p>}
    </div>
  );
}
