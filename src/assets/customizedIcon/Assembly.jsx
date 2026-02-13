import React from 'react'

export default function Assembly({
    width = "24",
    height = "24",
    fill = "none",
    stroke = "#272757",
  }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke={stroke} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke={stroke} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13H12" stroke={stroke} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 17H16" stroke={stroke} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}
