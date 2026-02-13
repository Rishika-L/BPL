// // import React, { useState, useRef, useEffect } from "react";
// // import { AgGridReact } from "ag-grid-react";
// // import {
// //   RowSelectionModule,
// //   ClientSideRowModelModule,
// //   CellStyleModule,
// //   ValidationModule,
// //   ModuleRegistry,
// // } from "ag-grid-community";
// // import "ag-grid-community/styles/ag-grid.css";
// // import "ag-grid-community/styles/ag-theme-quartz.css";
// // import "./AgTable.css";
// // import Pagination from "./Pagination/Pagination";
// // import Loader from "../Loader/Loader";

// // // Register ag-Grid modules
// // ModuleRegistry.registerModules([
// //   RowSelectionModule,
// //   ClientSideRowModelModule,
// //   CellStyleModule,
// //   ValidationModule,
// // ]);

// // const RadioTable = ({
// //   rowData,
// //   columnDefs,
// //   gridOptions,
// //   tableWidth = "100%",
// //   changeActivepage,
// //   handlePageChange,
// //   activePage,
// //   paginationData,
// //   pagination = true,
// //   loading = false,
// //   onPerPageChange,
// //   onRowSelect, // Callback function to send selected row ID
// // }) => {
// //   const gridRef = useRef();
// //   const [selectedRowId, setSelectedRowId] = useState(null); // Track only the selected row's ID
// //   const [gridApi, setGridApi] = useState(null); // Track the grid API

// //   // Handles the selection change event and passes the selected row ID
// //   const onSelectionChanged = () => {
// //     const selectedRows = gridRef.current.api.getSelectedRows();
// //     if (selectedRows.length > 0) {
// //       const selectedRow = selectedRows[0]; // Get the first selected row
// //       setSelectedRowId(selectedRow); // Save the selected row ID
// //       if (onRowSelect) {
// //         onRowSelect(selectedRow); // Send the selected row ID to parent
// //       }
// //     }
// //   };

// //   const capitalizeFirstLetter = (value) => {
// //     if (typeof value === "string" && value.length > 0) {
// //       return value.charAt(0).toUpperCase() + value.slice(1);
// //     }
// //     return value;
// //   };

// //   const formattedColumnDefs = columnDefs.map((colDef) => ({
// //     ...colDef,
// //     valueFormatter: colDef?.field
// //       ? (params) => capitalizeFirstLetter(params?.value)
// //       : colDef?.valueFormatter,
// //   }));

// //   const checkboxColumnDef = {
// //     headerName: null, // No header checkbox selection
// //     checkboxSelection: true, // Allow checkbox selection on rows
// //     minWidth: 50,
// //     maxWidth: 50,
// //     cellClass: "center-align",
// //     // Disable multi-checkbox selection, only enable single selection in the grid
// //     suppressNavigable: true, // Optional: disables keyboard navigation to the checkbox
// //   };

// //   const combinedColumnDefs = [checkboxColumnDef, ...formattedColumnDefs];

// //   const defaultGridOptions = {
// //     rowSelection: "single", // Allow only single row selection
// //     rowHeight: 48,
// //     suppressRowClickSelection: true,
// //     ...gridOptions,
// //   };

// //   // onGridReady callback to get the grid API
// //   const onGridReady = (params) => {
// //     setGridApi(params.api);
// //     // After grid is ready, select the first row
// //     if (rowData && rowData.length > 0) {
// //       const firstRowNode = params.api.getDisplayedRowAtIndex(0);
// //       if (firstRowNode) {
// //         params.api.selectNode(firstRowNode); // Select the first row
// //       }
// //     }
// //   };

// //   return (
// //     <div className="grid-container">
// //       {loading && (
// //         <div className="loader-overlay">
// //           <Loader />
// //         </div>
// //       )}
// //       <div
// //         className={`ag-grid ag-theme-quartz custom-grid ${
// //           loading ? "grid-hidden" : ""
// //         }`}
// //         style={{ width: tableWidth }}
// //       >
// //         <AgGridReact
// //           ref={gridRef}
// //           rowData={rowData}
// //           columnDefs={combinedColumnDefs}
// //           gridOptions={defaultGridOptions}
// //           domLayout="autoHeight"
// //           pagination={false}
// //           defaultColDef={{
// //             flex: 1,
// //           }}
// //           onGridReady={onGridReady} // Handle grid ready
// //           onSelectionChanged={onSelectionChanged} // Handle row selection change
// //         />
// //         {pagination && (
// //           <Pagination
// //             totalPages={paginationData?.total_page}
// //             per_page={paginationData?.per_page}
// //             totalRecords={paginationData?.total_count}
// //             startCount={paginationData?.from}
// //             endCount={paginationData?.to}
// //             activePage={activePage}
// //             changeActivepage={changeActivepage}
// //             handlePageChange={handlePageChange}
// //             onPerPageChange={onPerPageChange}
// //           />
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default RadioTable;


