import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaCar } from "react-icons/fa";
import API from "../api/axios";

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


      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/");


    } catch (error) {

      alert(
        error.response?.data?.message || "Login Failed"
      );

    }
  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">


      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8">


        {/* Logo */}

        <div className="flex justify-center mb-5">

          <div className="bg-blue-600 text-white p-4 rounded-full">

            <FaCar size={35}/>

          </div>

        </div>


        <h1 className="text-3xl font-bold text-center text-gray-800">

          Admin Login

        </h1>


        <p className="text-center text-gray-500 mt-2 mb-7">

          Manage your Used Car Marketplace

        </p>



        <form 
        onSubmit={handleSubmit}
        className="space-y-5">


          {/* Email */}

          <div>

            <label className="block text-gray-700 font-semibold mb-2">

              Email

            </label>


            <div className="relative">


              <FaEnvelope 
              className="absolute left-4 top-4 text-gray-400"
              />


              <input

                type="email"

                name="email"

                value={email}

                onChange={handleChange}

                placeholder="Enter your email"

                className="
                w-full
                pl-11
                pr-4
                py-3
                border
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "

                required

              />


            </div>

          </div>




          {/* Password */}

          <div>


            <label className="block text-gray-700 font-semibold mb-2">

              Password

            </label>


            <div className="relative">


              <FaLock

              className="absolute left-4 top-4 text-gray-400"

              />


              <input

                type="password"

                name="password"

                value={password}

                onChange={handleChange}

                placeholder="Enter your password"

                className="
                w-full
                pl-11
                pr-4
                py-3
                border
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "

                required

              />


            </div>


          </div>




          <button

            type="submit"

            className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-xl
            font-semibold
            text-lg
            transition
            duration-300
            shadow-md
            "

          >

            Login

          </button>



        </form>



        <p className="text-center mt-6 text-gray-600">


          Don't have an account?


          <Link

            to="/admin/register"

            className="
            text-blue-600
            ml-2
            font-semibold
            hover:underline
            "

          >

            Register

          </Link>


        </p>



      </div>


    </div>

  );

};


export default Login;