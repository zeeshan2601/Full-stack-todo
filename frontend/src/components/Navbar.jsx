import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useForm } from 'react-hook-form'
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const navigate = useNavigate();
  const clearToken = useAuthStore((state) => state.clearToken);
  const token = useAuthStore((state) => state.token);
  function handleLogout() {
    clearToken();
    //console.log('token', token);
    navigate("/login");
  }
  return (
    <div>
      <nav className="flex justify-between bg-gray-800 text-white p-4">
        <div className="text-2xl font-bold"> ToDo-App </div>
        <ul className="flex justify-between bg-gray-800 text-white px-4 gap-20">
          <li>
            <Link
              to="/home"
              className="hover:text-gray-400 transition-colors duration-200 text-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-400 transition-colors duration-200 text-xl"
            >
              About
            </Link>
          </li>
          <li>
            <button onClick={handleLogout}>logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
