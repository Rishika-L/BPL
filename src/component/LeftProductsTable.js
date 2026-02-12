// src/components/LeftProductsTable.jsx
import React, { useState } from "react";
import { GripHorizontal } from "lucide-react";

const LeftProductsTable = ({
  data = [],
  setData = () => {},
  onEdit = () => {},
  onDelete = () => {},
  isOrganizing = false,
}) => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [dragIndex, setDragIndex] = useState(null);

  const toggleMenu = (index) => setOpenMenuIndex(openMenuIndex === index ? null : index);

  const handleDragStart = (index) => setDragIndex(index);
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (dropIndex) => {
    if (dragIndex === null || dragIndex === dropIndex) return;

    const dragLevel = data[dragIndex].level;
    const dropLevel = data[dropIndex].level;

    if (dragLevel !== dropLevel) {
      setDragIndex(null);
      return;
    }

    const updated = [...data];
    const draggedItem = updated[dragIndex];
    updated.splice(dragIndex, 1);
    updated.splice(dropIndex, 0, draggedItem);

    setData(updated);
    setDragIndex(null);
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="w-full border text-sm text-center">
        <thead className="bg-gray-100">
          <tr>
            {isOrganizing && <th className="border p-2 w-12">Drag</th>}
            <th className="border p-2">S.No</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Code</th>
            <th className="border p-2">FG Code</th>
            <th className="border p-2">Product Type</th>
            <th className="border p-2">Traceability</th>
            <th className="border p-2">Added On</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={isOrganizing ? 10 : 9} className="p-4 text-center">
                No Products Added
              </td>
            </tr>
          ) : (
            data.map((item, index) => {
              const showLevel = index === 0 || data[index - 1]?.level !== item.level;

              return (
                <React.Fragment key={item.id || index}>
                  {showLevel && (
                    <tr>
                      <td colSpan={isOrganizing ? 10 : 9} className="bg-gray-300 font-semibold py-2 border">
                        {item.level}
                      </td>
                    </tr>
                  )}

<<<<<<< HEAD
=======
                  {/*  YOUR ORIGINAL ROW (UNCHANGED) */}
>>>>>>> ce2ad282fefce82ba2444e41112c023d7a440ccc
                  <tr
                    draggable={isOrganizing}
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(index)}
                    className={`border hover:bg-gray-50 transition ${
                      dragIndex === index ? "opacity-40" : ""
                    } ${isOrganizing ? "cursor-move" : ""}`}
                  >
                    {isOrganizing && (
                      <td className="border p-2 cursor-grab">
                        <GripHorizontal className="w-5 h-5 mx-auto text-gray-500" />
                      </td>
                    )}
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{item.productName || "-"}</td>
                    <td className="border p-2">{item.code || "-"}</td>
                    <td className="border p-2">{item.fgCode || "-"}</td>
                    <td className="border p-2">{item.productType || "-"}</td>
                    <td className="border p-2">{item.traceability || "-"}</td>
                    <td className="border p-2">{item.addedOn || "-"}</td>
                    <td className="border p-2">
                      <span className={item.status ? "text-green-600" : "text-red-500"}>
                        ● {item.status ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="border p-2 relative">
                      <button onClick={() => toggleMenu(index)} className="px-2 py-1 text-xl font-bold">
                        ⋮
                      </button>

                      {openMenuIndex === index && (
                        <div className="absolute right-2 top-full mt-1 bg-white border shadow rounded w-24 z-10">
                          <button
                            onClick={() => { onEdit(item); setOpenMenuIndex(null); }}
                            className="w-full text-left px-2 py-1 hover:bg-gray-100"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => { onDelete(item); setOpenMenuIndex(null); }}
                            className="w-full text-left px-2 py-1 hover:bg-gray-100 text-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeftProductsTable;
