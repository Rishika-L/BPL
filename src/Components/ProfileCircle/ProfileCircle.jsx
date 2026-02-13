import React, { useEffect, useState } from "react";

export default function ProfileCircle({ letter = "LB", color  }) {
  const [bgColor,setBgColor] = useState();
//   useEffect(()=>{
//     if(bgColor){
//       setBgColor(color)
//     }else{
//       setBgColor("#fff3c4")
//     }

//   },[])
  return (
    <p
      className="pointer-events-none rounded-full uppercase h-10 w-10 flex items-center text-normal justify-center text-primary-800 font-semibold me-2  bg-secondary-400"
    >
      {letter}
    </p>
  );
}
