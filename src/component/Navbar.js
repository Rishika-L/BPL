import login from "../images/bpl.png";
import { HelpCircle, Bell, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-14 bg-indigo-900 text-white flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">
      <img src={login} alt="logo" className="w-30 h-30 object-cover" />

      <div className="flex items-center gap-5">
        <HelpCircle className="w-5 h-5 cursor-pointer" />

        <div className="relative">
          <Bell className="w-5 h-5 cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-xs rounded-full flex items-center justify-center">
            2
          </span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm">
            JK
          </div>
          <div className="text-sm">
            <div>John Kennedy</div>
            <div className="text-xs text-indigo-200">System Admin</div>
          </div>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
