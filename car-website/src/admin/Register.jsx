import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { FaUser, FaEnvelope, FaLock, FaCar } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const { name, email, password, role } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/admin/register", {
        name,
        email,
        password,
        role,
      });

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      navigate("/admin/login");

    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

      {/* Left Side Image */}

      <div className="hidden lg:block relative">

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf23rjBwCh-T_VZIbkJlPmLqxGo9hk03QdIc4WTRkoB6IO9ETK03Dj4VE&s=10"
          alt="Car"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

          <div className="text-center text-white px-8">

            <FaCar className="mx-auto text-6xl mb-5" />

            <h1 className="text-4xl font-bold mb-4">
              Used Car Marketplace
            </h1>

            <p className="text-lg">
              Create your  account and start managing your inventory.
            </p>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="p-10 lg:p-14">

        <div className="flex justify-center mb-6">

          <div className="bg-green-600 p-4 rounded-full text-white">

            <FaCar size={35} />

          </div>

        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800">
           Register
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Create a new  account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}

          <div>

            <label className="font-semibold text-gray-700">
              Name
            </label>

            <div className="relative mt-2">

              <FaUser className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
                className="w-full pl-12 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

          </div>

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
                placeholder="Enter Email"
                required
                className="w-full pl-12 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-green-500"
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
                placeholder="Enter Password"
                required
                className="w-full pl-12 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>
 <div>
  <label className="font-semibold text-gray-700">
    Role
  </label>

  <select
    name="role"
    value={role}
    onChange={handleChange}
    className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-green-500"
  >
    <option value="user">User</option>
    {/* <option value="admin">Admin</option> */}
  </select>
</div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-lg transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-8 text-gray-600">

          Already have an account?

          <Link
            to="/admin/login"
            className="ml-2 text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  </div>
);
};

export default Register;