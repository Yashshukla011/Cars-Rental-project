import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import {
  FaCar,
  FaUser,
  FaMapMarkerAlt,
  FaRupeeSign,
} from "react-icons/fa";

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
    }
    finally{
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black py-12 px-5">


      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">


        {/* Header */}

        <div className="bg-blue-600 text-white p-8 text-center">

          <FaCar className="mx-auto text-5xl mb-3"/>

          <h1 className="text-4xl font-bold">
            Sell Your Car
          </h1>

          <p className="mt-2 text-blue-100">
            Get the best value for your car
          </p>

        </div>



        <form
        onSubmit={handleSubmit}
        className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >


        {/* Seller Details */}

        <div className="md:col-span-2">

        <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <FaUser/> Seller Information
        </h2>

        </div>


        {[
          {
            name:"sellerName",
            placeholder:"Seller Name"
          },
          {
            name:"sellerEmail",
            placeholder:"Email",
            type:"email"
          },
          {
            name:"sellerPhone",
            placeholder:"Phone Number"
          }
        ].map((item)=>(
          <input
          key={item.name}
          type={item.type || "text"}
          name={item.name}
          placeholder={item.placeholder}
          onChange={handleChange}
          required
          className="
          border border-gray-300 
          p-3 rounded-xl
          focus:ring-2 focus:ring-blue-500
          outline-none
          "
          />
        ))}



        {/* Car Details */}

        <div className="md:col-span-2 mt-3">

        <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <FaCar/> Car Details
        </h2>

        </div>



        {
        [
        "company",
        "model",
        "year",
        "kilometersDriven",
        "color",
        "registrationYear"
        ].map((field)=>(

          <input
          key={field}
          type={
            field==="year" ||
            field==="kilometersDriven" ||
            field==="registrationYear"
            ?
            "number"
            :
            "text"
          }
          name={field}
          placeholder={
            field.replace(/([A-Z])/g," $1")
          }
          onChange={handleChange}
          className="
          border border-gray-300
          p-3 rounded-xl
          focus:ring-2 focus:ring-blue-500
          outline-none
          "
          />

        ))
        }



        <div className="relative">

        <FaRupeeSign 
        className="absolute left-3 top-4 text-gray-400"
        />

        <input
        type="number"
        name="price"
        placeholder="Expected Price"
        onChange={handleChange}
        className="
        w-full border p-3 pl-10 rounded-xl
        focus:ring-2 focus:ring-blue-500
        "
        />

        </div>



        <select
        name="fuelType"
        onChange={handleChange}
        className="border p-3 rounded-xl"
        >

        <option>Petrol</option>
        <option>Diesel</option>
        <option>CNG</option>
        <option>Electric</option>
        <option>Hybrid</option>

        </select>



        <select
        name="transmission"
        onChange={handleChange}
        className="border p-3 rounded-xl"
        >

        <option>Manual</option>
        <option>Automatic</option>

        </select>



        <select
        name="owner"
        onChange={handleChange}
        className="border p-3 rounded-xl"
        >

        <option>1st Owner</option>
        <option>2nd Owner</option>
        <option>3rd Owner</option>
        <option>Multiple Owners</option>

        </select>




        <select
        name="insurance"
        onChange={handleChange}
        className="border p-3 rounded-xl"
        >

        <option>Valid</option>
        <option>Expired</option>

        </select>




        <div className="relative">

        <FaMapMarkerAlt
        className="absolute left-3 top-4 text-gray-400"
        />

        <input
        type="text"
        name="location"
        placeholder="Location"
        onChange={handleChange}
        className="
        w-full border p-3 pl-10 rounded-xl
        "
        />

        </div>





        <input
        type="text"
        name="imageUrl"
        placeholder="Car Image URL"
        onChange={handleChange}
        className="
        md:col-span-2
        border p-3 rounded-xl
        "
        />



        <textarea
        name="description"
        rows="5"
        placeholder="Car Description"
        onChange={handleChange}
        className="
        md:col-span-2
        border p-3 rounded-xl
        "
        />



        <button
        disabled={loading}
        className="
        md:col-span-2
        bg-blue-600
        hover:bg-blue-700
        text-white
        py-4
        rounded-xl
        font-bold
        text-lg
        transition
        "
        >

        {
        loading
        ?
        "Submitting..."
        :
        "Submit Sell Request"
        }

        </button>



        </form>


      </div>

    </div>
  );
};


export default SellCar;