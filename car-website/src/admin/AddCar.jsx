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

    condition: "Used",
    owner: "1st Owner",
    location: "",
    registrationYear: "",
    color: "",
    insurance: "Valid"

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

        condition: "Used",
        owner: "1st Owner",
        location: "",
        registrationYear: "",
        color: "",
        insurance: "Valid"

      });



    } catch(error){

      console.log(error);

      alert("Something went wrong");

    }


  };






return (

<div className="min-h-screen bg-gray-100 py-10">


  <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">


    <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
      Add New Car 🚗
    </h1>

    <p className="text-center text-gray-500 mb-8">
      Enter car details to add it to your marketplace
    </p>



    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-2 gap-6"
    >



      {[
        ["company","Company Name"],
        ["model","Car Model"],
        ["price","Price"],
        ["year","Manufacturing Year"],
        ["kilometersDriven","Kilometers Driven"],
      ].map(([name,placeholder])=>(

        <input
          key={name}
          type={name==="price" || name==="year" || name==="kilometersDriven" ? "number":"text"}
          name={name}
          placeholder={placeholder}
          value={car[name]}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
          required
        />

      ))}






      <select
        name="fuelType"
        value={car.fuelType}
        onChange={handleChange}
        className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
        required
      >

        <option value="">
          Select Fuel Type
        </option>

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
        className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
        required
      >

        <option value="">
          Select Transmission
        </option>

        <option>Manual</option>
        <option>Automatic</option>

      </select>







      <select
        name="condition"
        value={car.condition}
        onChange={handleChange}
        className="border border-gray-300 rounded-xl p-3"
      >

        <option>Used</option>
        <option>Certified</option>
        <option>Luxury</option>

      </select>








      <select
        name="owner"
        value={car.owner}
        onChange={handleChange}
        className="border border-gray-300 rounded-xl p-3"
      >

        <option>1st Owner</option>
        <option>2nd Owner</option>
        <option>3rd Owner</option>
        <option>Multiple Owners</option>

      </select>







      <input
        type="text"
        name="location"
        placeholder="City / Location"
        value={car.location}
        onChange={handleChange}
        className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
        required
      />






      <input
        type="number"
        name="registrationYear"
        placeholder="Registration Year"
        value={car.registrationYear}
        onChange={handleChange}
        className="border border-gray-300 rounded-xl p-3"
      />






      <input
        type="text"
        name="color"
        placeholder="Car Color"
        value={car.color}
        onChange={handleChange}
        className="border border-gray-300 rounded-xl p-3"
      />







      <select
        name="insurance"
        value={car.insurance}
        onChange={handleChange}
        className="border border-gray-300 rounded-xl p-3"
      >

        <option>Valid</option>
        <option>Expired</option>

      </select>







      <input
        type="text"
        name="imageUrl"
        placeholder="Car Image URL"
        value={car.imageUrl}
        onChange={handleChange}
        className="md:col-span-2 border border-gray-300 rounded-xl p-3"
        required
      />








      <textarea
        name="description"
        placeholder="Car Description"
        value={car.description}
        onChange={handleChange}
        rows="5"
        className="md:col-span-2 border border-gray-300 rounded-xl p-3 resize-none"
        required
      />








      <button
        className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold hover:scale-[1.02] transition duration-300 shadow-lg"
      >

        Add Car 🚘

      </button>



    </form>



  </div>


</div>

);

};


export default AddCar;