import React from "react";

export default function RightArrowIcon(
    {
        width = "24",
        height = "24",
        fill = "none",
        stroke = "#272757",
      }
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.66602 11.333L9.33268 7.99967L6.66602 4.66634"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