// import React, { useState, useRef, useEffect } from "react";
// import { AgGridReact } from "ag-grid-react";
// import {
//   RowSelectionModule,
//   ClientSideRowModelModule,
//   CellStyleModule,
//   ValidationModule,
//   ModuleRegistry,
// } from "ag-grid-community";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";
// import "./AgTable.css";
// import Pagination from "./Pagination/Pagination";
// import Loader from "../Loader/Loader";

// // Register ag-Grid modules
// ModuleRegistry.registerModules([
//   RowSelectionModule,
//   ClientSideRowModelModule,
//   CellStyleModule,
//   ValidationModule,
// ]);

// const RadioTable = ({
//   rowData,
//   columnDefs,
//   gridOptions,
//   tableWidth = "100%",
//   changeActivepage,
//   handlePageChange,
//   activePage,
//   paginationData,
//   pagination = true,
//   loading = false,
//   onPerPageChange,
//   onRowSelect, // Callback function to send selected row ID
// }) => {
//   const gridRef = useRef();
//   const [selectedRowId, setSelectedRowId] = useState(null); // Track only the selected row's ID
//   const [gridApi, setGridApi] = useState(null); // Track the grid API

//   // Handles the selection change event and passes the selected row ID
//   const onSelectionChanged = () => {
//     const selectedRows = gridRef.current.api.getSelectedRows();
//     if (selectedRows.length > 0) {
//       const selectedRow = selectedRows[0]; // Get the first selected row
//       setSelectedRowId(selectedRow); // Save the selected row ID
//       if (onRowSelect) {
//         onRowSelect(selectedRow); // Send the selected row ID to parent
//       }
//     }
//   };

//   const capitalizeFirstLetter = (value) => {
//     if (typeof value === "string" && value.length > 0) {
//       return value.charAt(0).toUpperCase() + value.slice(1);
//     }
//     return value;
//   };

//   const formattedColumnDefs = columnDefs.map((colDef) => ({
//     ...colDef,
//     valueFormatter: colDef?.field
//       ? (params) => capitalizeFirstLetter(params?.value)
//       : colDef?.valueFormatter,
//   }));

//   const checkboxColumnDef = {
//     headerName: null, // No header checkbox selection
//     checkboxSelection: true, // Allow checkbox selection on rows
//     minWidth: 50,
//     maxWidth: 50,
//     cellClass: "center-align",
//     // Disable multi-checkbox selection, only enable single selection in the grid
//     suppressNavigable: true, // Optional: disables keyboard navigation to the checkbox
//   };

//   const combinedColumnDefs = [checkboxColumnDef, ...formattedColumnDefs];

//   const defaultGridOptions = {
//     rowSelection: "single", // Allow only single row selection
//     rowHeight: 48,
//     suppressRowClickSelection: true,
//     ...gridOptions,
//   };

//   // onGridReady callback to get the grid API
//   const onGridReady = (params) => {
//     setGridApi(params.api);
//     // After grid is ready, select the first row if data exists
//     if (rowData && rowData.length > 0) {
//       const firstRowNode = params.api.getDisplayedRowAtIndex(0);
//       if (firstRowNode) {
//         params.api.selectNode(firstRowNode); // Select the first row
//       }
//     }
//   };

//   return (
//     <div className="grid-container">
//       {loading && (
//         <div className="loader-overlay">
//           <Loader />
//         </div>
//       )}
//       <div
//         className={`ag-grid ag-theme-quartz custom-grid ${
//           loading ? "grid-hidden" : ""
//         }`}
//         style={{ width: tableWidth }}
//       >
//         <AgGridReact
//           ref={gridRef}
//           rowData={rowData}
//           columnDefs={combinedColumnDefs}
//           gridOptions={defaultGridOptions}
//           domLayout="autoHeight"
//           pagination={false}
//           defaultColDef={{
//             flex: 1,
//           }}
//           onGridReady={onGridReady} // Handle grid ready
//           onSelectionChanged={onSelectionChanged} // Handle row selection change
//         />
//         {pagination && (
//           <Pagination
//             totalPages={paginationData?.total_page}
//             per_page={paginationData?.per_page}
//             totalRecords={paginationData?.total_count}
//             startCount={paginationData?.from}
//             endCount={paginationData?.to}
//             activePage={activePage}
//             changeActivepage={changeActivepage}
//             handlePageChange={handlePageChange}
//             onPerPageChange={onPerPageChange}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default RadioTable;

