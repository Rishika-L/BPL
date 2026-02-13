import React, { useEffect, useState } from "react";
import styles from "./FilterDropdown.module.css";
import Icons from "../../Content/Icons";

const FilterDropdownButton = ({
  options,
  onFilter,
  placeholder = "Select a filter",
  value,
  bgColor=false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);
  useEffect(() => {
    handleOptionClick(value)
  }, [value])

  const handleOptionClick = (value) => {
    const selectedOption = options.find((item) => item.value === value);

    if (selectedOption) {
      setSelectedValue(selectedOption.label);
      onFilter(value); // Notify parent about the selected value
    }
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative inline-block min-w-40" >
      <button
        onClick={toggleDropdown}
        className={`block w-full px-4 py-2 border border-secondary-400  text-primary-400 rounded-md font-medium text-md text-left ${bgColor ? "primary__btn" : "bg-white"
          }`}      >
        {selectedValue || placeholder}
        <span className="absolute right-4 top-1/3 transform -translate-y-1/2 text-white-400 ">
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
  );
};

export default FilterDropdownButton;
