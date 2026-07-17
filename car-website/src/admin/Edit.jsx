import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState({
    company: "",
    model: "",
    price: "",
    year: "",
    fuelType: "",
    transmission: "",
    kilometersDriven: "",
    imageUrl: "",
    description: "",
  });

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

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/cars/${id}`, car);

      alert("Car Updated Successfully");

      navigate("/admin/view-cars");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gray-800 shadow-lg p-8 rounded-lg">

      <h1 className="text-3xl font-bold text-center mb-8">
        Edit Car
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">

        <input
          type="text"
          name="company"
          value={car.company}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="model"
          value={car.model}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="number"
          name="price"
          value={car.price}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="number"
          name="year"
          value={car.year}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <select
          name="fuelType"
          value={car.fuelType}
          onChange={handleChange}
          className="border p-3 rounded"
        >
          <option>Petrol</option>
          <option>Diesel</option>
          <option>CNG</option>
          <option>Electric</option>
          <option>Hybrid</option>
        </select>

        <select
          name="transmission"
          value={car.transmission}
          onChange={handleChange}
          className="border p-3 rounded"
        >
          <option>Manual</option>
          <option>Automatic</option>
        </select>

        <input
          type="number"
          name="kilometersDriven"
          value={car.kilometersDriven}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="imageUrl"
          value={car.imageUrl}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <textarea
          name="description"
          value={car.description}
          onChange={handleChange}
          rows="4"
          className="border p-3 rounded col-span-2"
        />

        <button
          type="submit"
          className="col-span-2 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded"
        >
          Update Car
        </button>

      </form>

    </div>
  );
};

export default EditCar;