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

  //  Fields Configuration
  const fields = [
    {
      level: "Level 1",

      name: "productName",
      label: "Product Name",
      type: "select",
      options: ["Motor", "Computer", "Bicycle"],
      placeholder: "Select Product Name",
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
  options: [
    "FG-1001",
    "FG-1002",
    "FG-2001",
    "FG-3005",
    "FG-4008",
  ],
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

  //  Submit Handler
  const handleSubmit = (formData) => {
    const existingProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    if (editIndex !== undefined) {
      // Update
      existingProducts[editIndex] = {
        ...existingProducts[editIndex],
        ...formData,
      };
    } else {
      // Create
      existingProducts.push({
        ...formData,
        addedOn: new Date().toLocaleDateString("en-GB"),
      });
    }

    localStorage.setItem("products", JSON.stringify(existingProducts));
    navigate("/manage-products");
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
