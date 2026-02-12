// src/pages/ManageProducts.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import ReusableTable from "../component/ReusableTable";
import LeftProductsTable from "../component/LeftProductsTable";
import { useNavigate, useLocation } from "react-router-dom";

const FG_CODES = [
  { code: "MECGGENX3" },
  { code: "MECGGENX3S" },
  { code: "MECGGENX12I+" },
  { code: "MECGGENX12I" },
];

const ManageProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMainTab, setActiveMainTab] = useState("productMaster");
  const [activeSubTab, setActiveSubTab] = useState("products");
  const [selectedFGCodes, setSelectedFGCodes] = useState([]);
  const [isOrganizing, setIsOrganizing] = useState(false);

  // Load products
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Coming from AddProduct page
  useEffect(() => {
    if (location.state?.newProduct) {
      const newProduct = {
        ...location.state.newProduct,
        id: Date.now(),
        addedOn: new Date().toLocaleDateString("en-GB"),
      };
      setProducts((prev) => [...prev, newProduct]);
      navigate(".", { replace: true });
    }

    if (location.state?.updatedProduct !== undefined) {
      const { updatedProduct, editIndex } = location.state;

      setProducts((prev) =>
        prev.map((item, i) =>
          i === editIndex ? { ...updatedProduct } : item
        )
      );

      navigate(".", { replace: true });
    }
  }, [location.state, navigate]);

  // Delete
  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  // Edit
  const handleEdit = (index) => {
    navigate("/add-product", {
      state: { editData: products[index], editIndex: index },
    });
  };

  // FG Select
  const toggleFGCode = (item) => {
    setSelectedFGCodes((prev) =>
      prev.includes(item)
        ? prev.filter((c) => c !== item)
        : [...prev, item]
    );
  };

  // Save Organize
  const handleSave = () => {
    setIsOrganizing(false);
    alert("Order Saved Successfully");
  };

  // Reset Organize
  const handleReset = () => {
    const saved = localStorage.getItem("products");
    setProducts(saved ? JSON.parse(saved) : []);
    setIsOrganizing(false);
  };




  
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-xl font-semibold text-[#272757] mt-16">
            Manage Products
          </h1>

          {/* ================= MAIN TABS ================= */}
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

          <div className="flex gap-6">
            {/* LEFT FG TABLE */}
            <ReusableTable
              title="FG Code List"
              columns={[{ key: "code", label: "FG Code" }]}
              data={FG_CODES}
              selectable
              selectedItems={selectedFGCodes}
              onSelect={toggleFGCode}
              width="w-72"
              className="overflow-y-auto"
            />

            {/* RIGHT SIDE */}
            <div className="flex-1 bg-white rounded pt-16 px-6 mt-8">
              <div className="flex justify-between items-center mb-4">

                {/* SUB TABS */}
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

                {/* RIGHT BUTTONS */}
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

              {/* PRODUCTS TABLE */}
             <LeftProductsTable
  data={products}
  setData={setProducts}   // 👈 THIS IS IMPORTANT
  onEdit={handleEdit}
  onDelete={handleDelete}
  isOrganizing={isOrganizing}
/>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProducts;
