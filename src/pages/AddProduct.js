// src/pages/AddProduct.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

const AddProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const saveProduct = location.state?.saveProduct;

  const [form, setForm] = useState({
    productName: "",
    codeFCName: "",
    fgName: "",
    productType: "",
    traceability: "Yes",
    addOn: "Yes",
    level: "Level 1",
    status: "Active",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      addedOn: new Date().toLocaleDateString("en-GB"),
    };

    if (saveProduct) saveProduct(payload);

    navigate("/manage-products");
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-xl font-semibold text-[#272757] mt-16 mb-6">
            Add Product
          </h1>

          <div className="bg-white p-6 rounded shadow max-w-4xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Product Name</label>
                <input
                  name="productName"
                  value={form.productName}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Code FC Name</label>
                <input
                  name="codeFCName"
                  value={form.codeFCName}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>

              <div>
                <label className="text-sm">FG Name</label>
                <input
                  name="fgName"
                  value={form.fgName}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="text-sm">Product Type</label>
                <select
                  name="productType"
                  value={form.productType}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                >
                  <option value="">Select</option>
                  <option value="SUB ASSY">SUB ASSY</option>
                  <option value="UNIT ASSY">UNIT ASSY</option>
                  <option value="UNIT-PRD TESTING">UNIT-PRD TESTING</option>
                  <option value="PACKING ASSY">PACKING ASSY</option>
                  <option value="UNIT-QC INSPECTION">UNIT-QC INSPECTION</option>
                </select>
              </div>

              <div>
                <label className="text-sm">Traceability</label>
                <select
                  name="traceability"
                  value={form.traceability}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label className="text-sm">Add On</label>
                <input
                  name="addOn"
                  value={form.addOn}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="text-sm">Level</label>
                <select
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option>Level 1</option>
                  <option>Level 2</option>
                  <option>Level 3</option>
                  <option>Level 4</option>
                  <option>Level 5</option>
                  <option>Level 6</option>
                </select>
              </div>

              <div>
                <label className="text-sm">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div>
                <label className="text-sm">Added On</label>
                <input
                  value={new Date().toLocaleDateString("en-GB")}
                  disabled
                  className="border p-2 rounded w-full bg-gray-100"
                />
              </div>

              <div className="col-span-2 flex gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-[#272757] text-white px-6 py-2 rounded"
                >
                  Save Product
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/manage-products")}
                  className="border px-6 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
