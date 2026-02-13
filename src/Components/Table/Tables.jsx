import React, {
    useCallback,
    useMemo,
    useRef,
    useState,
    StrictMode,
  } from "react";
  import { createRoot } from "react-dom/client";
  import { AgGridReact } from "ag-grid-react";
  import {
    ClientSideRowModelModule,
    ModuleRegistry,
    RowSelectionModule,
    ValidationModule,
    createGrid,
  } from "ag-grid-community";
  
  ModuleRegistry.registerModules([
    RowSelectionModule,
    ClientSideRowModelModule,
   
    ValidationModule /* Development Only */,
  ]);
  
  const Tables = () => {
    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const [rowData, setRowData] = useState(
        [
            {
            "athlete": "Natalie Coughlin",
            "age": 25,
            "country": "United States",
            "year": 2008,
            "date": "24/08/2008",
            "sport": "Swimming",
            "gold": 1,
            "silver": 2,
            "bronze": 3,
            "total": 6
            },
            {},
            {
            "athlete": "Alicia Coutts",
            "age": 24,
            "country": "Australia",
            "year": 2012,
            "date": "12/08/2012",
            "sport": "Swimming",
            "gold": 1,
            "silver": 3,
            "bronze": 1,
            "total": 5
            },
            {
            "athlete": "Missy Franklin",
            "age": 17,
            "country": null,
            "year": 2012,
            "date": "12/08/2012",
            "sport": "Swimming",
            "gold": 4,
            "silver": 0,
            "bronze": 1,
            "total": 5
            },
            {
            "athlete": "Ryan Lochte",
            "age": null,
            "country": "United States",
            "year": 2012,
            "date": null,
            "sport": "Swimming",
            "gold": 2,
            "silver": 2,
            "bronze": 1,
            "total": 5
            },
            {
            "athlete": "Allison Schmitt",
            "age": 22,
            "country": "United States",
            "year": 2012,
            "date": "12/08/2012",
            "sport": "Swimming",
            "gold": 3,
            "silver": 1,
            "bronze": 1,
            "total": 5
            },
            {
            "athlete": "Natalie Coughlin",
            "age": 21,
            "country": "United States",
            "year": 2004,
            "date": "29/08/2004",
            "sport": "Swimming",
            "gold": 2,
            "silver": 2,
            "bronze": 1,
            "total": 5
            },
            {
            "athlete": "Dara Torres",
            "age": 33,
            "country": "United States",
            "year": 2000,
            "date": "01/10/2000",
            "sport": "Swimming",
            "gold": 2,
            "silver": 0,
            "bronze": 3,
            "total": 5
            },
            {
            "athlete": "Cindy Klassen",
            "age": null,
            "country": "Canada",
            "year": 2006,
            "date": "26/02/2006",
            "sport": "Speed Skating",
            "gold": 1,
            "silver": 2,
            "bronze": 2,
            "total": 5
            }]
    );
    const [columnDefs, setColumnDefs] = useState([
      { field: "athlete", minWidth: 150 },
      { field: "age", maxWidth: 90 },
      { field: "country", minWidth: 150 },
      { field: "year", maxWidth: 90 },
      { field: "date", minWidth: 150 },
      { field: "sport", minWidth: 150 },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
      { field: "total" },
    ]);
    const defaultColDef = useMemo(() => {
      return {
        flex: 1,
        minWidth: 100,
      };
    }, []);
    const rowSelection = useMemo(() => {
      return {
        mode: "multiRow",
      };
    }, []);
  
    // const onGridReady = useCallback((params) => {
    //   fetch("https://www.ag-grid.com/example-assets/small-olympic-winners.json")
    //     .then((resp) => resp.json())
    //     .then((data) => setRowData(data));
    // }, []);
    const onGridReady = ()=>{}
    return (
      <div style={containerStyle}>
        <div style={gridStyle}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowSelection={rowSelection}
            onGridReady={onGridReady}
          />
        </div>
      </div>
    );
  };
  

  export default Tables;