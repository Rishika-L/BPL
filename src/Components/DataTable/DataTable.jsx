import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export default function DataTable() {
  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const [columnDefs, setColDefs] = useState([
    { headerName: "check", checkboxSelection: true },
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      filter: true,
      resizable: true,
      flex: 1,
    };
  }, []);

  return <div className="ag-theme-quartz" style={{ height: 400, width: 600 }}>
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}  
      rowSelection={"multiple"}
      defaultColDef={defaultColDef} 
      rowHeight={48}
            theme="quartz" // 👈 NEW theming API

    />

  </div>;
}
