// src/components/ActionMenu.jsx
import { useState } from "react";
import { MoreVertical } from "lucide-react";

const ActionMenu = ({ onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <MoreVertical size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-6 bg-white border rounded shadow w-28 z-10">
          <button
            onClick={onEdit}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
