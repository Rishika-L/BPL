// src/pages/ManageProducts.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import ReusableTable from "../component/ReusableTable";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";


const FG_CODES = [
  { code: "MECGGENX3" },
  { code: "MECGGENX3S" },
  { code: "MECGGENX12I+" },
  { code: "MECGGENX12I" },
];

const ManageProducts = () => {
  const navigate = useNavigate();

  const [activeMainTab, setActiveMainTab] = useState("productMaster");
  const [activeSubTab, setActiveSubTab] = useState("products");
  const [isOrganizing, setIsOrganizing] = useState(false);
  const [selectedFGCodes, setSelectedFGCodes] = useState([]);

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved
      ? JSON.parse(saved)
      : FG_CODES.map((fg, i) => ({
          id: Date.now() + i,
          productName: `Product ${i + 1}`,
          code: `Code ${i + 1}`,
          fgName: fg.code,
          productType: "Type A",
          traceability: "Traceable",
          status: true,
          addedOn: new Date().toLocaleDateString("en-GB"),
        }));
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const toggleFGCode = useCallback((code) => {
    setSelectedFGCodes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  }, []);

  const handleEdit = useCallback(
    (rowData) => {
      const index = products.findIndex((item) => item.id === rowData.id);
      navigate("/add-product", { state: { editData: rowData, editIndex: index } });
    },
    [products, navigate]
  );

  const handleDelete = useCallback((id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleSave = () => {
    setIsOrganizing(false);
    localStorage.setItem("products", JSON.stringify(products));
    alert("Order Saved Successfully");
  };

  const handleReset = () => {
    const saved = localStorage.getItem("products");
    setProducts(saved ? JSON.parse(saved) : []);
    setIsOrganizing(false);
  };

  const columnDefs = useMemo(() => {
    const baseColumns = [
      {
        headerName: "S.No",
        flex: 0.5,
        valueGetter: (params) => params.node.rowIndex + 1,
      },
      { headerName: "Product Name", field: "productName", flex: 1, editable: isOrganizing },
      { headerName: "Code", field: "code", flex: 1, editable: isOrganizing },
      { headerName: "FG Name", field: "fgName", flex: 1, editable: isOrganizing },
      { headerName: "Product Type", field: "productType", flex: 1, editable: isOrganizing },
      { headerName: "Traceability", field: "traceability", flex: 1, editable: isOrganizing },
      {
        headerName: "Status",
        field: "status",
        width: 120,
        cellRenderer: (params) => (
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                params.value ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span>{params.value ? "Active" : "Inactive"}</span>
          </div>
        ),
        editable: isOrganizing,
      },
      { headerName: "Added On", field: "addedOn", flex: 1 },
      {
        headerName: "Action",
        width: 110,
        cellRenderer: (params) => (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="p-2 rounded-full hover:bg-gray-200">
              <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-50">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleEdit(params.data)}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block w-full text-left px-4 py-2 text-sm text-blue-600`}
                  >
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleDelete(params.data.id)}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block w-full text-left px-4 py-2 text-sm text-red-600`}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ),
      },
    ];

    if (isOrganizing) {
      return [
        {
          headerName: "",
          field: "drag",
          width: 40,
          rowDrag: true,
          suppressMenu: true,
         
        },
        ...baseColumns,
      ];
    }

    return baseColumns;
  }, [handleEdit, handleDelete, isOrganizing]);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-xl font-semibold text-[#272757] mt-16">
            Manage Products
          </h1>

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

          <div className="flex gap-6 mt-4">
            <ReusableTable
              title="FG Code List"
              columns={[{ key: "code", label: "FG Code" }]}
              data={FG_CODES}
              selectable
              selectedItems={selectedFGCodes}
              onSelect={toggleFGCode}
              width="w-72"
            />

            <div className="flex-1 bg-white rounded pt-16 px-6 mt-8">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-6 border-b items-center">
                  <button
                    onClick={() => setActiveSubTab("products")}
                    className={`pb-2 ${
                      activeSubTab === "products"
                        ? "border-b-2 border-black text-[#272757] font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    Products
                  </button>
                  <button
                    onClick={() => setActiveSubTab("fgInfo")}
                    className={`pb-2 ${
                      activeSubTab === "fgInfo"
                        ? "border-b-2 border-black text-[#272757] font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    FG Info
                  </button>
                  <button
                    onClick={() => setIsOrganizing(!isOrganizing)}
                    className={`pb-2 ${
                      isOrganizing
                        ? "border-b-2 border-black text-[#272757] font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    Organize
                  </button>

                  {isOrganizing && (
                    <div className="flex gap-3 ml-4">
                      <button
                        onClick={handleSave}
                        className="bg-green-600 text-white px-4 py-1 rounded text-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleReset}
                        className="bg-red-500 text-white px-4 py-1 rounded text-sm"
                      >
                        Reset
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button className="bg-[#3f3d8f] text-white px-4 py-2 rounded text-sm">
                    Download Excel
                  </button>
                  <button className="bg-[#3f3d8f] text-white px-4 py-2 rounded text-sm">
                    Upload
                  </button>
                  <button
                    onClick={() => navigate("/add-product")}
                    className="bg-[#3f3d8f] text-white px-4 py-2 rounded text-sm"
                  >
                    Add Product
                  </button>
                </div>
              </div>

              <div
                className="ag-theme-alpine"
                style={{ height: 500, width: "100%" }}
              >
                <AgGridReact
                  rowData={products}
                  columnDefs={columnDefs}
                  rowDragManaged={isOrganizing}
                  animateRows={isOrganizing}
                  suppressMoveWhenRowDragging={true}
                  onRowDragEnd={(event) => {
                    if (!isOrganizing) return;
                    const newData = [...products];
                    const movedItem = event.node.data;
                    let oldIndex = event.node.rowIndex;
                    let newIndex =
                      event.overIndex !== undefined
                        ? event.overIndex
                        : event.newIndex;

                    if (newIndex >= newData.length) newIndex = newData.length - 1;
                    if (oldIndex === newIndex) return;

                    newData.splice(oldIndex, 1);
                    newData.splice(newIndex, 0, movedItem);
                    setProducts(newData);
                  }}
                  defaultColDef={{
                    resizable: true,
                    sortable: true,
                    editable: isOrganizing,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProducts;
