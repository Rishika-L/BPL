import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../images/login.png";
import loginlogo from "../images/login logo.png";
import { ArrowRight } from "lucide-react";
import Toast from "../Components/Toast/Toast";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [toast, setToast] = useState({
    show: false,
     message: "",
     type: "success",
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
//login API
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
        login_type: "1",
      }),
    });

    const data = await response.json();

   if (response.ok && data.status === "success") {


  localStorage.setItem("token", data.bearer_token);

  // Save user if available
  if (data.user) {
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  console.log("Saved Token:", data.bearer_token);

  setToast({
    show: true,
    message: "Login Successful",
    type: "success",
  });

  setTimeout(() => {
    navigate("/users");
  }, 1500);
}

     else {
      setToast({
        show: true,
        message: data.message || "Invalid Credentials",
        type: "error",
      });
    }
  } catch (error) {
    setToast({
      show: true,
      message: "Server Error",
      type: "error",
    });
  }
};

  return (
    <div className="w-screen h-screen flex bg-white overflow-hidden relative">

  {toast.show && toast.message && (
  <Toast
    show={true}
    message={toast.message}
    type={toast.type}
    onClose={() =>
      setToast(prev => ({ ...prev, show: false, message: "" }))
    }
  />
)}

     
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <div className="w-full max-w-sm px-6">

          <img
            src={loginlogo}
            alt="logo"
            className="w-80 object-contain mt-20"
          />

          <h2 className="text-2xl font-bold text-[#272757] mt-10">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 mt-8">

         
            <div>
              <label className="block size-14px font-semibold text-[#272757] mb-3">
                User ID
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter User ID"
                value={form.username}
                onChange={handleChange}
                className="w-full border  border-[#D5D5EC] size-12px text-[#A9A9BC] rounded-md px-3 py-2 pl-4 "
              />
            </div>

            
            <div>
              <label className="block size-14px font-semibold text-[#272757] mb-3">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-[#D5D5EC] size-12px text-[#A9A9BC] rounded-md px-3 py-2 pl-4 "
              />
            </div>

            <div className="text-right size-14px  text-[#272757] cursor-pointer underline">
              Forgot Password?
            </div>

          
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[350px] h-[45px] bg-[#3F3F8D] text-white size-12px py-3 rounded-md
                           hover:bg-[#3e3e85] transition duration-300
                           font-semibold "
              >
                Login
              </button>
            </div>

            <div className="flex items-center justify-center size-14px text-[#272757] font-Roboto cursor-pointer underline">
              <span>Go to Technician Login</span>
              <ArrowRight className="ml-1 w-5 h-5" />
            </div>

            <div className="pt-20 size-12px text-[#686889] text-center">
              About Us  |  Terms of Service  |  Privacy Notice
            </div>

          </form>
        </div>
      </div>

      
      <div className="w-3/4 hidden sm:flex">
        <img
          src={login}
          alt="login "
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;