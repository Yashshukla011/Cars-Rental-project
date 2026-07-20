import { Link } from "react-router-dom";
import {
  FaGasPump,
  FaRoad,
  FaPhone,
  FaHeart,
  FaMapMarkerAlt,
  FaUser,
  FaCheckCircle,
  FaCogs,
  FaCalendarAlt
} from "react-icons/fa";


const CarCard = ({ car }) => {


  return (

    <div className="
      bg-white 
      rounded-3xl 
      overflow-hidden 
      shadow-lg 
      hover:shadow-2xl 
      transition-all 
      duration-500
      hover:-translate-y-2
    ">


      {/* Image Area */}

      <div className="relative h-64 overflow-hidden">


        <img
          src={car.imageUrl}
          alt={car.model}
          className="
          w-full 
          h-full 
          object-cover
          group-hover:scale-110
          transition
          duration-700
          "
        />



        {/* Gradient */}

        <div className="
          absolute 
          inset-0 
          bg-gradient-to-t 
          from-black/70 
          via-transparent 
          to-transparent
        "></div>





        {/* Badge */}

        <div className="
          absolute 
          top-4 
          left-4
          backdrop-blur-md
          bg-blue-600/90
          text-white
          px-4
          py-1
          rounded-full
          text-sm
          font-semibold
        ">

          {car.condition || "Used"}

        </div>






        {/* Like Button */}

        <button
          className="
          absolute 
          top-4 
          right-4
          bg-white/90
          p-3
          rounded-full
          shadow-md
          hover:text-red-500
          hover:scale-110
          transition
          "
        >

          <FaHeart/>

        </button>






        {/* Bottom Image Text */}

        <div className="
          absolute 
          bottom-4 
          left-5 
          text-white
        ">


          <h2 className="text-2xl font-bold">

            {car.company} {car.model}

          </h2>


          <p className="text-sm opacity-90">

            Premium Used Car

          </p>


        </div>


      </div>







      {/* Content */}

      <div className="p-6">






        {/* Price */}


        <div className="
        flex 
        justify-between 
        items-center
        ">


          <div>


            <h3 className="
            text-3xl 
            font-extrabold 
            text-blue-600
            ">

              ₹ {Number(car.price).toLocaleString("en-IN")}

            </h3>


            <p className="text-gray-400 text-sm">

              Starting Price

            </p>


          </div>





          <div className="
          bg-green-100 
          text-green-700
          px-3
          py-1
          rounded-full
          text-xs
          font-bold
          ">

            Available

          </div>



        </div>








        {/* Verified */}

        <div className="
        flex
        items-center
        gap-2
        mt-4
        text-green-600
        text-sm
        font-semibold
        ">


          <FaCheckCircle/>

          Verified Car


        </div>









        {/* Specs */}


        <div className="
        grid 
        grid-cols-2 
        gap-3 
        mt-5
        ">


          <div className="spec">

            <FaGasPump className="text-blue-600"/>

            {car.fuelType}

          </div>



          <div className="spec">

            <FaRoad className="text-blue-600"/>

            {car.kilometersDriven} KM

          </div>




          <div className="spec">

            <FaCogs className="text-blue-600"/>

            {car.transmission}

          </div>




          <div className="spec">

            <FaCalendarAlt className="text-blue-600"/>

            {car.year}

          </div>



        </div>









        {/* Owner Location */}


        <div className="
        mt-5
        border-t
        pt-4
        space-y-3
        text-gray-600
        text-sm
        ">


          <p className="flex gap-2 items-center">

            <FaUser className="text-blue-600"/>

            {car.owner || "1st Owner"}

          </p>



          <p className="flex gap-2 items-center">

            <FaMapMarkerAlt className="text-blue-600"/>

            {car.location || "Kanpur"}

          </p>


        </div>









        {/* Buttons */}


        <div className="
        flex 
        gap-3 
        mt-6
        ">



          <Link
          to={`/cars/${car._id}`}
          className="
          flex-1
          text-center
          py-3
          rounded-xl
          bg-gray-900
          text-white
          font-semibold
          hover:bg-black
          transition
          "
          >

            View Details

          </Link>





          <Link
          to="/contact"
          className="
          flex-1
          py-3
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          text-white
          font-semibold
          flex
          justify-center
          items-center
          gap-2
          hover:scale-105
          transition
          "
          >

            <FaPhone/>

            Rent Now

          </Link>



        </div>




      </div>



    </div>


  );

};


export default CarCard;