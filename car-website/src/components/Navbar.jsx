import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  FaCar,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
const [role, setRole] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

useEffect(() => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  setIsLogin(!!token);
  setRole(userRole || "");
}, []);
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("admin");

  setIsLogin(false);
  setRole("");

  navigate("/admin/login");
};

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-bold text-blue-700"
        >
          <FaCar />
          AutoDrive
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

          <li>
            <Link to="/" className="hover:text-blue-600 duration-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/cars" className="hover:text-blue-600 duration-300">
              Buy Car
            </Link>
          </li>

          <li>
            <Link to="/sell-car" className="hover:text-blue-600 duration-300">
              Sell Car
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600 duration-300">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600 duration-300">
              Contact
            </Link>
          </li>

       {isLogin && role === "admin" && (
  <li>
    <Link
      to="/admin/dashboard"
      className="text-yellow-600 font-semibold hover:text-yellow-500"
    >
      Dashboard
    </Link>
  </li>
)}
{isLogin && role === "user" && (
  <Link
    to="/user/dashboard"
    className="text-green-600 font-semibold hover:text-green-500"
  >
    My Dashboard
  </Link>
)}
        </ul>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-4">
<div className="relative">
  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

  <input
    type="text"
    placeholder="Search Cars..."
    value={search}
    onChange={(e) => {
      const value = e.target.value;
      setSearch(value);
      navigate(`/cars?search=${value}`);
    }}
    className="
      w-64
      pl-11
      pr-4
      py-2
      border
      border-gray-300
      rounded-full
      outline-none
      focus:border-blue-600
      focus:ring-2
      focus:ring-blue-300
      transition
    "
  />
</div>

          {!isLogin ? (
            <>
              <Link
                to="/admin/login"
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/admin/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full"
              >
                Register
              </Link>

          
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 text-blue-700">
                <FaUserCircle size={30} />
                <span>
  {role === "admin" ? "Admin" : "User"}
</span>
              </div>

              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Icon */}

        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">

          <ul className="flex flex-col p-6 gap-5 text-gray-700">

            <Link to="/">Home</Link>

            <Link to="/cars">Buy Car</Link>

            <Link to="/sell-car">Sell Car</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

            {!isLogin ? (
              <>
                <Link to="/admin/login">Login</Link>
                <Link to="/admin/register">Register</Link>
                <Link to="/admin/login">Admin Login</Link>
              </>
            ) : (
              <>
{role === "admin" && (
  <Link to="/admin/dashboard">
    Admin Dashboard
  </Link>
)}

{role === "user" && (
  <Link to="/user/dashboard">
    My Dashboard
  </Link>
)}
                <button
                  onClick={logout}
                  className="bg-red-600 text-white rounded-lg py-2"
                >
                  Logout
                </button>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;