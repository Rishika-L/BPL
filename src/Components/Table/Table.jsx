import React, { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './Table.css';
import Loader from '../Loader/Loader';

const Table = ({ rowData, columnDefs, onGridReady, gridOptions, tableWidth = '100%' }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Helper function to capitalize the first letter
  const capitalizeFirstLetter = (value) => {
    if (typeof value === 'string' && value.length > 0) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  };

  // Add valueFormatter to all columns
  const formattedColumnDefs = columnDefs.map((colDef) => ({
    ...colDef,
    valueFormatter: colDef.field
      ? (params) => capitalizeFirstLetter(params.value)
      : colDef.valueFormatter, // Preserve existing formatters if any
  }));

  const checkboxColumnDef = {
    headerCheckboxSelection: true,
    checkboxSelection: true,
    headerName: '',
    minWidth: 91,
    maxWidth: 91,
    cellClass: 'center-align',
  };

  const combinedColumnDefs = [checkboxColumnDef, ...formattedColumnDefs];
  const defaultGridOptions = {
    rowSelection: 'multiple',
    rowHeight: 70,
    suppressRowClickSelection: true,
    suppressServerSideFullWidthLoadingRow: true,
    ...gridOptions,
  };
  
  const gridRef = useRef();

  useEffect(() => {
    const handleResize = () => {
        if (gridRef.current) {
            gridRef.current.sizeColumnsToFit();
        }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);
  return (
    <div className="grid-container">
      {loading && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}
      <div className="ag-theme-alpine" style={{ height: 800, width: tableWidth }}>
        <AgGridReact
          className="no-scrollbar"
          rowData={rowData}
          onGridReady={onGridReady}
          gridOptions={defaultGridOptions}
          columnDefs={combinedColumnDefs}
          defaultColDef ={{
            flex:1
          }}
        />
      </div>
    </div>
  );
};

export default Table;
