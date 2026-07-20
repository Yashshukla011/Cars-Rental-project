import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const SellCar = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sellerName: "",
    sellerEmail: "",
    sellerPhone: "",
    company: "",
    model: "",
    price: "",
    year: "",
    fuelType: "Petrol",
    transmission: "Manual",
    kilometersDriven: "",
    imageUrl: "",
    description: "",
    condition: "Used",
    owner: "1st Owner",
    location: "",
    registrationYear: "",
    color: "",
    insurance: "Valid",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/cars/sell", formData);

      alert(res.data.message);

      navigate("/cars");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Sell Your Car
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          <input
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            className="border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="sellerEmail"
            placeholder="Email"
            className="border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="sellerPhone"
            placeholder="Phone Number"
            className="border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            className="border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="model"
            placeholder="Model"
            className="border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="year"
            placeholder="Manufacturing Year"
            className="border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="kilometersDriven"
            placeholder="Kilometers Driven"
            className="border p-3 rounded"
            onChange={handleChange}
            required
          />

          <select
            name="fuelType"
            className="border p-3 rounded"
            onChange={handleChange}
          >
            <option>Petrol</option>
            <option>Diesel</option>
            <option>CNG</option>
            <option>Electric</option>
            <option>Hybrid</option>
          </select>

          <select
            name="transmission"
            className="border p-3 rounded"
            onChange={handleChange}
          >
            <option>Manual</option>
            <option>Automatic</option>
          </select>

          <select
            name="condition"
            className="border p-3 rounded"
            onChange={handleChange}
          >
            <option>Used</option>
            <option>Certified</option>
            <option>Luxury</option>
          </select>

          <select
            name="owner"
            className="border p-3 rounded"
            onChange={handleChange}
          >
            <option>1st Owner</option>
            <option>2nd Owner</option>
            <option>3rd Owner</option>
            <option>Multiple Owners</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="border p-3 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="registrationYear"
            placeholder="Registration Year"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="color"
            placeholder="Color"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <select
            name="insurance"
            className="border p-3 rounded"
            onChange={handleChange}
          >
            <option>Valid</option>
            <option>Expired</option>
          </select>

          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            className="border p-3 rounded md:col-span-2"
            onChange={handleChange}
            required
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Description"
            className="border p-3 rounded md:col-span-2"
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Submitting..." : "Submit Sell Request"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default SellCar;