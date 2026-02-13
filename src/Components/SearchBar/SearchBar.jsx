import React from "react";
import Icons from "../../Content/Icons";

export default function SearchBar({
  value,
  placeHolder = "Search",
  width = "w-96",
  onChange, // Changed to onChange instead of onchange for consistency
  onClick,
  disabled,
  onClear
}) {
   const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div
      className={`h-10 border  inline-block border-secondary-400 rounded bg-white ${width}`}
    >
      {/* <div className="bg-white flex items-center rounded">
        <input
          type="text"
          value={value}
          className="h-full border-0 outline-0 p-2 rounded flex-1"
          placeholder={placeHolder}
          onChange={onChange} // Use onChange instead of onInput
        />
        <button className="p-1 outline-0 w-8 " onClick={onClick}>
          <img src={Icons?.searchIcon} alt="search icon" />
        </button>
      </div> */}
      <div className="bg-white flex items-center rounded">
        <input
          type="text"
          value={value}
          className="h-full border-0 outline-0 p-2 rounded flex-1"
          placeholder={placeHolder}
          onChange={onChange} // Use onChange instead of onInput
          disabled={disabled}
                onKeyDown={handleKeyDown}

        />
        {value && (
          <button
            className="p-1 outline-0 w-8"
            onClick={onClear} // Clear input on click
          >
            <img src={Icons?.clearIcon} alt="close icon"  /> 
            
          </button>
        )}
        <button className="p-1 outline-0 w-8" onClick={onClick}>
          <img src={Icons?.searchIcon} alt="search icon" />
        </button>
      </div>

    </div>
  );
}
