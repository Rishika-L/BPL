// import React, { useState } from 'react';
// import OtpInput from 'react-otp-input';

// export default function App() {
//   const [otp, setOtp] = useState('');

//   return (
//     <OtpInput
//       value={otp}
//       onChange={setOtp}
//       numInputs={4}
//       renderSeparator={<span>-</span>}
//       renderInput={(props) => <input {...props} />}
//     />
//   );
// }

// import React from 'react';
// import OtpInput from 'react-otp-input';
// import styles from '../Input/OTPinput.module.css';

// export default function OTPInput({
//     id,
//     label,
//     numInputs = 4,
//     separator = '-',
//     value,
//     onChange,
//     className = '',
//     error = '',
//     disabled = false,
//     showStar = true,
//     labelColor,
//     register,
//     validation,
//     errors,
// }) {
//     return (
//         <div className={`${styles.inputContainer} ${className} my-5`}>
//             {label && (
//                 <label htmlFor={id}>
//                     <span className={`${labelColor ? labelColor : 'text-primary-800'} text-md`}>{label}</span>
//                     {showStar && <span className={`${labelColor ? labelColor : 'text-error'} text-md`}> *</span>}
//                 </label>
//             )}
//             <OtpInput
//                 value={value}
//                 onChange={onChange}
//                 numInputs={numInputs}
//                 renderSeparator={<span>{separator}</span>}
//                 renderInput={(props) => (
//                     <input
//                         {...props}
//                         id={id}
//                         className={`${styles.otpInput} ${className || 'w-full'} ${error ? styles.error : ''}`}
//                         style={{ borderColor: error ? 'red' : '#dbdade' }}
//                         disabled={disabled}
//                         {...(register && register(id, validation))}
//                     />
//                 )}
//             />
//             {errors?.[id] && <p className={styles.errorMessage}>{errors[id]?.message}</p>}
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import styles from '../Input/OTPinput.module.css';


export default function OTPInput({
  id,
  label,
  numInputs = 4,
  separator = '',
  value,
  onChange,
  className = '',
  error = '',
  disabled = false,
  showStar = true,
  labelColor,
  register,
  validation,
  errors,
}) {
  const [otp, setOtp] = useState(value || '');  // Manage state locally

  useEffect(() => {
    if (value !== otp) {
      setOtp(value);
    }
  }, [value, otp]);

  const handleChange = (newOtp) => {
    setOtp(newOtp);  // Update local state with the new OTP
    if (onChange) {
      onChange(newOtp);  // Propagate the change to the parent component
    }
  };

  return (
    <div className={`${styles.inputContainer} ${className} my-5`}>
      {label && (
        <label htmlFor={id}>
          <span className={`${labelColor ? labelColor : 'text-primary-800'} text-md`}>{label}</span>
          {showStar && <span className={`${labelColor ? labelColor : 'text-error'} text-md`}> *</span>}
        </label>
      )}
      <OtpInput
        value={otp}  // Controlled component: ensure value is linked to state
        onChange={handleChange}  // Make sure onChange is updating the state
        numInputs={numInputs} 
        renderSeparator={<span>{separator}</span>}
        renderInput={(props) => (
          <input
            {...props}
            id={id}
            className={`${styles.otpInput} ${className || 'w-full'} ${error ? styles.error : ''}`}
            style={{ borderColor: error ? 'red' : '#dbdade' }}
            disabled={disabled}
            {...(register && register(id, validation))}
          />
        )}
      />
      {errors?.[id] && <p className={styles.errorMessage}>{errors[id]?.message}</p>}
    </div>
  );
}
