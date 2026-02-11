import React from "react";


const ReusableTable = ({
  title,
  columns = [],
  data = [],
  selectable = false,
  selectedItems = [],
  onSelect,
  onEdit,
  onDelete,
  width = "w-72",
}) => {
  return (
    <div className={`${width} mt-8 rounded bg-white shadow`}>
      {title && (
        <div className="px-4 py-2 font-medium text-[#272757] border-b">
          {title}
        </div>
      )}

      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            {selectable && <th className="w-10"></th>}

            {columns.map((col) => (
              <th key={col.key} className="text-left px-3 py-2">
                {col.label}
              </th>
            ))}

            {(onEdit || onDelete) && (
              <th className="text-left px-3 py-2">Actions</th>
            )}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={
                  columns.length +
                  (selectable ? 1 : 0) +
                  (onEdit || onDelete ? 1 : 0)
                }
                className="text-center py-4 text-gray-400"
              >
                No Data Available
              </td>
            </tr>
          ) : (
            data.map((item, index) => {
              const isSelected =
                selectable && selectedItems.includes(item);

              return (
                <tr
                  key={index}
                  className={`border-t hover:bg-gray-50 ${
                    isSelected ? "bg-blue-50" : ""
                  }`}
                >
                  {selectable && (
                    <td className="text-center">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => onSelect(item)}
                        className="accent-[#272757]"
                      />
                    </td>
                  )}

                  {columns.map((col) => (
                    <td key={col.key} className="px-3 py-2">
                      {item[col.key]}
                    </td>
                  ))}

                  {(onEdit || onDelete) && (
                    <td className="px-3 py-2 flex gap-3 text-sm">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(item)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          
                        </button>
                      )}

                      {onDelete && (
                        <button
                          onClick={() => onDelete(item)}
                          className="text-red-600 hover:text-red-800"
                        >
                     
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
