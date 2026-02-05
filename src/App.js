import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Users from "./component/User";
import NewUser from "./pages/NewUser";
import NewUserUpdate from "./pages/NewUserUpdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/new" element={<NewUser />} />
        <Route path="/users/update" element={<NewUserUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
