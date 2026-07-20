import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaGasPump,
  FaRoad,
  FaCalendarAlt,
  FaCogs,
  FaPhone,
} from "react-icons/fa";

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

    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Loading Car Details...
      </div>
    );

  }



  return (

    <div className="bg-gray-100 min-h-screen py-10">


      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">


        {/* Car Image */}

        <div className="relative">

          <img
            src={car.imageUrl}
            alt={car.model}
            className="w-full h-[450px] object-cover"
          />


          <span className="absolute top-5 left-5 bg-black text-white px-4 py-2 rounded-lg">
            Used Car
          </span>


        </div>





        <div className="p-8">



          {/* Title and Price */}

          <div className="flex justify-between items-center flex-wrap gap-5">


            <div>

              <h1 className="text-4xl font-bold text-gray-800">
                {car.company} {car.model}
              </h1>


              <p className="text-gray-500 mt-2">
                Certified Used Car
              </p>


            </div>



            <div>

              <h2 className="text-3xl font-bold text-blue-600">
                ₹ {car.price}
              </h2>


              <p className="text-gray-500">
                Negotiable Price
              </p>


            </div>


          </div>






          {/* Highlights */}


          <div className="grid md:grid-cols-4 gap-5 mt-8">



            <div className="bg-gray-100 rounded-xl p-5 text-center">

              <FaCalendarAlt className="mx-auto text-blue-600 text-3xl"/>

              <p className="text-gray-500 mt-3">
                Year
              </p>

              <h3 className="font-bold">
                {car.year}
              </h3>

            </div>





            <div className="bg-gray-100 rounded-xl p-5 text-center">

              <FaGasPump className="mx-auto text-blue-600 text-3xl"/>

              <p className="text-gray-500 mt-3">
                Fuel
              </p>

              <h3 className="font-bold">
                {car.fuelType}
              </h3>

            </div>





            <div className="bg-gray-100 rounded-xl p-5 text-center">

              <FaCogs className="mx-auto text-blue-600 text-3xl"/>

              <p className="text-gray-500 mt-3">
                Transmission
              </p>


              <h3 className="font-bold">
                {car.transmission}
              </h3>


            </div>






            <div className="bg-gray-100 rounded-xl p-5 text-center">


              <FaRoad className="mx-auto text-blue-600 text-3xl"/>


              <p className="text-gray-500 mt-3">
                Driven
              </p>


              <h3 className="font-bold">
                {car.kilometersDriven} KM
              </h3>


            </div>




          </div>







          {/* Description */}


          <div className="mt-10">


            <h2 className="text-2xl font-bold mb-4">
              About This Car
            </h2>


            <p className="text-gray-600 leading-7">
              {car.description}
            </p>


          </div>







          {/* Specifications */}


          <div className="mt-10">


            <h2 className="text-2xl font-bold mb-5">
              Car Specifications
            </h2>



            <div className="grid md:grid-cols-2 gap-4">



              <div className="bg-gray-100 p-4 rounded-lg">
                <b>Company:</b> {car.company}
              </div>



              <div className="bg-gray-100 p-4 rounded-lg">
                <b>Model:</b> {car.model}
              </div>




              <div className="bg-gray-100 p-4 rounded-lg">
                <b>Fuel:</b> {car.fuelType}
              </div>




              <div className="bg-gray-100 p-4 rounded-lg">
                <b>Transmission:</b> {car.transmission}
              </div>



            </div>



          </div>








          {/* Contact Seller */}



          <div className="mt-10 bg-blue-600 text-white p-6 rounded-xl flex justify-between items-center flex-wrap gap-5">


            <div>

              <h2 className="text-2xl font-bold">
                Interested in this car?
              </h2>


              <p>
                Contact seller for buying details
              </p>


            </div>





            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold flex items-center gap-2"
            >

              <FaPhone/>

              Contact Seller


            </Link>




          </div>



        </div>



      </div>



    </div>

  );

};


export default CarDetails;