import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/axios";

const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState(null);

  useEffect(() => {
    fetchCar();
  }, []);

  const fetchCar = async () => {
    try {
      const res = await API.get(`/cars/${id}`);
      setCar(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!car) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto p-10 bg-gray-800">
      <img
        src={car.imageUrl}
        alt={car.model}
        className="w-full h-[450px] object-cover rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-6">
        {car.company} {car.model}
      </h1>

      <h2 className="text-2xl text-blue-600 font-bold mt-2">
        ₹ {car.price}
      </h2>

      <p className="mt-4">
        <strong>Year:</strong> {car.year}
      </p>

      <p>
        <strong>Fuel:</strong> {car.fuelType}
      </p>

      <p>
        <strong>Transmission:</strong> {car.transmission}
      </p>

      <p>
        <strong>Kilometers:</strong> {car.kilometersDriven} km
      </p>

      <p className="mt-4">{car.description}</p>

      <Link
        to="/contact"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded mt-6"
      >
        Contact Seller
      </Link>
    </div>
  );
};

export default CarDetails;