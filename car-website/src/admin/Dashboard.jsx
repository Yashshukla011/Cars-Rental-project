import { useEffect, useState } from "react";
import API from "../api/axios";
import { FaCar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await API.get("/cars");
      setCars(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
const navigate = useNavigate();

const logout = () => {
  localStorage.removeItem("token");

  navigate("/admin/login");
};
return (
  <div className="min-h-screen bg-gray-900">

    {/* Header */}

    <div className="bg-gray-900 shadow-md px-8 py-5 flex justify-between items-center">

      <h1 className="text-4xl font-bold text-gray-800">
        Admin Dashboard
      </h1>

      <button
        onClick={logout}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
      >
        Logout
      </button>

    </div>

    <div className="p-8">

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition">

          <FaCar className="text-5xl text-blue-600 mb-4" />

          <h2 className="text-4xl font-bold">
            {cars.length}
          </h2>

          <p className="text-gray-500 mt-2">
            Total Cars
          </p>

        </div>

        <div className="bg-green-500 rounded-xl shadow-lg p-6 text-white">

          <h2 className="text-2xl font-semibold">
            Latest Car
          </h2>

          <h3 className="text-3xl mt-4 font-bold">
            {cars.length > 0 ? cars[cars.length - 1].company : "No Cars"}
          </h3>

          <p className="mt-2">
            {cars.length > 0 ? cars[cars.length - 1].model : ""}
          </p>

        </div>

        <div className="bg-yellow-400 rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-semibold">
            Average Price
          </h2>

          <h1 className="text-3xl mt-4 font-bold">
            ₹
            {cars.length
              ? Math.floor(
                  cars.reduce((sum, car) => sum + Number(car.price), 0) /
                    cars.length
                ).toLocaleString()
              : 0}
          </h1>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-8">

        <Link
          to="/admin/add-car"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          + Add Car
        </Link>

        <Link
          to="/admin/view-cars"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          View Cars
        </Link>

      </div>

      {/* Recent Cars */}

      <div className="bg-white mt-10 rounded-xl shadow-lg overflow-hidden">

        <div className="bg-blue-600 text-white px-6 py-4">

          <h2 className="text-2xl font-bold">
            Recently Added Cars
          </h2>

        </div>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="py-4">Image</th>
              <th>Company</th>
              <th>Model</th>
              <th>Price</th>
              <th>Fuel</th>
              <th>Year</th>

            </tr>

          </thead>

          <tbody>

            {cars
              .slice()
              .reverse()
              .slice(0, 5)
              .map((car) => (

                <tr
                  key={car._id}
                  className="border-b text-center hover:bg-gray-50"
                >

                  <td className="py-3">

                    <img
                      src={car.imageUrl}
                      alt={car.company}
                      className="w-24 h-16 object-cover rounded mx-auto"
                    />

                  </td>

                  <td>{car.company}</td>

                  <td>{car.model}</td>

                  <td>₹ {Number(car.price).toLocaleString()}</td>

                  <td>{car.fuelType}</td>

                  <td>{car.year}</td>

                </tr>

              ))}

          </tbody>

        </table>

      </div>

    </div>

  </div>
);
};

export default Dashboard;