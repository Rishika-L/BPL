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
  showActions = true,   //  control Actions column
  width = "w-72",
}) => {
  return (
    <div className={`${width} mt-8 h-[230px] rounded bg-white shadow`}>
      
      {title && (
        <div className="px-4 py-2 font-medium text-[#272757] border-b">
          {title}
        </div>
      )}

      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            {/* Checkbox */}
            {selectable && <th className="w-10 text-center"></th>}

            {/* Dynamic Columns */}
            {columns.map((col) => (
              <th key={col.key} className="text-left px-3 py-2">
                {col.label}
              </th>
            ))}

            {/* Actions Header */}
            {showActions && (
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
                  (showActions ? 1 : 0)
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
                  {/* Checkbox */}

                  {selectable&&(
                    <td className="stextt-center">
                      <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onSelect(item)}
                      className="accent-[#272757]"
                      />
                    </td>
                  )}




                  

                  {/* Data Columns */}
                  {columns.map((col) => (
                    <td key={col.key} className="px-3 py-2">
                      {item[col.key]}
                    </td>
                  ))}

                  {/* Actions Column */}
                  {showActions && (
                    <td className="px-3 py-2 text-center">
                      <button
                        onClick={() => onEdit && onEdit(item)}
                        className="text-gray-600 hover:text-black"
                      >
                        
                      </button>
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
