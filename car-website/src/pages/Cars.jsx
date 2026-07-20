import { useEffect, useState } from "react";
import API from "../api/axios";
import CarCard from "../components/CarCards";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchCars();
  }, []);
  const search = searchParams.get("search") || "";

  const fetchCars = async () => {
    try {
      const res = await API.get("/cars");
      setCars(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Search by company or model
  const filteredCars = cars.filter((car) =>
    car.company.toLowerCase().includes(search.toLowerCase()) ||
    car.model.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Loading Cars...
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Search Box */}
      <div className="flex justify-center mb-8">

      </div>

  {filteredCars.length === 0 ? (
  <div className="flex flex-col items-center justify-center py-20">

    <div className="text-7xl mb-4">🚗</div>

    <h2 className="text-3xl font-bold text-gray-800">
      No Cars Found
    </h2>

    <p className="text-gray-500 mt-2 text-center max-w-md">
      Sorry! We couldn't find any cars matching your search.
      Try searching with a different company or model.
    </p>

    <button
      onClick={() => window.location.reload()}
      className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition"
    >
 <Link to="/cars">View All Cars</Link>
    </button>

  </div>
) : (
  <div className="grid md:grid-cols-3 gap-8">
    {filteredCars.map((car) => (
      <CarCard key={car._id} car={car} />
    ))}
  </div>
)}

    </div>
  );
};

export default Cars;