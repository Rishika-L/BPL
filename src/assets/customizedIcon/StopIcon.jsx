import React from "react";

export default function StopIcon({
  width = "32",
  height = "32",
  fill = "none",
  stroke = "#E3020E",
}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M16 0C7.168 0 0 7.168 0 16C0 24.832 7.168 32 16 32C24.832 32 32 24.832 32 16C32 7.168 24.848 0 16 0ZM22.816 17.968C22.816 20.624 20.672 22.768 18.016 22.768H14.08C11.424 22.768 9.28 20.624 9.28 17.968V14.032C9.28 11.376 11.424 9.232 14.08 9.232H18.016C20.672 9.232 22.816 11.376 22.816 14.032V17.968Z"
          fill={stroke}
        />
      </svg>
    </>
  );
}
