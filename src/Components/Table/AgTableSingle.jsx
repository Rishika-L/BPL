import React, { useState, useEffect, useRef } from "react";
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
import Loader from "../Loader/Loader"

ModuleRegistry.registerModules([
  RowSelectionModule,
  ClientSideRowModelModule,
  CellStyleModule,
  ValidationModule,
]);


const AgTableSingle = ({
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
  onGridReady,
  onFirstDataRendered,
  onRowSelect
}) => {
  // const [loading, setLoading] = useState(true);
  const gridRef = useRef();
  const [selectedRowId, setSelectedRowId] = useState(null); // Track only the selected row's ID

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Simulate a loading delay
  //   return () => clearTimeout(timer);
  // }, []);

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
    headerCheckboxSelection: true,
    checkboxSelection: true,
    headerName: "",
    minWidth: 51,
    maxWidth: 51,
    cellClass: "center-align",
  };

  const combinedColumnDefs = [checkboxColumnDef, ...formattedColumnDefs];
  const defaultGridOptions = {
    rowSelection: "single",
    rowHeight: 48,
    suppressRowClickSelection: true,
    ...gridOptions,
  };
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


  return (
    <div className="grid-container">
      {loading && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}
      <div
        className={`ag-grid ag-theme-quartz custom-grid ${loading ? "grid-hidden" : ""
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
          onGridReady={onGridReady}
          onFirstDataRendered={onFirstDataRendered}

        />
        {
          pagination &&
          // <Pagination
          //   totalPages={paginationData?.total_page}
          //   per_page={paginationData?.per_page}
          //   totalRecords={paginationData?.total_count}
          //   startCount={paginationData?.from}
          //   endCount={paginationData?.to}
          //   activePage={activePage}         
          //   changeActivepage={changeActivepage}
          //   handlePageChange={handlePageChange}
          //   onPerPageChange={onPerPageChange}
          // />
          <Pagination
  totalPages={paginationData?.total_page}
  per_page={paginationData?.per_page}
  totalRecords={rowData.length === 0 ? 0 : paginationData?.total_count}
  startCount={rowData.length === 0 ? 0 : paginationData?.from}
  endCount={rowData.length === 0 ? 0 : paginationData?.to}
  activePage={activePage}
  changeActivepage={changeActivepage}
  handlePageChange={handlePageChange}
  onPerPageChange={onPerPageChange}
/>

        }
      </div>
    </div>
  );
};

export default AgTableSingle;
