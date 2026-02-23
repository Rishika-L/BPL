import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import TopBarActions from "../component/TopBarActions";
import AgTable from "../Components/Table/AgTable";
import { Menu } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const ManageUsers = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [activeUserTab, setActiveUserTab] = useState("users");

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("ALL");
  const [role, setRole] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(25);

  
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

//filter
  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      return (
        (search === "" ||
          u.firstName?.toLowerCase().includes(search.toLowerCase()) ||
          u.lastName?.toLowerCase().includes(search.toLowerCase()) ||
          u.email?.toLowerCase().includes(search.toLowerCase())) &&
        (gender === "ALL" || u.gender === gender) &&
        (role === "ALL" || u.role === role) &&
        (status === "ALL" ||
          (status === "Active" ? u.status === true : u.status === false))
      );
    });
  }, [users, search, gender, role, status]);

// reset in the fields
  useEffect(() => {
    setActivePage(1);
  }, [search, gender, role, status]);

 //delete
  const handleDelete = (userId) => {
    const updatedUsers = users.filter((u) => u.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

//edit
  const handleEdit = (user) => {
    const editIndex = users.findIndex((u) => u.id === user.id);

    navigate("/users/new", {
      state: {
        editData: user,
        editIndex: editIndex,
      },
    });
  };

//pagination
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


  

//table columns data passing 
  const columnDefs = [
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
      width: 100,
    },

    { headerName: "User ID", field: "id", width: 110 },

    {
      headerName: "Name",
      field: "firstName",
      cellRenderer: (params) => {
        const first = params.data?.firstName || "";
        const last = params.data?.lastName || "";
        return (
          <span className="text-blue-600 font-medium cursor-pointer">
            {first} {last}
          </span>
        );
      },
      minWidth: 160,
    },

    { headerName: "Gender", field: "gender", width: 110 },
    { headerName: "Phone No.", field: "phone", width: 130 },

    {
      headerName: "Email",
      field: "email",
      flex: 1,
      minWidth: 220,
    },

    { headerName: "Group Name", field: "group", width: 150 },
    { headerName: "Role Name", field: "role", width: 150 },
    { headerName: "Created on", field: "createdOn", width: 130 },

    {
      headerName: "Status",
      field: "status",
      width: 130,
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
    },

    {
      headerName: "Action",
      width: 100,
      cellRenderer: (params) => {
        const user = params.data;

        return (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="p-2 hover:bg-gray-200 rounded">
              <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-50">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleEdit(user)}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block w-full px-4 py-2 text-sm text-blue-600`}
                  >
                    Edit
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleDelete(user.id)}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block w-full px-4 py-2 text-sm text-red-600`}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        );
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6">
          <h2 className="text-xl font-semibold text-[#272757] mt-20">
            Manage Users
          </h2>

          {/*TABS */}

<div className="flex gap-8 border-b border-[#D5D5EC] mt-6">
  {[
    { id: "users", label: "Users" },
    { id: "groups", label: "Groups" },
  ].map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveUserTab(tab.id)}
      className={`relative pb-3 text-sml font-medium transition-all ${
        activeUserTab === tab.id
          ? "text-[#272757]"
          : "text-[#6B7280]"
      }`}
    >
      {tab.label}

      {activeUserTab === tab.id && (
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#272757]"></span>
      )}
    </button>
  ))}
</div>
          {/* FILTER BAR  */}
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

          {/*  TABLE*/}
          <div className="mt-6">
            {activeUserTab === "users" && (
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
            )}

            {activeUserTab === "groups" && (
              <div className="text-gray-500 text-center py-10">
                Group Table 
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;