import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../images/login.png";
import loginlogo from "../images/login logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
     
      if (/^\d*$/.test(value)) {
        setForm({ ...form, [name]: value });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const validUserId = "12345";
  const validPassword = "admin@12345";

  if (
    form.username === validUserId &&
    form.password === validPassword
  ) {
    navigate("/users");
  } else {
    alert("Invalid User ID or Password");
  }
};


  return (
    <div className="w-screen h-screen flex bg-white overflow-hidden">
     
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <div className="w-full max-w-sm px-6">
          <img
            src={loginlogo}
            alt="logo"
            className="w-80 h-50 object-contain mt-20"
          />

          <h2 className="text-2xl font-bold text-[#272757] mt-10">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            {/* USER ID */}
            <div>
              <label className="block text-sm font-semibold text-[#272757] mb-3">
                User ID
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter User ID"
                value={form.username}
                onChange={handleChange}
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-full border border-gray-300 rounded px-3 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-700"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-semibold text-[#272757] mb-3">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-700"
              />
            </div>

            <div className="text-right text-sm text-[#272757] cursor-pointer underline">
              Forgot Password?
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-900 text-white py-3 rounded hover:bg-indigo-800 transition"
            >
              Login
            </button>

            <div className="pt-20 text-sm text-[#686889] text-center">
              <span className="cursor-pointer hover:underline">About Us</span>
              <span className="mx-2">|</span>
              <span className="cursor-pointer hover:underline">
                Terms of Service
              </span>
              <span className="mx-2">|</span>
              <span className="cursor-pointer hover:underline">
                Privacy Notice
              </span>
            </div>
          </form>
        </div>
      </div>

 
      <div className="w-3/4 hidden sm:flex">
        <img
          src={login}
          alt="login visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
