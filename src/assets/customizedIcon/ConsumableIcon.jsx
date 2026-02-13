import React from "react";

export default function ConsumableIcon(
    {
        width = "30",
        height = "30",
        fill = "none",
        stroke = "#686889",
      }
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_1932_16846)">
    <path d="M4 10.9997C4.24456 9.23992 5.06093 7.60937 6.32336 6.3592C7.58579 5.10904 9.22424 4.30862 10.9863 4.08126C12.7484 3.85389 14.5364 4.21219 16.0748 5.10095C17.6132 5.98972 18.8168 7.35964 19.5 8.99971M20 4.99971V8.99971" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 13C19.7554 14.7598 18.9391 16.3903 17.6766 17.6405C16.4142 18.8907 14.7758 19.6911 13.0137 19.9184C11.2516 20.1458 9.46362 19.7875 7.9252 18.8988C6.38678 18.01 5.18325 16.6401 4.5 15M4 19V15" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.6792 10.1L12 12.2292L8.34588 10.1125" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16.0042V12.225" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.8625 8.03333L15.0875 9.27085C15.5917 9.55001 16.0042 10.25 16.0042 10.825V13.1792C16.0042 13.7542 15.5917 14.4542 15.0875 14.7333L12.8625 15.9709C12.3875 16.2334 11.6083 16.2334 11.1333 15.9709L8.90832 14.7333C8.40415 14.4542 7.99166 13.7542 7.99166 13.1792V10.825C7.99166 10.25 8.40415 9.55001 8.90832 9.27085L11.1333 8.03333C11.6125 7.76667 12.3875 7.76667 12.8625 8.03333Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.91669 12.5167V10.9917L13.8708 8.70832" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_1932_16846">
    <rect width={width} height={height} fill="white" transform="matrix(-1 0 0 1 24 0)"/>
    </clipPath>
    </defs>
    </svg>
  );
}
