import React from 'react'

export default function TempratureIcon({
    width = "24",
    height = "24",
    fill = "none",
    stroke = "#272757",
  }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<g clipPath="url(#clip0_2580_14923)">
<path d="M9 13.5C8.23743 13.9403 7.64145 14.6199 7.30448 15.4334C6.96752 16.2469 6.9084 17.1488 7.1363 17.9994C7.3642 18.8499 7.86638 19.6015 8.56496 20.1375C9.26353 20.6736 10.1195 20.9641 11 20.9641C11.8805 20.9641 12.7365 20.6736 13.435 20.1375C14.1336 19.6015 14.6358 18.8499 14.8637 17.9994C15.0916 17.1488 15.0325 16.2469 14.6955 15.4334C14.3586 14.6199 13.7626 13.9403 13 13.5V5C13 4.46957 12.7893 3.96086 12.4142 3.58579C12.0391 3.21071 11.5304 3 11 3C10.4696 3 9.96086 3.21071 9.58579 3.58579C9.21072 3.96086 9 4.46957 9 5V13.5Z" stroke={stroke}strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 9H13" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 9H22" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 6V12" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 4H6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 10H6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7H6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 13H6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2580_14923">
<rect width={width} height={height} fill="white"/>
</clipPath>
</defs>
</svg>
  )
}
