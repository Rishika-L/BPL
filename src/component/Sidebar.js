import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// images
import gridImg from "../images/grid.png";
import monitorImg from "../images/monitor.png";
import boxImg from "../images/box.png";
import notebookImg from "../images/notebook.png";
import usersImg from "../images/users.png";
import tempImg from "../images/temp.png";
import checklistImg from "../images/checklist.png";

const menuItems = [
  {
    id: "dashboard",
    img: gridImg,
    alt: "Dashboard",
    large: true
  },
  {
    id: "monitor",
    img: monitorImg,
    alt: "Monitor"
  },

  //  3rd image → Manage Products
  {
    id: "products",
    img: boxImg,
    alt: "Products",
    path: "/manage-products",
  },

  {
    id: "notebook",
    img: notebookImg,
    alt: "Notebook"
  },

  //  5th image → Manage Users
  {
    id: "users",
    img: usersImg,
    alt: "Users",
    path: "/manage-users",
  },

  {
    id: "temp",
    img: tempImg,
    alt: "Temperature"
  
  },
  {
    id: "checklist",
    img: checklistImg,
    alt: "Checklist"
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("users");
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (!item.path) return; // safety
    setActive(item.id);
    navigate(item.path);
  };

  return (
    <div className="w-16 bg-white border-r mt-14 h-[calc(100vh-56px)] sticky top-10 flex flex-col items-center space-y-6 py-6">
      {menuItems.map((item) => {
        const isActive = active === item.id;

        return (
          <button
            type="button"
            key={item.id}
            onClick={() => handleNavigation(item)}
            className={`p-2 rounded transition-all duration-200
              ${isActive ? "bg-[#272757]" : "hover:bg-gray-100"}
            `}
          >
            <img
              src={item.img}
              alt={item.alt}
              className={`
                ${item.large ? "w-8 h-8" : "w-6 h-6"}
                transition-all duration-200
                ${isActive ? "invert brightness-0" : "opacity-60 grayscale"}
              `}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
