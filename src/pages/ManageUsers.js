import React, { useEffect, useState, useCallback } from "react";
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

  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  // fetch API get all data
  const fetchUsers = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://127.0.0.1:8000/api/user-list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            
  status: status,
  gender: gender,
  type: role,
  per_page: perPage,
  page: activePage,
  search: search || "",

          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        const usersData = result?.data?.data || [];

        const formattedUsers = usersData.map((user) => ({
          id: user.user_id,
          user_id:user.user_id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          phone: user.phone,
          gender: user.gender,
          group: user.group_name,
          role: user.role_name,
          profileImage: user.user_image,
          createdOn: user.created_on,
          status: Number(user.status),
           dob: user.dob,
  location: user.location,
        }));

        setUsers(formattedUsers);
        setTotalPages(result?.data?.last_page || 1);
        setTotalRecords(result?.data?.total || 0);
      }
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  }, [search, gender, role, status, activePage, perPage]);

  
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

 
  useEffect(() => {
    setActivePage(1);
  }, [search, gender, role, status]);

 //EDIT
   const handleEdit = (user) => {
    const editIndex = users.findIndex((u) => u.id === user.id);

    navigate("/users/new", {
      state: {
        editData: user,
        editIndex: editIndex,
      },
    });
  };

  //DELETE
  const handleDelete = (userId) => {
    const updatedUsers = users.filter((u) => u.id !== userId);
    setUsers(updatedUsers);
  };

// // FORMAL FILTER
//   const filteredUsers = useMemo(() => {
//     return users.filter((u) => {
//       return (
//         (search === "" ||
//           u.firstName?.toLowerCase().includes(search.toLowerCase()) ||
//           u.lastName?.toLowerCase().includes(search.toLowerCase()) ||
//           u.email?.toLowerCase().includes(search.toLowerCase())) &&
//         (gender === "ALL" || u.gender === gender) &&
//         (role === "ALL" || u.role === role) &&
//         (status === "ALL" ||
//           (status === "Active" ? u.status : !u.status))
//       );
//     });
//   }, [users, search, gender, role, status]);

  //  Pagination 
  const startCount =
    totalRecords === 0 ? 0 : (activePage - 1) * perPage + 1;

  const endCount = Math.min(
    activePage * perPage,
    totalRecords
  );

  const handlePageChange = (page) => setActivePage(page);

  const handlePerPageChange = (value) => {
    setPerPage(Number(value));
    setActivePage(1);
  };

  // Table Columns
  const columnDefs = [
    {
      headerName: "Profile Image",
      width: 100,
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
    },
    { headerName: "User ID", field: "User_id", width: 110 },
    {
      headerName: "Name",
      minWidth: 160,
      cellRenderer: (params) => (
        <span className="text-blue-600 font-medium cursor-pointer">
          {params.data?.firstName} {params.data?.lastName}
        </span>
      ),
    },
    { headerName: "Gender", field: "gender", width: 110 },
    { headerName: "Phone No.", field: "phone", width: 130 },
    { headerName: "Email", field: "email", flex: 1, minWidth: 220 },
    { headerName: "Group Name", field: "group", width: 150 },
    { headerName: "Role Name", field: "role", width: 150 },
    { headerName: "Created On", field: "createdOn", width: 130 },
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

          {/* Tabs */}
          <div className="flex gap-8 border-b border-[#D5D5EC] mt-6">
            {[
              { id: "users", label: "Users" },
              { id: "groups", label: "Groups" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveUserTab(tab.id)}
                className={`relative pb-3 text-sml font-medium ${
                  activeUserTab === tab.id
                    ? "text-[#272757]"
                    : "text-gray-500"
                }`}
              >
                {tab.label}
                {activeUserTab === tab.id && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#272757]" />
                )}
              </button>
            ))}
          </div>

          {/* Filters */}
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

          {/* Table */}
          <div className="mt-6">
            {activeUserTab === "users" ? (
              <AgTable
                rowData={users}
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
                changeActivepage={setActivePage}
              />
            ) : (
              <div className="text-center py-10 text-gray-500">
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