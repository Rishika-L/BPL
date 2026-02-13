import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import TopBarActions from "../component/TopBarActions";
import AgTable from "../Components/Table/AgTable";

const ManageUsers = () => {
  const navigate = useNavigate();

  // ================= STATE =================
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("ALL");
  const [role, setRole] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  // Pagination
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(25);

  // ================= LOAD USERS =================
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // If empty, add sample users for testing
    if (storedUsers.length === 0) {
      const sampleUsers = [
        { firstName: "Rishika", email: "rishika@test.com", gender: "Female", role: "Admin", status: true },
        { firstName: "Arun", email: "arun@test.com", gender: "Male", role: "User", status: false },
        { firstName: "Priya", email: "priya@test.com", gender: "Female", role: "User", status: true },
      ];
      setUsers(sampleUsers);
    } else {
      setUsers(storedUsers);
    }
  }, []);

  // ================= FILTER USERS =================
  const filteredUsers = users.filter((u) => {
    return (
      (search === "" ||
        u.firstName?.toLowerCase().includes(search.toLowerCase()) ||
        u.email?.toLowerCase().includes(search.toLowerCase())) &&
      (gender === "ALL" || u.gender === gender) &&
      (role === "ALL" || u.role === role) &&
      (status === "ALL" ||
        (status === "Active" ? u.status === true : u.status === false))
    );
  });

  // ================= PAGINATION CALC =================
  const totalRecords = filteredUsers.length;
  const totalPages = Math.ceil(totalRecords / perPage) || 1;

  const startIndex = (activePage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const startCount = totalRecords === 0 ? 0 : startIndex + 1;
  const endCount = Math.min(endIndex, totalRecords);

  // ================= TABLE COLUMNS =================
  const columnDefs = [
    { headerName: "First Name", field: "firstName" },
    { headerName: "Email", field: "email" },
    { headerName: "Gender", field: "gender" },
    { headerName: "Role", field: "role" },
    {
      headerName: "Status",
      field: "status",
      valueFormatter: (params) => (params.value ? "Active" : "Inactive"),
    },
  ];

  // ================= PAGE HANDLERS =================
  const handlePageChange = (page) => setActivePage(page);
  const changeActivepage = (page) => page !== "..." && setActivePage(page);
  const handlePerPageChange = (newPerPage) => {
    setPerPage(newPerPage);
    setActivePage(1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-4">
          <h2 className="text-xl font-semibold text-[#272757] mt-20">
            Manage Users
          </h2>

          {/* ================= TABS ================= */}
          <div className="flex gap-6 border-b mt-6">
            <button
              onClick={() => setActiveTab("users")}
              className={`pb-2 ${
                activeTab === "users"
                  ? "border-b-2 border-[#272757] text-[#272757] font-medium"
                  : "text-gray-500"
              }`}
            >
              Users
            </button>

            <button
              onClick={() => setActiveTab("groups")}
              className={`pb-2 ${
                activeTab === "groups"
                  ? "border-b-2 border-[#272757] text-[#272757] font-medium"
                  : "text-gray-500"
              }`}
            >
              Groups
            </button>
          </div>

          {/* ================= FILTER BAR ================= */}
          <TopBarActions
            search={search}
            setSearch={setSearch}
            gender={gender}
            setGender={setGender}
            role={role}
            setRole={setRole}
            status={status}
            setStatus={setStatus}
            onCreate={() => navigate("/users/new")}
            onClear={() => {
              setSearch("");
              setGender("ALL");
              setRole("ALL");
              setStatus("ALL");
              setActivePage(1);
            }}
          />

          {/* ================= USERS TABLE ================= */}
          {activeTab === "users" && (
            <div className="mt-6">
              <AgTable
                rowData={currentUsers}
                columnDefs={columnDefs}
                activePage={activePage}
                changeActivepage={changeActivepage}
                handlePageChange={handlePageChange}
                paginationData={{
                  total_page: totalPages,
                  total_count: totalRecords,
                  from: startCount,
                  to: endCount,
                }}
                onPerPageChange={handlePerPageChange}
              />
            </div>
          )}

          {/* ================= GROUPS TAB ================= */}
          {activeTab === "groups" && (
            <div className="mt-10 text-gray-500 text-sm">
              Groups table coming soon...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
