import { useEffect, useState } from "react";
import API from "../api/axios";
import CarCard from "../components/CarCards";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await API.get("/cars");
      setCars(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 ">

      {/* <h1 className="text-4xl font-bold text-center mb-10">
        Featured Cars
      </h1> */}

      <div className="grid md:grid-cols-3 gap-6 text-cyan-500 bg-auto ">
        {cars.slice(0, 6).map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>

    </div>
  );
};

export default Home;