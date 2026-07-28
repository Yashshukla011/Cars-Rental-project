import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

import { FaBell } from "react-icons/fa";

import {
  FaUserCircle,
  FaCar,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const UserDashboard = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    fetchMyCars();
      fetchNotifications();

  }, []);
const notificationCount = notifications.length;
  const fetchMyCars = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/cars/my-cars", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCars(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
const fetchNotifications = async () => {
  try {

    const res = await API.get("/notifications");

    setNotifications(res.data.data);

  } catch (error) {

    console.log(error);

  }
};
  const pending = cars.filter(
    (car) => car.status === "Pending"
  ).length;

  const approved = cars.filter(
    (car) => car.status === "Approved"
  ).length;

  const rejected = cars.filter(
    (car) => car.status === "Rejected"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-xl shadow-lg p-8 flex justify-between items-center">

          <div>
            
            <h1 className="text-4xl font-bold">
              Welcome User 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your sell requests here.
            </p>

          </div>
       <Link
  to="/notifications"
  className="relative bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 ml-90"
>
  <FaBell />

  Notifications

  {notificationCount > 0 && (
    <span
      className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
    >
      {notificationCount}
    </span>
  )}
</Link>
          <FaUserCircle
            className="text-blue-600"
            size={70}
          />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white shadow rounded-xl p-6">

            <FaCar
              className="text-blue-600 text-4xl mb-4"
            />

            <h2 className="text-3xl font-bold">
              {cars.length}
            </h2>

            <p>Total Requests</p>

          </div>

          <div className="bg-yellow-400 rounded-xl p-6">

            <FaClock className="text-4xl mb-4" />

            <h2 className="text-3xl font-bold">
              {pending}
            </h2>

            <p>Pending</p>

          </div>

          <div className="bg-green-500 text-white rounded-xl p-6">

            <FaCheckCircle className="text-4xl mb-4" />

            <h2 className="text-3xl font-bold">
              {approved}
            </h2>

            <p>Approved</p>

          </div>

          <div className="bg-red-500 text-white rounded-xl p-6">

            <FaTimesCircle className="text-4xl mb-4" />

            <h2 className="text-3xl font-bold">
              {rejected}
            </h2>

            <p>Rejected</p>

          </div>

        </div>

        <div className="mt-8 flex justify-end">

          <Link
            to="/sell-car"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            + Sell New Car
          </Link>

        </div>

        <div className="bg-white rounded-xl shadow-lg mt-8 overflow-hidden">

          <div className="bg-blue-600 text-white px-6 py-4">

            <h2 className="text-2xl font-bold">
              My Sell Requests
            </h2>

          </div>

          {loading ? (
            <h2 className="text-center py-10">
              Loading...
            </h2>
          ) : (
            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="py-4">Image</th>
                  <th>Company</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                {cars.length > 0 ? (
                  cars.map((car) => (
                    <tr
                      key={car._id}
                      className="border-b text-center"
                    >

                      <td className="py-3">

                        <img
                          src={car.imageUrl}
                          alt={car.company}
                          className="w-24 h-16 rounded object-cover mx-auto"
                        />

                      </td>

                      <td>{car.company}</td>

                      <td>{car.model}</td>

                      <td>
                        ₹{Number(car.price).toLocaleString()}
                      </td>

                      <td>

                        <span
                          className={`px-3 py-1 rounded-full text-white ${
                            car.status === "Approved"
                              ? "bg-green-600"
                              : car.status === "Rejected"
                              ? "bg-red-600"
                              : "bg-yellow-500"
                          }`}
                        >
                          {car.status}
                        </span>

                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>

                    <td
                      colSpan="5"
                      className="text-center py-8"
                    >
                      No Sell Requests Found
                    </td>

                  </tr>
                )}

              </tbody>

            </table>
          )}

        </div>

      </div>

    </div>
  );
};

export default UserDashboard;