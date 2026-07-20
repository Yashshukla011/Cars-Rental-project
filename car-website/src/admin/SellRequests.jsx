import { useEffect, useState } from "react";
import API from "../api/axios";

const SellRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await API.get("/cars/sell-requests");
      setRequests(res.data.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load requests");
    } finally {
      setLoading(false);
    }
  };

  const approveRequest = async (id) => {
    try {
      await API.put(`/cars/approve/${id}`);
      alert("Car Approved Successfully");
      fetchRequests();
    } catch (error) {
      alert("Approval Failed");
    }
  };

  const rejectRequest = async (id) => {
    try {
      await API.put(`/cars/reject/${id}`);
      alert("Car Rejected");
      fetchRequests();
    } catch (error) {
      alert("Reject Failed");
    }
  };

  if (loading) {
    return (
      <h2 className="text-center text-2xl mt-10">
        Loading...
      </h2>
    );
  }

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Sell Requests
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border shadow-lg">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-3">Seller</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Company</th>
              <th className="p-3">Model</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>

          </thead>

          <tbody>

            {requests.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-5"
                >
                  No Sell Requests Found
                </td>
              </tr>
            ) : (
              requests.map((car) => (
                <tr
                  key={car._id}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="p-3">{car.sellerName}</td>

                  <td className="p-3">{car.sellerPhone}</td>

                  <td className="p-3">{car.company}</td>

                  <td className="p-3">{car.model}</td>

                  <td className="p-3">
                    ₹ {car.price.toLocaleString()}
                  </td>

                  <td className="p-3">

                    {car.status === "Pending" && (
                      <span className="text-yellow-600 font-bold">
                        Pending
                      </span>
                    )}

                    {car.status === "Approved" && (
                      <span className="text-green-600 font-bold">
                        Approved
                      </span>
                    )}

                    {car.status === "Rejected" && (
                      <span className="text-red-600 font-bold">
                        Rejected
                      </span>
                    )}

                  </td>

                  <td className="p-3 space-x-2">

                    <button
                      onClick={() => approveRequest(car._id)}
                      className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => rejectRequest(car._id)}
                      className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Reject
                    </button>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default SellRequests;