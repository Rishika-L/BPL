import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./component/Login";
import ManageUsers from "./pages/ManageUsers";
import NewUser from "./pages/NewUser";
import UpdateUser from "./pages/UpdateUser";
import ManageProducts from "./pages/ManageProducts";
import AddProduct from "./pages/AddProduct";


function App() {
  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem("users");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed)
        ? parsed.filter(u => u && u.id)
        : [];
    } catch {
      return [];
    }
  });

  //LOCAL STORAGE 
  useEffect(() => {
    const safeUsers = users.filter(u => u && u.id);
    localStorage.setItem("users", JSON.stringify(safeUsers));
  }, [users]);

  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* USERS */}
        <Route
          path="/users"
          element={<ManageUsers users={users} setUsers={setUsers} />}
        />

        <Route
          path="/users/new"
          element={<NewUser setUsers={setUsers} />}
        />

        <Route
          path="/users/update/:id"
          element={<UpdateUser users={users} setUsers={setUsers} />}
        />

        
        {/* Products */}
        <Route
          path="/manage-products" 
          element={<ManageProducts />}
        />

        
        <Route path="/add-product" element={<AddProduct />} />
         
         
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



