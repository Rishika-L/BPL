import React from "react";

const LeftProductsTable = () => {
  const products = [
    {
      id: 1,
      name: "Inverter AC",
      code: "PRD001",
      fgName: "MECGGENX3",
      type: "Electronics",
      traceability: "Yes",
      addedOn: "12-02-2026",
      status: "Active",
    },
    {
      id: 2,
      name: "Washing Machine",
      code: "PRD002",
      fgName: "MECGGENX12I",
      type: "Appliances",
      traceability: "No",
      addedOn: "10-02-2026",
      status: "Inactive",
    },
  ];

  return (
    <div className="bg-white border rounded overflow-x-auto">
      {/* TABLE HEADER TITLE */}
     

      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="border-b px-3 py-2 text-left">S.No</th>
            <th className="border-b px-3 py-2 text-left">Product Name</th>
            <th className="border-b px-3 py-2 text-left">Code</th>
            <th className="border-b px-3 py-2 text-left">FG Name</th>
            <th className="border-b px-3 py-2 text-left">Product Type</th>
            <th className="border-b px-3 py-2 text-left">Traceability</th>
            <th className="border-b px-3 py-2 text-left">Added On</th>
            <th className="border-b px-3 py-2 text-left">Status</th>
            <th className="border-b px-3 py-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, index) => (
            <tr
              key={item.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-3 py-2">{index + 1}</td>
              <td className="px-3 py-2">{item.name}</td>
              <td className="px-3 py-2">{item.code}</td>
              <td className="px-3 py-2">{item.fgName}</td>
              <td className="px-3 py-2">{item.type}</td>
              <td className="px-3 py-2">
                {item.traceability}
              </td>
              <td className="px-3 py-2">{item.addedOn}</td>
              <td className="px-3 py-2">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-3 py-2">
                <button className="text-blue-600 text-xs mr-2">
                  Edit
                </button>
                <button className="text-red-600 text-xs">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeftProductsTable;
