import React, { useEffect, useState } from "react";
import DoubleLeftArrow from "../../../assets/customizedIcon/DoubleLeftArrowIcon";
import LeftArrowIcon from "../../../assets/customizedIcon/LeftArrowIcon";
import DoubleRightArrowIcon from "../../../assets/customizedIcon/DoubleRightArrowIcon";
import RightArrowIcon from "../../../assets/customizedIcon/RightArrowIcon";
import RedoIcon from "../../../assets/customizedIcon/RedoIcon";
import "./Pagination.css";

export default function Pagination({
  startCount = 1,
  endCount = 12,
  totalRecords = 80,
  activePage = 10,
  totalPages = 1,
  changeActivepage,
  handlePageChange,
  perPage = 25, // <-- New prop for per page count
  onPerPageChange, // <-- Callback function to update records per page
  wrap = false, // <-- New prop to wrap pagination
}) {
  const [pageList, setPageList] = useState([]);
  const [perPageCount, setPerPageCount] = useState(perPage);



  useEffect(() => {
    const generatePageList = () => {
      if (totalPages <= 6) {
        // Show all pages if totalPages <= 6
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      } else {
        const pages = [];
        if (activePage <= 3) {
          // Show first 5 pages, ellipsis, and last page
          pages.push(1, 2, 3, 4, 5, "...", totalPages);
        } else if (activePage >= totalPages - 2) {
          // Show first page, ellipsis, and last 5 pages
          pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
          // Show first page, ellipsis, activePage ± 1, ellipsis, and last page
          pages.push(1, "...", activePage - 1, activePage, activePage + 1, "...", totalPages);
        }
        return pages;
      }
    };

    setPageList(generatePageList());
  }, [totalPages, activePage]);

  // const handlePageChange = (page) => {
  //   if (page !== "..." && onPageChange) {
  //     onPageChange(page);
  //   }
  // };

  
  const handlePerPageChange = (event) => {
    const newPerPage = parseInt(event.target.value, 10);
    setPerPageCount(newPerPage);
    if (onPerPageChange) {
      onPerPageChange(newPerPage); // Notify parent about the change
    }
  };

  return (
    <div className={`${wrap?'h-22':'h-11'} border border-secondary-400 rounded-b-lg flex ${wrap?"flex-wrap":''} justify-between items-center px-2 gap-3`}>
      <div className={`flex ${wrap?"flex-wrap":''}  gap-3 items-center`}>
        <button
          onClick={() => handlePageChange(1)}
          disabled={activePage === 1}
          className={activePage === 1 ? "disabled-class" : ""}
        >
          <DoubleLeftArrow
            height="16"
            width="16"
            stroke={activePage === 1 ? "#A9A9BC" : "#272757"}
          />
        </button>
        <button
          onClick={() => handlePageChange(Math.max(1, activePage - 1))}
          disabled={activePage === 1}
          className={activePage === 1 ? "disabled-class" : ""}
        >
          <LeftArrowIcon
            height="16"
            width="16"
            stroke={activePage === 1 ? "#A9A9BC" : "#272757"}
          />
        </button>
        <div className="flex gap-2">
          {pageList.map((page, index) => (
            <button
              key={index}
              onClick={(params) => changeActivepage(page)}
              className={`px-2 py-1 rounded text-md font-medium ${
                activePage === page
                  ? "bg-primary-400 text-white rounded-full"
                  : "bg-gray-200"
              }`}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(Math.min(totalPages, activePage + 1))}
          disabled={activePage === totalPages}
          className={activePage === totalPages ? "disabled-class" : ""}
        >
          <RightArrowIcon
            height="16"
            width="16"
            stroke={activePage === totalPages ? "#A9A9BC" : "#272757"}
          />
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={activePage === totalPages}
          className={activePage === totalPages ? "disabled-class" : ""}
        >
          <DoubleRightArrowIcon
            height="16"
            width="16"
            stroke={activePage === totalPages ? "#A9A9BC" : "#272757"}
          />
        </button>
        <select className="w-12 ml-4 bg-transparent" value={perPageCount} onChange={handlePerPageChange}>
          {[25, 50, 100].map((count) => (
            <option key={count} value={count} className="bg-transparent">
              {count}
            </option>
          ))}
        </select>
        <p className="text-primary-400">Records per page</p>
      </div>
      <div className="flex gap-3">
        <p className="text-primary-400 text-md">
          {startCount} - {endCount} of {totalRecords} Records
        </p>
        <RedoIcon width="16" height="16" />
      </div>
    </div>
  );
}
