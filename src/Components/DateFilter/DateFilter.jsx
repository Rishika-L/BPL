import React from "react";
import { Tooltip } from "react-tooltip";

export default function DateFilter({
  label = "",
  value,
  onChange,
  name = "",
  min,
  max,
  className = "",
  tooltipContent = "",
  tooltipId = "",
  ...rest
}) {
  // Generate a unique ID for the tooltip if none is provided
  const generatedTooltipId = tooltipId || `date-filter-tooltip-${name}`;

  return (
    <div>
      {label && (
        <label 
          htmlFor={name} 
          className="text-secondary-800 block ms-1"
        >
          {label}
         
        </label>
      )}
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        className={`border border-secondary-400 rounded-full w-48 px-4 p-2 ${className}`}
        data-tooltip-id={tooltipContent  ? generatedTooltipId : undefined}
        {...rest}
      />
      {tooltipContent  && (
        <Tooltip id={generatedTooltipId} place="top" effect="solid">
          {tooltipContent}
        </Tooltip>
      )}
    </div>
  );
}