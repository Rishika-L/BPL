import React from "react";

export default function DoubleLeftArrowIcon({
  width = "24",
  height = "24",
  fill = "none",
  stroke = "#272757",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M11.334 4.66699L8.66732 8.00033L11.334 11.3337"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33398 4.66699L4.66732 8.00033L7.33398 11.3337"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
