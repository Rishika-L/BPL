import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

const PaginationWithCustomControls = () => {
  const [rowData] = useState([...Array(100).keys()].map(i => ({ id: i + 1, name: `Name ${i + 1}`, age: 20 + (i % 10) })));
  const [columnDefs] = useState([{ field: "id" }, { field: "name" }, { field: "age" }]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  const onPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const onNextPage = () => setCurrentPage((prev) => (prev * pageSize < rowData.length ? prev + 1 : prev));

  const paginatedRows = rowData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={paginatedRows} columnDefs={columnDefs} domLayout="autoHeight" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <button onClick={onPrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <select onChange={onPageSizeChange} value={pageSize}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <span>
          Page {currentPage} of {Math.ceil(rowData.length / pageSize)}
        </span>
        <button onClick={onNextPage} disabled={currentPage * pageSize >= rowData.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationWithCustomControls;
