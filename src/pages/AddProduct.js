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
      level: "Level 1",
      name: "productName",
      label: "Product Name",
      type: "select",
      options: ["Motor", "Computer", "Bicycle"],
      placeholder: "Select Product Name",
      fullWidth: true,
    },
    {
      level: "Level 1",
      name: "code",
      label: "Code",
      placeholder: "Enter Code",
    },
    {
      level: "Level 1",
      name: "fgCode",
      label: "FG Code",
      type: "select",
      options: ["FG-1001", "FG-1002", "FG-2001", "FG-3005", "FG-4008"],
      placeholder: "Select FG Code",
    },
    {
      level: "Level 1",
      name: "productType",
      label: "Product Type",
      type: "select",
      options: ["Finished Goods", "Raw Material", "Semi Finished"],
      placeholder: "Select Product Type",
    },
    {
      level: "Level 1",
      name: "traceability",
      label: "Traceability",
      type: "select",
      options: ["Yes", "No"],
      placeholder: "Select Traceability",
    },
    {
      level: "Level 1",
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
