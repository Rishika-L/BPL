import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./component/Login";
import ManageUsers from "./pages/ManageUsers";
import NewUser from "./pages/NewUser";
import UpdateUser from "./pages/UpdateUser";
import ManageProducts from "./pages/ManageProducts";
import AddProduct from "./pages/AddProduct";


import UserView from "./pages/UserView";

function App() {
  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem("users");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed)
        ? parsed.filter((u) => u && u.id)
        : [];
    } catch {
      return [];
    }
  });


  useEffect(() => {
    const safeUsers = users.filter((u) => u && u.id);
    localStorage.setItem("users", JSON.stringify(safeUsers));
  }, [users]);

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* USERS LIST */}
        <Route
          path="/users"
          element={<ManageUsers users={users} setUsers={setUsers} />}
        />

        {/* CREATE USER */}
        <Route
          path="/users/new"
          element={<NewUser setUsers={setUsers} />}
        />

        {/* UPDATE USER */}
        <Route
          path="/users/update/:id"
          element={<UpdateUser users={users} setUsers={setUsers} />}
        />
<Route
  path="/users/view"
  element={<UserView />}
/>

        {/* PRODUCTS */}
        <Route
          path="/manage-products"
          element={<ManageProducts />}
        />

        <Route
          path="/add-product"
          element={<AddProduct />}
        />

        {/* DEFAULT */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;