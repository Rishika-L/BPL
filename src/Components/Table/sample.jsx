import React, { useRef, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const GridExample = () => {
  const gridRef = useRef(null);
  const [rowData] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Samuel Green' }
  ]);

  const columnDefs = [
    {
      headerCheckboxSelection: true, // Add checkbox for the header
      checkboxSelection: true, // Add checkbox for each row
      width: 50
    },
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name" }
  ];

  useEffect(() => {
    if (gridRef.current) {
      const gridApi = gridRef.current.api;
      const firstRowNode = gridApi.getDisplayedRowAtIndex(0); // Get the first row
      if (firstRowNode) {
        firstRowNode.setSelected(true); // Set the first row as selected
      }
    }
  }, [rowData]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        ref={gridRef}
        rowSelection="multiple"
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </div>
  );
};

export default GridExample;
