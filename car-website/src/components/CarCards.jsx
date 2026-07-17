import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">

      <img
        src={car.imageUrl}
        alt={car.model}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {car.company}
        </h2>

        <p className="text-gray-500">
          {car.model}
        </p>

        <p className="text-blue-600 text-xl font-bold mt-3">
          ₹ {car.price}
        </p>

        <p className="mt-2">
          {car.year}
        </p>

        <p>
          {car.fuelType}
        </p>

        <p>
          {car.transmission}
        </p>

        <Link
          to={`/cars/${car._id}`}
          className="block mt-5 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default CarCard;