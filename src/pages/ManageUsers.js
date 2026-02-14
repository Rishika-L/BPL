import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import TopBarActions from "../component/TopBarActions";
import AgTable from "../Components/Table/AgTable";

const ManageUsers = () => {
  const navigate = useNavigate();

  const [activeTab] = useState("users");
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("ALL");
  const [role, setRole] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(25);

  // ================= LOAD USERS =================
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (storedUsers.length === 0) {
      const sampleUsers = [
        {
          id: 1,
          firstName: "Rishika",
          lastName: "R",
          phone: "9876543210",
          email: "rishika@test.com",
          gender: "Female",
          role: "Admin",
          createdOn: "2026-02-14",
          status: true,
        },
      ];

      setUsers(sampleUsers);
      localStorage.setItem("users", JSON.stringify(sampleUsers));
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

  // ================= PAGINATION =================
  const totalRecords = filteredUsers.length;
  const totalPages = Math.ceil(totalRecords / perPage) || 1;

  const startIndex = (activePage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const startCount = totalRecords === 0 ? 0 : startIndex + 1;
  const endCount = Math.min(endIndex, totalRecords);

  // ================= COLUMN DEFINITIONS =================
 const columnDefs = [

  // STATUS FIRST
  {
    headerName: "Status",
    field: "status",
    cellRenderer: (params) => (
      <div className="flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full ${
            params.value ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
        <span>{params.value ? "Active" : "Inactive"}</span>
      </div>
    ),
    width: 120,
  },

  {
    headerName: "Profile Image",
    cellRenderer: (params) =>
      params.data.profileImage ? (
        <img
          src={params.data.profileImage}
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      ),
    width: 90,
  },

  { headerName: "User ID", field: "id" },

  {
    headerName: "User Name",
    field: "firstName",
    cellRenderer: (params) => (
      <span className="text-blue-600 cursor-pointer font-medium">
        {params.value}
      </span>
    ),
  },

  { headerName: "Gender", field: "gender" },
  { headerName: "Phone No.", field: "phone" },
  { headerName: "Email", field: "email" },
  { headerName: "Role Name", field: "role" },
  { headerName: "Created on", field: "createdOn" },

  {
    headerName: "Action",
    cellRenderer: () => (
      <div className="cursor-pointer ml-7 text-xl">⋮</div>
    ),
    width: 80,
  },
];


  const handlePageChange = (page) => setActivePage(page);
  const changeActivepage = (page) => page !== "..." && setActivePage(page);

  const handlePerPageChange = (newPerPage) => {
    setPerPage(Number(newPerPage));
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
                  per_page: perPage,
                  total_count: totalRecords,
                  from: startCount,
                  to: endCount,
                }}
                pagination={true}
                onPerPageChange={handlePerPageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
