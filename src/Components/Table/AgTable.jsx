import React, { useState, useEffect, useRef } from "react";
import { AgGridReact,Theme  } from "ag-grid-react";
import {
 RowSelectionModule,
  ClientSideRowModelModule,
  CellStyleModule,
  ValidationModule,
  ModuleRegistry,
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  CustomFilterModule,
  ColumnAutoSizeModule 
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./AgTable.css";
import Pagination from "./Pagination/Pagination";
import Loader from "../Loader/Loader";
import { AgGridThemeQuartz } from 'ag-grid-community/styles/ag-theme-quartz.css';


ModuleRegistry.registerModules([
  // RowSelectionModule,
  // ClientSideRowModelModule,
  // CellStyleModule,
  // ValidationModule,
  // // TextFilterModule,
  // // NumberFilterModule,
  // DateFilterModule,
  // // CustomFilterModule,
  // ColumnAutoSizeModule
]);


const AgTable = ({
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
  onSelectionChanged,
  className = "",
  onlyIsEdit = false,
}) => {
  // const [loading, setLoading] = useState(true);
  const gridRef = useRef();
  const handleSelectionChanged = () => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    if (onSelectionChanged) {
      onSelectionChanged(selectedRows); // Emit to parent if needed
    }
  };

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

    headerCheckboxSelectionFilteredOnly: onlyIsEdit ? true : false, // Only select filtered rows

    headerName: "",
    minWidth: 51,
    maxWidth: 51,
    cellClass: "center-align",
  };

  const combinedColumnDefs = className
    ? [...formattedColumnDefs]
    : [checkboxColumnDef, ...formattedColumnDefs];
  const defaultGridOptions = {
    rowSelection: "multiple",
    rowHeight: 48,
    suppressRowClickSelection: true,

    isRowSelectable: (params) => {
      if (onlyIsEdit) {
        // Only allow selection if is_edit is 1
        return params.data.is_edit === 1;
      }
      // Only allow selection if is_edit is 1
    },
    ...gridOptions,
  };

  return (
    <div className={`grid-container ${className}`}>
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
          overlayNoRowsTemplate={`<span style="color: gray; font-size: 16px;">No data found</span>`}
          defaultColDef={{
            flex: 1,
            minWidth: 150, // Ensure columns have enough width for scrolling
          }}
          onGridReady={() => gridRef?.current?.api?.sizeColumnsToFit()}
          onSelectionChanged={handleSelectionChanged} // 💡 Add this line
        />
        {pagination && (
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
            totalRecords={
              rowData.length === 0 ? 0 : paginationData?.total_count
            }
            startCount={rowData.length === 0 ? 0 : paginationData?.from}
            endCount={rowData.length === 0 ? 0 : paginationData?.to}
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

export default AgTable;
