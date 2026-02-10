import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import LeftProductsTable from "../component/LeftProductsTable";

const FG_CODES = [
  "MECGGENX3",
  "MECGGENX3S",
  "MECGGENX12I+",
  "MECGGENX12I",
];

const ManageProducts = () => {
  const [activeMainTab, setActiveMainTab] = useState("productMaster");
  const [activeSubTab, setActiveSubTab] = useState("products");
  const [selectedFGCodes, setSelectedFGCodes] = useState([]);

  const toggleFGCode = (code) => {
    setSelectedFGCodes((prev) =>
      prev.includes(code)
        ? prev.filter((c) => c !== code)
        : [...prev, code]
    );
  };


 
  
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          {/* ================= HEADER ================= */}
          <h1 className="text-xl font-semibold text-[#272757] mt-16">
            Manage Products
          </h1>

          {/* ================= TOP MAIN TABS ================= */}
          <div className="flex gap-6 border-b mt-8">
            {[
              { id: "productMaster", label: "Product Master" },
              { id: "products", label: "Products" },
              { id: "type", label: "Type" },
              { id: "uploadHistory", label: "Upload History" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMainTab(tab.id)}
                className={`pb-2 ${
                  activeMainTab === tab.id
                    ? "border-b-2 border-[#272757] text-[#272757] font-medium"
                    : "text-gray-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ================= CONTENT ================= */}
          <div className="flex gap-6">
            {/* ========== LEFT : FG CODE LIST ========== */}
            <div className="w-72   mt-8 rounded">
              <div className=" px-4 py-2 font-medium text-[#272757]">
                FG Code List
              </div>

              <table className="w-full mt-6 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-10"></th>
                    <th className="text-left px-2 py-2">FG Code</th>
                    <th className="text-left px-2 py-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {FG_CODES.map((code) => {
                    const checked = selectedFGCodes.includes(code);

                    return (
                      <tr
                        key={code}
                        className={`border-t cursor-pointer ${
                          checked ? "bg-blue-50" : "hover:bg-gray-50"
                        }`}
                        onClick={() => toggleFGCode(code)}
                      >
                        <td className="text-center">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleFGCode(code)}
                            className="accent-[#272757]"
                          />
                        </td>
                        <td className="px-2 py-2">{code}</td>
                        <td className="px-2 py-2 text-[#272757] text-xs">
                        
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* ========== RIGHT : PRODUCTS AREA ========== */}
            <div className="flex-1 bg-white rounded pt-16">
              {/* SUB TABS + BUTTONS */}
              <div className="flex justify-between items-center mb-4">
                {/* Sub Tabs */}
                <div className="flex gap-6 border-b">
                  {["products", "fgInfo", "organize"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveSubTab(tab)}
                      className={`pb-2 capitalize ${
                        activeSubTab === tab
                          ? "border-b-2 border-[#272757] text-[#272757] font-medium"
                          : "text-gray-500"
                      }`}
                    >
                      {tab === "fgInfo" ? "FG Info" : tab}
                    </button>
                  ))}
                </div>

                {/* Top Right Buttons */}
                <div className="flex gap-3">
                  <button className="bg-[#3f3d8f] text-white px-4 py-2 rounded text-sm">
                    Download Excel
                  </button>
                  <button className="bg-[#3f3d8f] text-white px-4 py-2 rounded text-sm">
                    Upload
                  </button>
                  <button className="bg-[#3f3d8f] text-white px-4 py-2 rounded text-sm">
                    Add Product
                  </button>
                </div>
              </div>

             <div className="flex gap-6 mt-6">
  <div className="flex-1">
    <LeftProductsTable />
  </div>
</div>

            </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default ManageProducts;
