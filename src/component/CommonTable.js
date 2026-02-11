import { useState } from "react";
import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";

const CommonTable = ({
  data = [],
  columns = [],
  onEdit,
  onDelete,
  rowsPerPage = 10,
  showCheckbox = true,
  showActions = true,
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

            {columns.map((col) => (
              <th key={col.key} className="p-3">
                {col.label}
              </th>
            ))}

            {showActions && <th className="p-3">Action</th>}
          </tr>
        </thead>

        <tbody>
          {currentData.map((row) => (
            <tr key={row.id} className="border-t">
              {showCheckbox && (
                <td>
                  <input type="checkbox" />
                </td>
              )}

              {columns.map((col) => (
                <td key={col.key} className="p-2">
                  {col.render ? (
                    col.render(row)
                  ) : col.type === "image" ? (
                    <img
                      src={row[col.key] || "/default-avatar.png"}
                      alt="img"
                      className="w-8 h-8 rounded-full mx-auto"
                    />
                  ) : col.type === "date" ? (
                    row[col.key]
                      ? new Date(row[col.key]).toLocaleDateString("en-GB")
                      : "-"
                  ) : col.type === "status" ? (
                    <StatusBadge status={row[col.key]} />
                  ) : (
                    row[col.key] || "-"
                  )}
                </td>
              ))}

              {showActions && (
                <td>
                  <ActionMenu
                    onEdit={() => onEdit(row)}
                    onDelete={() => onDelete(row.id)}
                  />
                </td>
              )}
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
