
export const productFields = [
  { name: "productName", label: "Product Name" },
  { name: "productCode", label: "Product Code" },
  { name: "fgName", label: "FG Name" },

  {
    name: "productType",
    label: "Product Type",
    type: "select",
    options: ["SUB ASSY", "UNIT ASSY", "PACKING ASSY"],
  },

  {
    name: "traceability",
    label: "Traceability",
    type: "select",
    options: ["Yes", "No"],
  },

  {
    name: "status",
    label: "Active",
    type: "checkbox",
  },
];
