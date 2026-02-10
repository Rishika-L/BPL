import { useState } from "react";
import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";

const CommonTable = ({
  data = [],
  onEdit,
  onDelete,
  rowsPerPage = 10,
  showCheckbox = true,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full text-sm text-center">
        <thead className="bg-gray-200">
          <tr>
            {showCheckbox && (
              <th className="p-3">
                <input type="checkbox" />
              </th>
            )}
            <th>Profile Image</th>
            <th>User ID</th>
            <th>User Name</th>
            <th>Gender</th>
            <th>Phone No.</th>
            <th>Email</th>
            <th>Group Name</th>
            <th>Role Name</th>
            <th>Created on</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentData.map((u) => (
            <tr key={u.id} className="border-t">
              {showCheckbox && (
                <td>
                  <input type="checkbox" />
                </td>
              )}

              <td>
                <img
                  src={u.imagePreview || "/default-avatar.png"}
                  alt="profile"
                  className="w-8 h-8 rounded-full mx-auto"
                />
              </td>

              <td>{u.userId}</td>
              <td className="text-blue-600 font-medium">{u.firstName}</td>
              <td>{u.gender || "-"}</td>
              <td>{u.phone || "-"}</td>
              <td>{u.email || "-"}</td>
              <td>{u.group || "-"}</td>
              <td>{u.role || "Not Assigned"}</td>
              <td>
                {u.createdAt
                  ? new Date(u.createdAt).toLocaleDateString("en-GB")
                  : "-"}
              </td>
              <td>
                <StatusBadge status={u.status} />
              </td>
              <td>
                <ActionMenu
                  onEdit={() => onEdit(u)}
                  onDelete={() => onDelete(u.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      {data.length > rowsPerPage && (
        <div className="flex justify-between items-center p-4 bg-gray-50">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CommonTable;
