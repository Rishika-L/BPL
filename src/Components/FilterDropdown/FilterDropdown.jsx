import React, { useEffect, useState, useRef } from "react";
import styles from "./FilterDropdown.module.css";
import Icons from "../../Content/Icons";

const FilterDropdown = ({
  label,
  options,
  onFilter,
  placeholder = "Select a filter",
  value
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef(null);
useEffect(() => {
  const selectedOption = options.find((item) => item.value === value);
  if (selectedOption) {
    setSelectedValue(selectedOption.label);
  } else {
    setSelectedValue("");
  }
}, [value, options]);

const handleOptionClick = (val) => {
  const selectedOption = options.find((item) => item.value === val);
  if (selectedOption) {
    setSelectedValue(selectedOption.label);
    onFilter(val); // Notify parent about the selected value
  }
  setIsOpen(false); // Close the dropdown
};

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-2 ">
    <span className="text-secondary-800 block ms-1">{label||placeholder}</span>
    <div className="relative inline-block min-w-40" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="block w-full px-4 py-3 bg-white border border-secondary-400 rounded-full text-primary-400 font-medium text-md text-left"
      >
        <p className="me-10">
          {selectedValue || placeholder}

        </p>
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 ms-10">
          <img src={Icons?.downArrowIcon} alt="Down Arrow" />
        </span>
      </button>
      {isOpen && (
        <ul className={`absolute z-10 w-full bg-white border border-secondary-400 rounded-lg shadow-md mt-2 ${styles.dropdownContainer}`}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles["dropdown-item"]} px-4 py-2 cursor-pointer`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default FilterDropdown;
