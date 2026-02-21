import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// images
import gridImg from "../images/grid.png";
import monitorImg from "../images/monitor.png";
import boxImg from "../images/box.png";
import notebookImg from "../images/notebook.png";
import usersImg from "../images/users.png";
import tempImg from "../images/temp.png";
import checklistImg from "../images/checklist.png";

const menuItems = [
  { id: "dashboard",
     img: gridImg,
      alt: "Dashboard", 
      large: true },

  { id: "monitor",
     img: monitorImg, 
     alt: "Monitor" },

  { id: "products", 
    img: boxImg, 
    alt: "Products",
     path: "/manage-products" },

  { id: "notebook",
     img: notebookImg, 
     alt: "Notebook" },

  { id: "users",
     img: usersImg, 
     alt: "Users", 
     path: "/users" },

  { id: "temp", 
    img: tempImg, 
    alt: "Temperature" },

  { id: "checklist", 
    img: checklistImg, 
    alt: "Checklist" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleNavigation = (item) => {
    if (!item.path) return;
    navigate(item.path);
  };

  return (
    <div className="w-16 bg-white border-gray-700 mt-14 h-[calc(100vh-56px)] sticky top-10 flex flex-col items-center space-y-6 py-6">
      {menuItems.map((item) => {
        const isActive = item.path && location.pathname.startsWith(item.path);

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleNavigation(item)}
            className={`p-2 rounded transition-all duration-200
              ${isActive ? "bg-[#272757]" : "bg-white hover:bg-gray-100"}
            `}
          >
            <img
              src={item.img}
              alt={item.alt}
              className={`transition-all duration-200 ${
                isActive ? "opacity-100 grayscale-0" : "opacity-60 grayscale"
              } ${item.large ? "w-8 h-8" : "w-6 h-6"}`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
