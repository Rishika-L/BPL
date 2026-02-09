import React, { useState } from "react";
import { MoreVertical } from "lucide-react";

const UsersTable = ({ users = [], onEdit, onDelete }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);


  const safeUsers = Array.isArray(users)
    ? users.filter((u) => u && u.id)
    : [];

  const toggleCheckbox = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id)
        ? prev.filter((uid) => uid !== id)
        : [...prev, id]
    );
  };

  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-GB");
  };

  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full min-w-[1500px] text-sml text-center">
        <thead className="bg-gray-200 text-[#272757]">
          <tr>
            <th className="p-3">
              <input type="checkbox" disabled />
            </th>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Type</th>
            <th>Created On</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {safeUsers.length === 0 && (
            <tr>
              <td colSpan="11" className="p-6 text-gray-400">
                No users found
              </td>
            </tr>
          )}

          {safeUsers.map((user) => (
            <tr key={user.id} className="border-t hover:bg-gray-50">
             
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => toggleCheckbox(user.id)}
                />
              </td>

              <td>{user.username || "-"}</td>
              <td>{user.firstName || "-"}</td>
              <td>{user.lastName || "-"}</td>
              <td>{user.gender || "-"}</td>
              <td>{user.phone || "-"}</td>
              <td>{user.mail || "-"}</td>
              <td>{user.userType || "-"}</td>

             
              <td>{formatDate(user.createdAt)}</td>

   
              <td>
                {user.status ? (
                  <span className="px-3 py-1 text-sm   text-[#272757]">
                    Active
                  </span>
                ) : (
                  <span className="px-3 py-1 text-sm   text-[#272757]">
                    Inactive
                  </span>
                )}
              </td>

          
              <td className="relative">
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === user.id ? null : user.id)
                  }
                  className="p-1 rounded hover:bg-gray-200"
                >
                  <MoreVertical size={18} />
                </button>

                {openMenu === user.id && (
                  <div className="absolute right-6 top-6 bg-white border rounded shadow z-10">
                    <button
                      onClick={() => {
                        onEdit(user);
                        setOpenMenu(null);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        onDelete(user.id);
                        setOpenMenu(null);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
