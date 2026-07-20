import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaCar } from "react-icons/fa";
import API from "../api/axios";
import loginImage from "../assets/login-car.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/admin/login", {
        email,
        password,
      });

   const userRole = res.data.admin.role;

localStorage.setItem("token", res.data.token);
localStorage.setItem("role", userRole);

alert("Login Successful");

if (userRole === "admin") {
  navigate("/admin/dashboard");
} else {
  navigate("/user/dashboard");
}
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side Image */}

        <div className="hidden lg:block relative">

         <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLEWjC-Hd4WpPkUHnFslUH-qp_VENqS3vYvZJUGoxMU5Zb-Ar3EXKq3c6&s=10"
  alt="Car"
  className="w-full h-full object-cover"
/>

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

            <div className="text-center text-white px-8">

              <FaCar className="mx-auto text-6xl mb-5" />

              <h1 className="text-4xl font-bold mb-4">
                Used Car Marketplace
              </h1>

              <p className="text-lg">
                Manage your cars, customers and sales from one dashboard.
              </p>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="p-10 lg:p-14">

          <div className="flex justify-center mb-6">

            <div className="bg-blue-600 p-4 rounded-full text-white">

              <FaCar size={35} />

            </div>

          </div>

          <h2 className="text-3xl font-bold text-center text-gray-800">
             Login
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Sign in to continue
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Email */}

            <div>

              <label className="font-semibold text-gray-700">
                Email
              </label>

              <div className="relative mt-2">

                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                  className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="font-semibold text-gray-700">
                Password
              </label>

              <div className="relative mt-2">

                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                  className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />

              </div>

            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg transition"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Don't have an account?

            <Link
              to="/admin/register"
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;