// src/pages/AddProduct.jsx

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import CommonForm from "../component/CommonForm";

const AddProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const editData = location.state?.editData;
  const editIndex = location.state?.editIndex;

  const fields = [
    {
      name: "productName",
      label: "Product Name",
      type: "select",
      options: [
        "Motor",
        "Computer",
        "Bicycle",
        "Tablet",
        "Monitor",
        "Mobile",
        "Laptop",
      ],
      placeholder: "Select Product Name",
      fullWidth: true,
    },

    //  LEVEL FIELD (IMPORTANT)
    {
      name: "level",   //  MUST MATCH ManageProducts
      label: "Level",
      type: "select",
      options: ["Level1", "Level2", "Level3", "Level4"],
      placeholder: "Select Level",
      fullWidth: true,
    },

    {
      name: "code",
      label: "Code",
      placeholder: "Enter Code",
    },
    {
      name: "fgCode",
      label: "FG Code",
      type: "select",
      options: ["FG-1001", "FG-1002", "FG-2001", "FG-3005", "FG-4008"],
      placeholder: "Select FG Code",
    },
    {
      name: "productType",
      label: "Product Type",
      type: "select",
      options: ["Finished Goods", "Raw Material", "Semi Finished"],
      placeholder: "Select Product Type",
    },
    {
      name: "traceability",
      label: "Traceability",
      type: "select",
      options: ["Yes", "No"],
      placeholder: "Select Traceability",
    },
    {
      name: "status",
      label: "Status",
      type: "toggle",
    },
  ];

  const handleSubmit = (formData) => {
    if (editIndex !== undefined) {
      // UPDATE
      navigate("/manage-products", {
        state: {
          updatedProduct: formData,
          editIndex: editIndex,
        },
      });
    } else {
      // CREATE
      navigate("/manage-products", {
        state: {
          newProduct: formData,
        },
      });
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8 bg-gray-50 min-h-screen pt-20">
          <CommonForm
            title={editIndex !== undefined ? "Edit Product" : "Add Product"}
            fields={fields}
            initialData={
              editData || {
                productName: "",
                level: "",   //  MUST BE EMPTY STRING
                code: "",
                fgCode: "",
                productType: "",
                traceability: "",
                status: true,
              }
            }
            onSubmit={handleSubmit}
            onCancel={() => navigate("/manage-products")}
            submitLabel={
              editIndex !== undefined ? "Update Product" : "Create Product"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;


      //  // src/pages/ManageProducts.jsx
      //  import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
      //  import Navbar from "../component/Navbar";
      //  import Sidebar from "../component/Sidebar";
      //  import ReusableTable from "../component/ReusableTable";
      //  import AgTable from "../Components/Table/AgTable";
      //  import { useNavigate, useLocation } from "react-router-dom";
      //  import { Menu } from "@headlessui/react";
      //  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
       
      //  const FG_CODES = [
      //    { code: "MECGGENX3" },
      //    { code: "MECGGENX3S" },
      //    { code: "MECGGENX12I+" },
      //    { code: "MECGGENX12I" },
      //  ];
       
      //  const ManageProducts = () => {
      //    const navigate = useNavigate();
      //    const location = useLocation();
      //    const processedRef = useRef(false);
       
      //    const [activePage, setActivePage] = useState(1);
      //    const [perPage, setPerPage] = useState(25);
      //    const [products, setProducts] = useState(() => {
      //      const saved = localStorage.getItem("products");
      //      return saved ? JSON.parse(saved) : [];
      //    });
      //    const [activeMainTab, setActiveMainTab] = useState("productMaster");
      //    const [activeSubTab, setActiveSubTab] = useState("products");
      //    const [selectedFGCodes, setSelectedFGCodes] = useState([]);
      //    const [isOrganizing, setIsOrganizing] = useState(false);
       
      //    // Save products to localStorage
      //    useEffect(() => {
      //      localStorage.setItem("products", JSON.stringify(products));
      //    }, [products]);
       
      //    // Add / Update product from navigation state
      //    useEffect(() => {
      //      if (processedRef.current) return;
       
      //      if (location.state?.newProduct) {
      //        const newProduct = {
      //          ...location.state.newProduct,
      //          id: Date.now(),
      //          addedOn: new Date().toLocaleDateString("en-GB"),
      //          level: 1,
      //        };
      //        setProducts((prev) => [...prev, newProduct]);
      //        processedRef.current = true;
      //        navigate(".", { replace: true });
      //      }
       
      //      if (location.state?.updatedProduct) {
      //        const { updatedProduct, editIndex } = location.state;
      //        setProducts((prev) =>
      //          prev.map((item, i) =>
      //            i === editIndex ? { ...item, ...updatedProduct } : item
      //          )
      //        );
      //        processedRef.current = true;
      //        navigate(".", { replace: true });
      //      }
      //    }, [location.state, navigate]);
       
      //    // Pagination
      //    const totalRecords = products.length;
      //    const totalPages = Math.ceil(totalRecords / perPage) || 1;
      //    const startIndex = (activePage - 1) * perPage;
      //    const endIndex = startIndex + perPage;
      //    const paginatedProducts = products.slice(startIndex, endIndex);
       
      //    // Build rowData with levels
      //    const rowData = useMemo(() => {
      //      const levelMap = {};
      //      const finalData = [];
      //      paginatedProducts.forEach((p) => {
      //        const level = p.level || 1;
      //        if (!levelMap[level]) levelMap[level] = [];
      //        levelMap[level].push(p);
      //      });
       
      //      Object.keys(levelMap)
      //        .sort((a, b) => a - b)
      //        .forEach((level) => {
      //          finalData.push({ isLevelRow: true, levelLabel: `Level ${level}`, level });
      //          levelMap[level].forEach((item, idx) => {
      //            finalData.push({ ...item, sNo: startIndex + idx + 1 });
      //          });
      //        });
       
      //      return finalData;
      //    }, [paginatedProducts, startIndex]);
       
      //    const startCount = totalRecords === 0 ? 0 : startIndex + 1;
      //    const endCount = Math.min(endIndex, totalRecords);
       
      //    const handlePageChange = (page) => setActivePage(page);
      //    const handlePerPageChange = (value) => {
      //      setPerPage(Number(value));
      //      setActivePage(1);
      //    };
       
      //    const handleEdit = useCallback(
      //      (row) => {
      //        const index = products.findIndex((p) => p.id === row.id);
      //        navigate("/add-product", { state: { editData: row, editIndex: index } });
      //      },
      //      [products, navigate]
      //    );
       
      //    const handleDelete = useCallback(
      //      (id) => setProducts((prev) => prev.filter((p) => p.id !== id)),
      //      []
      //    );
       
      //    const toggleFGCode = (item) => {
      //      setSelectedFGCodes((prev) =>
      //        prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
      //      );
      //    };
       
      //    const handleSave = () => {
      //      setIsOrganizing(false);
      //      localStorage.setItem("products", JSON.stringify(products));
      //      alert("Order saved successfully!");
      //    };
       
      //    const handleReset = () => {
      //      const saved = localStorage.getItem("products");
      //      setProducts(saved ? JSON.parse(saved) : []);
      //      setIsOrganizing(false);
      //    };
       
      //    // Column definitions
      //    const columnDefs = useMemo(
      //      () => [
      //        isOrganizing && {
      //          headerName: "",
      //          field: "drag",
      //          width: 40,
      //          rowDrag: (params) => !params.data?.isLevelRow,
      //        },
      //        { headerName: "S.No", field: "sNo", width: 90, cellRenderer: (params) => (params.data?.isLevelRow ? "" : params.value) },
      //        {
      //          headerName: "Product Name",
      //          field: "productName",
      //          flex: 1.5,
      //          cellRenderer: (params) =>
      //            params.data?.isLevelRow ? (
      //              <div className="w-full text-center font-semibold py-2">{params.data.levelLabel}</div>
      //            ) : (
      //              params.value
      //            ),
      //          colSpan: (params) => (params.data?.isLevelRow ? 9 : 1),
      //        },
      //        { headerName: "Code", field: "code", flex: 1 },
      //        { headerName: "FG Code", field: "fgCode", flex: 1 },
      //        { headerName: "Product Type", field: "productType", flex: 1 },
      //        { headerName: "Traceability", field: "traceability", flex: 1 },
      //        { headerName: "Added On", field: "addedOn", flex: 1 },
      //        {
      //          headerName: "Status",
      //          field: "status",
      //          width: 120,
      //          cellRenderer: (params) =>
      //            params.data?.isLevelRow ? null : (
      //              <div className="flex items-center gap-2">
      //                <span className={`w-2 h-2 rounded-full ${params.value ? "bg-green-500" : "bg-red-500"}`} />
      //                <span>{params.value ? "Active" : "Inactive"}</span>
      //              </div>
      //            ),
      //        },
      //        {
      //          headerName: "Action",
      //          width: 100,
      //          cellRenderer: (params) => {
      //            if (params.data?.isLevelRow) return null;
      //            return (
      //              <Menu as="div" className="relative inline-block text-left">
      //                <Menu.Button className="p-2 hover:bg-gray-200 rounded">
      //                  <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
      //                </Menu.Button>
      //                <Menu.Items className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-50">
      //                  <Menu.Item>{({ active }) => <button onClick={() => handleEdit(params.data)} className={`${active ? "bg-gray-100" : ""} block w-full px-4 py-2 text-sm text-blue-600`}>Edit</button>}</Menu.Item>
      //                  <Menu.Item>{({ active }) => <button onClick={() => handleDelete(params.data.id)} className={`${active ? "bg-gray-100" : ""} block w-full px-4 py-2 text-sm text-red-600`}>Delete</button>}</Menu.Item>
      //                </Menu.Items>
      //              </Menu>
      //            );
      //          },
      //        },
      //      ].filter(Boolean),
      //      [isOrganizing, handleEdit, handleDelete]
      //    );
       
      //    // ===== DRAG & DROP REPLACE BEHAVIOR =====
      //    const handleRowDragEnd = (event) => {
      //      const moved = event.node.data;
      //      if (moved.isLevelRow) return;
       
      //      const overNode = event.overNode?.data;
      //      if (!overNode) return;
       
      //      const newLevel = overNode.isLevelRow ? overNode.level : overNode.level || 1;
       
      //      // Create copy of products
      //      const updatedProducts = [...products];
       
      //      const movedIndex = updatedProducts.findIndex((p) => p.id === moved.id);
      //      const overIndex = updatedProducts.findIndex((p) => p.id === overNode.id);
       
      //      if (movedIndex === -1 || overIndex === -1) return;
       
      //      // Swap / Replace
      //      updatedProducts[movedIndex] = { ...updatedProducts[movedIndex], level: newLevel };
      //      const temp = updatedProducts[overIndex];
      //      updatedProducts[overIndex] = updatedProducts[movedIndex];
      //      updatedProducts[movedIndex] = temp;
       
      //      setProducts(updatedProducts);
      //    };
       
      //    return (
      //      <>
      //        <Navbar />
      //        <div className="flex">
      //          <Sidebar />
      //          <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      //            <h1 className="text-xl font-semibold text-[#272757] mt-16 mb-6">Manage Products</h1>
       
      //            <div className="flex gap-6 border-b mt-8">
      //              {[{ id: "productMaster", label: "Product Master" }, { id: "products", label: "Products" }, { id: "type", label: "Type" }, { id: "uploadHistory", label: "Upload History" }].map((tab) => (
      //                <button key={tab.id} onClick={() => setActiveMainTab(tab.id)}
      //                  className={`pb-2 ${activeMainTab === tab.id ? "border-b-2 border-[#272757] text-[#272757]" : "text-gray-500"}`}>{tab.label}</button>
      //              ))}
      //            </div>
       
      //            <div className="flex gap-6 mt-4">
      //              <ReusableTable
      //                title="FG Code List"
      //                columns={[{ key: "code", label: "FG Code" }]}
      //                data={FG_CODES}
      //                selectable
      //                selectedItems={selectedFGCodes}
      //                onSelect={toggleFGCode}
      //                width="w-72"
      //              />
       
      //              <div className="flex-1 bg-white rounded p-6 shadow">
      //                <div className="flex justify-between items-center mb-4">
      //                  <div className="flex gap-6 border-b items-center">
      //                    <button onClick={() => setActiveSubTab("products")} className={`pb-2 ${activeSubTab === "products" ? "border-b-2 border-black" : "text-gray-500"}`}>Products</button>
      //                    <button onClick={() => setActiveSubTab("fgInfo")} className={`pb-2 ${activeSubTab === "fgInfo" ? "border-b-2 border-black" : "text-gray-500"}`}>FG Info</button>
      //                    <button onClick={() => setIsOrganizing(!isOrganizing)} className={`pb-2 ${isOrganizing ? "border-b-2 border-black" : "text-gray-500"}`}>Organize</button>
       
      //                    {isOrganizing && <div className="flex gap-3 ml-4">
      //                      <button onClick={handleSave} className="bg-green-600 text-white px-4 py-1 rounded text-sm">Save</button>
      //                      <button onClick={handleReset} className="bg-red-500 text-white px-4 py-1 rounded text-sm">Reset</button>
      //                    </div>}
      //                  </div>
       
      //                  <div className="flex gap-3">
      //                    <button className="bg-[#3f3d8f] text-white px-4 py-2 rounded text-sm">Download Excel</button>
      //                    <button className="bg-[#3f3d8f] text-white px-4 py-2 rounded text-sm">Upload</button>
      //                    <button onClick={() => navigate("/add-product")} className="bg-[#3f3d8f] text-white px-4 py-2 rounded text-sm">Add Product</button>
      //                  </div>
      //                </div>
       
      //                <AgTable
      //                  rowData={rowData}
      //                  columnDefs={columnDefs}
      //                  activePage={activePage}
      //                  handlePageChange={handlePageChange}
      //                  pagination={true}
      //                  paginationData={{ total_page: totalPages, per_page: perPage, total_count: totalRecords, from: startCount, to: endCount }}
      //                  onPerPageChange={handlePerPageChange}
      //                  onRowDragEnd={handleRowDragEnd}
      //                />
      //              </div>
      //            </div>
      //          </div>
      //        </div>
      //      </>
      //    );
      //  };
       
      //  export default ManageProducts;
          