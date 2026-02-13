import React, { useState, useEffect, useRef } from "react";
import "./ActionDropdown.css";
import Icons from "../../Content/Icons";

export default function ActionDropdown({ options = [], onAction }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to track the dropdown menu

  const handleToggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (action) => {
    onAction(action);
    setIsOpen(false); // Close dropdown after action
  };

  // Effect to handle click outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-menu-container" ref={dropdownRef}>
      <button onClick={handleToggleDropdown} className="dropdown-button">
        <img src={Icons?.threeDotIcon} alt="Three Dot" />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul className="options-list">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option?.action)}
                className="option flex items-center"
              >
                {/* <span className="option-icon">{option.icon}</span> */}
                {option?.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
