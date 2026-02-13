import React, { useEffect, useState } from "react";
import DashboardIcon from "../../assets/customizedIcon/DashboardIcon";
import { Link, useLocation } from "react-router-dom";
import WorkStationIcon from "../../assets/customizedIcon/WorkStationIcon";
import ProdcutIcon from "../../assets/customizedIcon/ProductIcon";
import ToolIcon from "../../assets/customizedIcon/ToolIcon";
import UserIcon from "../../assets/customizedIcon/UserIcon";
import Assembly from "../../assets/customizedIcon/Assembly";
import OrderIcon from "../../assets/customizedIcon/OrderIcon";
import ShiftActivityIcon from "../../assets/customizedIcon/ShiftActivityIcon";
import ConsumableIcon from "../../assets/customizedIcon/ConsumableIcon";
import { getUserLocalStorage } from "../../utils/utils";
import {
  floorNavList,
  productNavList,
  qcNavList,
  systemNavList,
  technicianNavList,
} from "./NavList";

export default function SideNavbar() {
  const location = useLocation(); // Get current route
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered link
  const token = getUserLocalStorage();
  const [navList, setNavList] = useState(systemNavList);
  useEffect(() => {
    if (token?.userInfo?.role == 100) {
      setNavList(systemNavList);
    } else if (token?.userInfo?.role == 90) {
      setNavList(productNavList);
    } else if (token?.userInfo?.role == 80) {
      setNavList(floorNavList);
    } else if (token?.userInfo?.role == 10 ) {
      setNavList(technicianNavList);
    } else if (token?.userInfo?.role == 70) {
      setNavList(qcNavList);
    }
  }, [token]);

  return (
    <div className="bg-white w-20 border-e border-secondary-400 h-screen fixed	z-10">
      <div className="flex flex-col px-2 gap-5 p-1 pt-4 justify-center ps-4 ">
        {navList.map((list, index) => {
          const isActive =
            location.pathname === list.to ||
            (location.pathname.startsWith(list.to + "/") &&
              list.to !== "/user");
          const isHovered = hoveredIndex === index; // Check if this link is hovered

          return (
            <Link to={list.to} key={list.label}>
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex items-center gap-2 px-2 py-2 rounded transition-all duration-300 ${
                  isHovered && isActive
                    ? "w-10 bg-primary-800 text-white"
                    : isHovered && !isActive
                    ? "w-fit bg-primary-800 text-white"
                    : !isHovered && isActive
                    ? "w-10 bg-primary-800 text-white"
                    : "w-10 bg-white text-gray-600"
                } hover:bg-primary-800 hover:text-white`}
              >
                <span>{list.icon(isHovered, isActive)}</span>
                {/* Show label only when hovered or active */}
                <span
                  className={`text-nowrap transition-opacity duration-300 z-20 ${
                    isHovered && isActive
                      ? "opacity-0 hidden"
                      : isHovered && !isActive
                      ? "opacity-100 inline"
                      : "opacity-0 hidden"
                  }`}
                >
                  {list.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
