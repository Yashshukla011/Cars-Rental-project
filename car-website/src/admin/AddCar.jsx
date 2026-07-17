import { useState } from "react";
import API from "../api/axios";

const AddCar = () => {
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

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/cars", car);

      alert("Car Added Successfully");

      console.log(res.data);

      setCar({
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
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gray-800 shadow-lg p-8 rounded-lg">

      <h1 className="text-3xl font-bold text-center mb-8">
        Add New Car
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={car.company}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="model"
          placeholder="Model"
          value={car.model}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={car.price}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={car.year}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <select
          name="fuelType"
          value={car.fuelType}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        >
          <option value="">Fuel Type</option>
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
          required
        >
          <option value="">Transmission</option>
          <option>Manual</option>
          <option>Automatic</option>
        </select>

        <input
          type="number"
          name="kilometersDriven"
          placeholder="Kilometers Driven"
          value={car.kilometersDriven}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={car.imageUrl}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={car.description}
          onChange={handleChange}
          className="border p-3 rounded col-span-2"
          rows="4"
          required
        />

        <button
          className="col-span-2 bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Add Car
        </button>

      </form>
    </div>
  );
};

export default AddCar;