import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  RowSelectionModule,
  ClientSideRowModelModule,
  CellStyleModule,
  ValidationModule,
  ModuleRegistry,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./AgTable.css";
import Pagination from "./Pagination/Pagination";
import Loader from "../Loader/Loader";

// Register ag-Grid modules
ModuleRegistry.registerModules([
  RowSelectionModule,
  ClientSideRowModelModule,
  CellStyleModule,
  ValidationModule,
]);

const RadioTable = ({
  rowData,
  columnDefs,
  gridOptions,
  tableWidth = "100%",
  changeActivepage,
  handlePageChange,
  activePage,
  paginationData,
  pagination = true,
  loading = false,
  onPerPageChange,
  onRowSelect, // Callback function to send selected row ID
  wrap=false
}) => {
  const gridRef = useRef();
  const [selectedRowId, setSelectedRowId] = useState(null); // Track only the selected row's ID
  const [gridApi, setGridApi] = useState(null); // Track the grid API

  // Handles the selection change event and passes the selected row ID
  const onSelectionChanged = () => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    if (selectedRows.length > 0) {
      const selectedRow = selectedRows[0]; // Get the first selected row
      setSelectedRowId(selectedRow); // Save the selected row ID
      if (onRowSelect) {
        onRowSelect(selectedRow); // Send the selected row ID to parent
      }
    }
  };

  const capitalizeFirstLetter = (value) => {
    if (typeof value === "string" && value.length > 0) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  };

  const formattedColumnDefs = columnDefs.map((colDef) => ({
    ...colDef,
    valueFormatter: colDef?.field
      ? (params) => capitalizeFirstLetter(params?.value)
      : colDef?.valueFormatter,
  }));

  const checkboxColumnDef = {
    headerName: null, // No header checkbox selection
    checkboxSelection: true, // Allow checkbox selection on rows
    minWidth: 50,
    maxWidth: 50,
    cellClass: "center-align",
    suppressNavigable: true, // Optional: disables keyboard navigation to the checkbox
    headerCheckboxSelection: true, // Adds checkbox to the header if needed
    headerCheckboxSelectionFilteredOnly: true, // Allows selecting all rows only if filtered
  };

  const combinedColumnDefs = [checkboxColumnDef, ...formattedColumnDefs];

  const defaultGridOptions = {
    rowSelection: "single", // Allow only single row selection
    rowHeight: 48,
    suppressRowClickSelection: true,
    ...gridOptions,
  };

  // onGridReady callback to get the grid API
  const onGridReady = (params) => {
    setGridApi(params.api);
    // After grid is ready, select the first row and visually check the checkbox
    if (rowData && rowData.length > 0) {
      const firstRowNode = params.api.getDisplayedRowAtIndex(0);
      if (firstRowNode) {
        params.api.selectNode(firstRowNode, true); // Select the first row and check the checkbox
      }
    }
  };

  return (
    <div className="grid-container">
      {loading && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}
      <div
        className={`ag-grid ag-theme-quartz custom-grid ${
          loading ? "grid-hidden" : ""
        }`}
        style={{ width: tableWidth }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={combinedColumnDefs}
          gridOptions={defaultGridOptions}
          domLayout="autoHeight"
          pagination={false}
          defaultColDef={{
            flex: 1,
          }}
          onGridReady={onGridReady} // Handle grid ready
          onSelectionChanged={onSelectionChanged} // Handle row selection change
        />
        {pagination && (
          <Pagination
            totalPages={paginationData?.total_page}
            per_page={paginationData?.per_page}
            totalRecords={paginationData?.total_count}
            startCount={paginationData?.from}
            endCount={paginationData?.to}
            activePage={activePage}
            changeActivepage={changeActivepage}
            handlePageChange={handlePageChange}
            onPerPageChange={onPerPageChange}
            wrap={wrap} // Pass the wrap prop to Pagination
          />
        )}
      </div>
    </div>
  );
};

export default RadioTable;
