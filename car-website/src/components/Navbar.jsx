import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    setIsLogin(false);

    navigate("/admin/login");

  };

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}

        <Link
          to=""
          className="text-3xl font-bold text-blue-400"
        >
          🚗 Car Rental
        </Link>

        {/* Menu */}

        <ul className="flex items-center gap-8 text-lg">

          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>

          <li>
            <Link to="/cars" className="hover:text-blue-400">
              Cars
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>

          {isLogin && (
            <>
              <li>
                <Link
                  to="/admin/dashboard"
                  className="hover:text-yellow-300"
                >
                  Dashboard
                </Link>
              </li>

            </>
          )}

        </ul>

        {/* Right Side */}

        <div className="flex gap-3">

          {!isLogin ? (

            <Link
              to="/admin/login"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
            >
              Admin Login
            </Link>

          ) : (

            <>
              <span className="bg-gray-700 px-4 py-2 rounded-lg">
                Admin
              </span>

              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
              >
                Logout
              </button>
            </>

          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;