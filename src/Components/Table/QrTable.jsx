// import React, { useState, useRef } from "react";
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

// ModuleRegistry.registerModules([
//   RowSelectionModule,
//   ClientSideRowModelModule,
//   CellStyleModule,
//   ValidationModule,
// ]);

// const QrTable = ({
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
//   onRowSelect,
//   handleCheckboxClick,
//   onRowClick = () => {},
// }) => {
//   const gridRef = useRef();
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectionStatus, setSelectionStatus] = useState({});

//   // Checkbox Column for Selection
//   const checkboxColumnDef = {
//     headerName: "Yes",
//     field: "selection",
//     minWidth: 80,
//     maxWidth: 80,
//     cellClass: "center-align",
//     cellRenderer: (params) => {
//       const isChecked = selectionStatus[params.node.id] || false;
//       return (
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={() => handleCheckboxClick(params.data, params.node.id, setSelectionStatus)}
//         />
//       );
//     },
//   };

//   // Combine Custom Columns with Existing Column Definitions
//   const combinedColumnDefs = [checkboxColumnDef, ...columnDefs];

//   // Default Grid Options
//   const defaultGridOptions = {
//     rowSelection: "multiple",
//     rowHeight: 48,
//     suppressRowClickSelection: true,
//     onRowClicked: (event) => {
//       if (onRowClick) {
//         onRowClick(event.data); // Call the onRowClick function with row data
//       }
//     },
//     ...gridOptions,
//   };

//   return (
//     <div className="grid-container">
//       {loading && (
//         <div className="loader-overlay">
//           <Loader />
//         </div>
//       )}
//       <div
//         className={`ag-grid ag-theme-quartz custom-grid ${loading ? "grid-hidden" : ""}`}
//         style={{ width: tableWidth }}
//       >
//         <AgGridReact
//           ref={gridRef}
//           rowData={rowData}
//           columnDefs={combinedColumnDefs}
//           gridOptions={defaultGridOptions}
//           domLayout="autoHeight"
//           pagination={false}
//           defaultColDef={{ flex: 1 }}
//           onGridReady={() => gridRef.current.api.sizeColumnsToFit()}
//           onRowClicked={(event) => onRowClick(event.data)}
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

// export default QrTable;

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
// import { CheckIcon } from "@heroicons/react/24/solid"; // Import Tailwind Icons
import "./AgTable.css";
import Pagination from "./Pagination/Pagination";
import Loader from "../Loader/Loader";
import Icons from "../../Content/Icons";

ModuleRegistry.registerModules([
  RowSelectionModule,
  ClientSideRowModelModule,
  CellStyleModule,
  ValidationModule,
]);

const QrTable = ({
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
  onRowSelect,
  handleCheckboxClick,
  onRowClick = () => {},
  shouldShowTick = () => false, 
}) => {
  const gridRef = useRef();
  

  const checkboxColumnDef = {
    headerName: "Yes",
    field: "selection",
    minWidth: 50,
    maxWidth: 50,
    headerClass: "center-align ", // Center aligns the header
    cellClass: "start-align",
    cellRenderer: (params) => {
      
      // Ensure `shouldShowTick` is defined and returns a boolean or numeric value
      const showTick = params?.data?.status === 1;
  
      return showTick ? (
        <img src={Icons?.CheckBoxIcon} alt="Check Box Icon" />
        // <span className="text--500"></span>
      ) : (
        <input
        type="checkbox"
        // className="w-4 h-4"
        name="task"
        checked={params?.data?.status === 1} 
        />
      );
    },
  };
  

  const updatedColumnDefs = columnDefs.map((col) => ({
    ...col,
    valueGetter: (params) => params.data?.[col.field] ?? "N/A",
  }));

  const combinedColumnDefs = [checkboxColumnDef, ...updatedColumnDefs];

  // Default Grid Options
  const defaultGridOptions = {
    rowSelection: "multiple",
    rowHeight: 48,
    suppressRowClickSelection: true,
    onRowClicked: (event) => {
      if (onRowClick) {
        onRowClick(event.data);
      }
    },
    ...gridOptions,
  };

  return (
    <div className="grid-container">
      {loading && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}
      {/* <div
        className={`ag-grid ag-theme-quartz custom-grid ${loading ? "grid-hidden" : ""}`}
        style={{ width: tableWidth }}
      > */}
      {/* <div
  className={`ag-grid ag-theme-quartz custom-grid ${loading ? "hidden" : ""} w-[${tableWidth}px] h-[200px] overflow-auto`}
>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={combinedColumnDefs}
          gridOptions={defaultGridOptions}
          domLayout="autoHeight"
          pagination={false}
          defaultColDef={{ flex: 1 }}
          onGridReady={() => gridRef.current.api.sizeColumnsToFit()}
          onRowClicked={(event) => onRowClick(event.data)}
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
          />
        )}
      </div> */}

<div
        className={`ag-grid ag-theme-quartz custom-grid  scrollbar-hide h-auto   ${loading ? "grid-hidden" : ""}`  }
        style={{ width: tableWidth }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={combinedColumnDefs}
          gridOptions={defaultGridOptions}
          domLayout="autoHeight"
          pagination={false}
          defaultColDef={{ flex: 1 }}
          onGridReady={() => gridRef.current.api.sizeColumnsToFit()}
          onRowClicked={(event) => onRowClick(event.data)}
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
          />
        )}
      </div>
    </div>
  );
};

export default QrTable;
