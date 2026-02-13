import React from "react";

export default function DownArrowIcon(
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
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5.83398 8.33301L10.0007 11.6663L14.1673 8.33301"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
