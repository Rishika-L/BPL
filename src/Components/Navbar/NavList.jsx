import WorkStationIcon from "../../assets/customizedIcon/WorkStationIcon";
import ProdcutIcon from "../../assets/customizedIcon/ProductIcon";
import ToolIcon from "../../assets/customizedIcon/ToolIcon";
import UserIcon from "../../assets/customizedIcon/UserIcon";
import Assembly from "../../assets/customizedIcon/Assembly";
import OrderIcon from "../../assets/customizedIcon/OrderIcon";
import ShiftActivityIcon from "../../assets/customizedIcon/ShiftActivityIcon";
import ConsumableIcon from "../../assets/customizedIcon/ConsumableIcon";
import DashboardIcon from "../../assets/customizedIcon/DashboardIcon";
import NcprIcon from "../../assets/customizedIcon/Ncpr";
import TempratureHistory from "../../Pages/TempratureHistory/TempratureHistory";
import TempratureIcon from "../../assets/customizedIcon/TempratureIcon";

export const systemNavList = [
  {
    id: "dashboard",
    icon: (isHovered, isActive) => (
      <DashboardIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Dashboard",
    to: "/user",
  },
  {
    id: "workstation",
    icon: (isHovered, isActive) => (
      <WorkStationIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Manage Workstation",
    to: "/user/workstation",
  },
  {
    id: "product_master",
    icon: (isHovered, isActive) => (
      <ProdcutIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Product Master",
    to: "/user/product",
  },
  // {
  //   id: "tool_master",
  //   icon: (isHovered, isActive) => (
  //     <ToolIcon
  //       stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
  //     />
  //   ),
  //   label: "Tool Master",
  //   to: "/user/tool",
  // },
  // {
  //   id: "consumables",
  //   icon: (isHovered, isActive) => (
  //     <ConsumableIcon
  //       stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
  //     />
  //   ),
  //   label: "Consumables",
  //   to: "/user/consumable",
  // },
  // {
  //   id: "assembly",
  //   icon: (isHovered, isActive) => (
  //     <Assembly
  //       stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
  //     />
  //   ),
  //   label: "Assembly Instruction",
  //   to: "/user/assembly",
  // },

  // {
  //   id: "activities",
  //   icon: (isHovered, isActive) => (
  //     <ShiftActivityIcon
  //       stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
  //     />
  //   ),
  //   label: "Shift Activities",
  //   to: "/user/activity",
  // },
  {
    id: "orders",
    icon: (isHovered, isActive) => (
      <OrderIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Orders",
    to: "/user/order",
  },
  {
    id: "user_master",
    icon: (isHovered, isActive) => (
      <UserIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "User Management",
    to: "/user/user",
  },
  {
    id: "temHistory",
    icon: (isHovered, isActive) => (
      <TempratureIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Temperature History",
    to: "/user/tem-history",
  },
  {
    id: "ncmr/ncpr",
    icon: (isHovered, isActive) => (
      <NcprIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "NCMR/NCPR",
    to: "/user/ncmr-ncpr",
  },
  //   {
  //     id: "myJobs",
  //     icon: (isHovered, isActive) => (
  //       <ShiftActivityIcon
  //         stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
  //       />
  //     ),
  //     label: "My Jobs",
  //     to: "/user/myjob",
  //   },
];

export const productNavList = [
  {
    id: "dashboard",
    icon: (isHovered, isActive) => (
      <DashboardIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Dashboard",
    to: "/user",
  },
  {
    id: "workstation",
    icon: (isHovered, isActive) => (
      <WorkStationIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Manage Workstation",
    to: "/user/workstation",
  },
  {
    id: "product_master",
    icon: (isHovered, isActive) => (
      <ProdcutIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Product Master",
    to: "/user/product",
  },
  {
    id: "tool_master",
    icon: (isHovered, isActive) => (
      <ToolIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Tool Master",
    to: "/user/tool",
  },
  {
    id: "consumables",
    icon: (isHovered, isActive) => (
      <ConsumableIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Consumables",
    to: "/user/consumable",
  },
  // {
  //   id: "orders",
  //   icon: (isHovered, isActive) => (
  //     <OrderIcon
  //       stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
  //     />
  //   ),
  //   label: "Orders",
  //   to: "/user/order",
  // },
  {
    id: "ncmr/ncpr",
    icon: (isHovered, isActive) => (
      <NcprIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "NCMR/NCPR",
    to: "/user/ncmr-ncpr",
  },
  {
    id: "temHistory",
    icon: (isHovered, isActive) => (
      <TempratureIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Temperature History",
    to: "/user/tem-history",
  },
];

export const floorNavList = [
  {
    id: "dashboard",
    icon: (isHovered, isActive) => (
      <DashboardIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Dashboard",
    to: "/user",
  },
  {
    id: "workstation",
    icon: (isHovered, isActive) => (
      <WorkStationIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Manage Workstation",
    to: "/user/workstation",
  },

  {
    id: "product_master",
    icon: (isHovered, isActive) => (
      <ProdcutIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Product Master",
    to: "/user/product",
  },
  {
    id: "job-activity",
    icon: (isHovered, isActive) => (
      <ShiftActivityIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Job Activity",
    to: "/user/job-activity",
  },
  {
    id: "ncmr/ncpr",
    icon: (isHovered, isActive) => (
      <NcprIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "NCMR/NCPR",
    to: "/user/ncmr-ncpr",
  },
  {
    id: "temHistory",
    icon: (isHovered, isActive) => (
      <TempratureIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Temperature History",
    to: "/user/tem-history",
  },
  {
    id: "myJobs",
    icon: (isHovered, isActive) => (
      <ShiftActivityIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "My Jobs",
    to: "/user/myjob",
  },
];

export const technicianNavList = [
  // {
  //   id: "dashboard",
  //   icon: (isHovered, isActive) => (
  //     <DashboardIcon
  //       stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
  //     />
  //   ),
  //   label: "Dashboard",
  //   to: "/user",
  // },
  {
    id: "myJobs",
    icon: (isHovered, isActive) => (
      <ShiftActivityIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "My Jobs",
    to: "/user/myjob",
  },
  {
    id: "ncmr/ncpr",
    icon: (isHovered, isActive) => (
      <NcprIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "NCMR/NCPR",
    to: "/user/ncmr-ncpr",
  },
];

export const qcNavList = [
  // {
  //   id: "dashboard",
  //   icon: (isHovered, isActive) => (
  //     <DashboardIcon
  //       stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
  //     />
  //   ),
  //   label: "Dashboard",
  //   to: "/user",
  // },
  {
    id: "workstation",
    icon: (isHovered, isActive) => (
      <WorkStationIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "Manage Workstation",
    to: "/user/workstation",
  },
  {
    id: "myJobs",
    icon: (isHovered, isActive) => (
      <ShiftActivityIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "My Jobs",
    to: "/user/myjob",
  },
  {
    id: "ncmr/ncpr",
    icon: (isHovered, isActive) => (
      <NcprIcon
        stroke={isHovered || isActive ? "#ffffff" : "#808080"} // Dynamic stroke color
      />
    ),
    label: "NCMR/NCPR",
    to: "/user/ncmr-ncpr",
  },
];