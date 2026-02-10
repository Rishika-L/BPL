// src/component/LeftProductsTable.jsx
import React, { useState } from "react";

const LeftProductsTable = ({ data = [], onEdit, onDelete }) => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border text-sm text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">S.No</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Code </th>
            <th className="border p-2">FCname </th>
            <th className="border p-2">Traceability</th>
            <th className="border p-2">Add On</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="7" className="p-4 text-center">
                No Products Added
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{item.productName}</td>
                <td className="border p-2">{item.code || "-"}</td>
                 <td className="border p-2">{item.FCname || "-"}</td>
                <td className="border p-2">{item.traceability || "-"}</td>
                <td className="border p-2">{item.addOn || "-"}</td>
                <td className="border p-2">{item.status || "-"}</td>
                <td className="border p-2 relative">
                  {/* 3-dot menu */}
                  <button
                    onClick={() => toggleMenu(index)}
                    className="px-2 py-1 text-xl font-bold"
                  >
                    ⋮
                  </button>

                  {/* Dropdown */}
                  {openMenuIndex === index && (
                    <div className="absolute right-2 top-full mt-1 bg-white border shadow rounded w-24 z-10">
                      <button
                        onClick={() => {
                          onEdit(index);
                          setOpenMenuIndex(null);
                        }}
                        className="w-full text-left px-2 py-1 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          onDelete(index);
                          setOpenMenuIndex(null);
                        }}
                        className="w-full text-left px-2 py-1 hover:bg-gray-100 text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeftProductsTable;
