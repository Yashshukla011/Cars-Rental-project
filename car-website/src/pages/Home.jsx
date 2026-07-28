import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";
import CarCard from "../components/CarCards";

import {
  FaCar,
  FaShieldAlt,
  FaHandshake,
  FaCheckCircle
} from "react-icons/fa";


const Home = () => {


  const [cars, setCars] = useState([]);




  useEffect(() => {

    fetchCars();

  }, []);





  const fetchCars = async () => {

    try {

      const res = await API.get("/cars");

      setCars(res.data.data);

    } catch(error){

      console.log(error);

    }

  };







  return (


    <div className="bg-gray-100 min-h-screen">






      {/* HERO SECTION */}



      <section

        className="
        relative
        h-[550px]
        bg-cover
        bg-center
        flex
        items-center
        "

        style={{

          backgroundImage:
          "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7)"

        }}

      >



        {/* Overlay */}

        <div className="
        absolute
        inset-0
        bg-black/60
        "></div>





        <div className="
        relative
        max-w-7xl
        mx-auto
        px-6
        text-white
        ">





          <h1 className="
          text-5xl
          md:text-6xl
          font-extrabold
          leading-tight
          ">

            Find Your Perfect
            <br/>
            Dream Car 🚗


          </h1>






          <p className="
          text-xl
          mt-5
          text-gray-200
          max-w-xl
          ">

            Buy premium used cars with verified history,
            best prices and trusted sellers.


          </p>







          <div className="
          flex
          gap-4
          mt-8
          flex-wrap
          ">





            <Link

              to="/cars"

              className="
              bg-blue-600
              px-8
              py-3
              rounded-xl
              font-semibold
              hover:bg-blue-700
              transition
              "

            >

              Browse Cars

            </Link>







            <Link

              to="/sell-car"

              className="
              bg-white
              text-gray-900
              px-8
              py-3
              rounded-xl
              font-semibold
              hover:bg-gray-200
              transition
              "

            >

              Sell Your Car

            </Link>




          </div>





        </div>



      </section>













      {/* FEATURED CARS */}





      <section className="
      max-w-7xl
      mx-auto
      px-6
      py-14
      ">




        <div className="
        flex
        justify-between
        items-center
        mb-10
        ">




          <div>


            <h2 className="
            text-4xl
            font-bold
            text-gray-800
            ">

              Featured Cars

            </h2>


            <p className="
            text-gray-500
            mt-2
            ">

              Explore our latest premium used cars

            </p>


          </div>





          <Link

            to="/cars"

            className="
            text-blue-600
            font-semibold
            "

          >

            View All →

          </Link>





        </div>








        <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        ">



          {

            cars.slice(0,6).map((car)=>(


              <CarCard

                key={car._id}

                car={car}

              />


            ))

          }



        </div>




      </section>














      {/* WHY CHOOSE US */}





      <section className="
      bg-white
      py-14
      ">




        <h2 className="
        text-4xl
        text-center
        font-bold
        text-gray-800
        mb-10
        ">

          Why Choose Us?

        </h2>







        <div className="
        max-w-6xl
        mx-auto
        px-6
        grid
        md:grid-cols-3
        gap-8
        ">







          <div className="
          bg-gray-100
          p-8
          rounded-2xl
          text-center
          hover:shadow-xl
          transition
          ">


            <FaCar className="
            text-blue-600
            text-5xl
            mx-auto
            "/>



            <h3 className="
            text-xl
            font-bold
            mt-5
            ">

              Quality Cars

            </h3>



            <p className="
            text-gray-500
            mt-2
            ">

              Carefully inspected and verified vehicles

            </p>



          </div>









          <div className="
          bg-gray-100
          p-8
          rounded-2xl
          text-center
          hover:shadow-xl
          transition
          ">



            <FaShieldAlt className="
            text-blue-600
            text-5xl
            mx-auto
            "/>





            <h3 className="
            text-xl
            font-bold
            mt-5
            ">

              Trusted Platform

            </h3>





            <p className="
            text-gray-500
            mt-2
            ">

              Safe and transparent car buying

            </p>



          </div>









          <div className="
          bg-gray-100
          p-8
          rounded-2xl
          text-center
          hover:shadow-xl
          transition
          ">



            <FaHandshake className="
            text-blue-600
            text-5xl
            mx-auto
            "/>





            <h3 className="
            text-xl
            font-bold
            mt-5
            ">

              Best Deals

            </h3>





            <p className="
            text-gray-500
            mt-2
            ">

              Affordable prices for everyone

            </p>



          </div>





        </div>




      </section>

      {/* CTA SECTION */}





      <section className="
      max-w-7xl
      mx-auto
      my-12
      mx-6
      rounded-3xl
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      p-12
      text-center
      text-white
      ">





        <FaCheckCircle className="
        text-5xl
        mx-auto
        mb-4
        "/>




        <h2 className="
        text-4xl
        font-bold
        ">

          Ready To Own Your Dream Car?

        </h2>





        <p className="
        mt-3
        text-lg
        ">

          Find the perfect used car at the best price

        </p>





        <Link

          to="/cars"

          className="
          inline-block
          mt-6
          bg-white
          text-blue-600
          px-8
          py-3
          rounded-xl
          font-bold
          "

        >

          Explore Cars

        </Link>





      </section>





    </div>


  );

};


export default Home;