import { LayoutGrid, Monitor, Box, Users } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-16 bg-white border-r mt-14 h-[calc(100vh-56px)] sticky top-14 flex flex-col items-center space-y-10 py-6">
      <LayoutGrid className="w-6 h-6 text-gray-400" />
      <Monitor className="w-6 h-6 text-gray-400" />
      <Box className="w-6 h-6 text-gray-400" />
      <LayoutGrid className="w-6 h-6 text-gray-400" />
      <Users className="w-6 h-6 text-white bg-indigo-900 p-1 rounded" />
    </div>
  );
};

export default Sidebar;
