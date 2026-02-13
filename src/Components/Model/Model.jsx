import React from 'react';
import './Model.css';
import Button from '../Buttons/Button';

export default function Model({
  isOpen,
  onClose,
  title,
  children,
  showHeader = true,
  showFooter = true,
  closeButtonText = "Close",
  showCloseButton = true,
  footerButtons = [],
  className,
  size = 'm', // Default size is medium
}) {
  if (!isOpen) return null; // Render nothing if modal is not open

  const modalSizeClass = `center-modal-content-${size}`;

  return (
    <div className="center-modal-overlay">
      <div className={`center-modal-content fade-in ${modalSizeClass} ${className}`}>
        {showHeader && (
          <div className="center-modal-header">
            <p className="text-xl text-primary-400 font-semibold">{title}</p>
            {showCloseButton && (
              <button className="center-modal-close" onClick={onClose}>
                &times;
              </button>
            )}
          </div>
        )}
        <div className="center-modal-body">{children}</div>
        {showFooter && (
          <div className="center-modal-footer">
            {footerButtons.length > 0 ? (
              footerButtons.map((btn, index) => (
                <Button
                  key={index}
                  className={btn?.className}
                  onClick={btn?.onClick || btn?.onClose}
                  label={btn.text}
                  loading={btn.loading}
                  disabled={btn?.disabled}
                />
                  
              ))
            ) : (
              <Button 
              className="primary__btn" 
              onClick={onClose}
                label={closeButtonText}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
