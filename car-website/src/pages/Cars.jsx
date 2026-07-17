import { useEffect, useState } from "react";
import API from "../api/axios";
import CarCard from "../components/CarCards";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCars();
  }, []);

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

      <h1 className="text-4xl font-bold text-center mb-8">
        Available Cars
      </h1>

      {/* Search Box */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by Company or Model..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:border-blue-500"
        />
      </div>

      {filteredCars.length === 0 ? (
        <h2 className="text-center text-red-500 text-xl">
          No Cars Found
        </h2>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 bg-gray-900">
          {filteredCars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Cars;