import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import TopBarActions from "../component/TopBarActions";
import AgTable from "../Components/Table/AgTable";

const ManageUsers = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("ALL");
  const [role, setRole] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(25);

  // ✅ Load Users from LocalStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
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

  // ================= DELETE USER =================
  const handleDelete = (rowIndex) => {
    const updatedUsers = users.filter((_, i) => i !== rowIndex);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // ================= EDIT USER =================
  const handleEdit = (rowIndex) => {
    navigate("/users/new", {
      state: {
        editData: users[rowIndex],
        editIndex: rowIndex,
      },
    });
  };

  // ================= PAGINATION =================
  const totalRecords = filteredUsers.length;
  const totalPages = Math.ceil(totalRecords / perPage) || 1;

  const startIndex = (activePage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const startCount = totalRecords === 0 ? 0 : startIndex + 1;
  const endCount = Math.min(endIndex, totalRecords);

  const handlePageChange = (page) => setActivePage(page);

  const handlePerPageChange = (newPerPage) => {
    setPerPage(Number(newPerPage));
    setActivePage(1);
  };

  // ================= TABLE COLUMNS =================
  const columnDefs = [
    {
      headerName: "Profile Image",
      cellRenderer: (params) =>
        params.data?.profileImage ? (
          <img
            src={params.data.profileImage}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        ),
      width: 100,
    },

    { headerName: "User ID", field: "id" },

    {
      headerName: "User Name",
      field: "firstName",
      cellRenderer: (params) => (
        <span className="text-blue-600 font-medium cursor-pointer">
          {params.value}
        </span>
      ),
    },

    { headerName: "Gender", field: "gender" },
    { headerName: "Phone No.", field: "phone" },

    {
      headerName: "Email",
      field: "email",
      flex: 1,
      minWidth: 220,
    },

    { headerName: "Role Name", field: "role" },
    { headerName: "Created on", field: "createdOn" },

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
      width: 130,
    },

    {
      headerName: "Action",
      width: 160,
      cellRenderer: (params) => (
        <div className="flex gap-4">
          <button
            onClick={() => handleEdit(params.node.rowIndex)}
            className="text-blue-600 text-sm font-medium"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(params.node.rowIndex)}
            className="text-red-600 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

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

          <div className="mt-6">
            <AgTable
              rowData={currentUsers}
              columnDefs={columnDefs}
              activePage={activePage}
              handlePageChange={handlePageChange}
              pagination={true}
              paginationData={{
                total_page: totalPages,
                per_page: perPage,
                total_count: totalRecords,
                from: startCount,
                to: endCount,
              }}
              onPerPageChange={handlePerPageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
