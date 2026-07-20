import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaCar
} from "react-icons/fa";


const Contact = () => {


  const handleSubmit = (e)=>{

    e.preventDefault();

    alert("Message Sent Successfully!");

  };





  return (


    <div className="bg-gray-100 min-h-screen">





      {/* HERO SECTION */}



      <section

      className="
      relative
      h-[350px]
      bg-cover
      bg-center
      flex
      items-center
      "

      style={{
        backgroundImage:
        "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70)"
      }}

      >


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
        text-center
        w-full
        ">


          <h1 className="
          text-5xl
          font-extrabold
          ">

            Contact CarZone 🚗

          </h1>




          <p className="
          mt-4
          text-lg
          text-gray-200
          ">

            Need help buying or selling a car?
            Our team is here for you.

          </p>



        </div>


      </section>









      {/* CONTACT AREA */}



      <section className="
      max-w-7xl
      mx-auto
      px-6
      py-14
      grid
      lg:grid-cols-2
      gap-10
      ">







        {/* LEFT SIDE */}



        <div className="
        bg-white
        rounded-3xl
        shadow-lg
        p-8
        ">


          <div className="
          flex
          items-center
          gap-3
          mb-8
          ">


            <div className="
            bg-blue-600
            p-4
            rounded-xl
            text-white
            text-2xl
            ">

              <FaCar/>

            </div>



            <h2 className="
            text-3xl
            font-bold
            text-gray-800
            ">

              Get In Touch

            </h2>



          </div>








          <div className="space-y-6">





            <div className="flex gap-4">


              <FaMapMarkerAlt className="
              text-blue-600
              text-2xl
              mt-1
              "/>


              <div>

                <h3 className="font-bold text-gray-800">

                  Location

                </h3>


                <p className="text-gray-500">

                  Kanpur, Uttar Pradesh, India

                </p>


              </div>


            </div>









            <div className="flex gap-4">


              <FaPhoneAlt className="
              text-blue-600
              text-2xl
              mt-1
              "/>


              <div>

                <h3 className="font-bold text-gray-800">

                  Phone

                </h3>


                <p className="text-gray-500">

                  +91 98765 43210

                </p>


              </div>


            </div>









            <div className="flex gap-4">


              <FaEnvelope className="
              text-blue-600
              text-2xl
              mt-1
              "/>


              <div>

                <h3 className="font-bold text-gray-800">

                  Email

                </h3>


                <p className="text-gray-500">

                  support@carzone.com

                </p>


              </div>


            </div>









            <div className="flex gap-4">


              <FaClock className="
              text-blue-600
              text-2xl
              mt-1
              "/>


              <div>

                <h3 className="font-bold text-gray-800">

                  Working Hours

                </h3>


                <p className="text-gray-500">

                  Mon - Sat : 9 AM - 7 PM

                </p>


              </div>


            </div>





          </div>










          {/* SOCIAL */}



          <div className="
          mt-10
          border-t
          pt-6
          ">


            <h3 className="
            font-bold
            mb-4
            text-gray-800
            ">

              Follow Us

            </h3>



            <div className="
            flex
            gap-5
            text-3xl
            ">


              <FaFacebook className="
              text-blue-600
              cursor-pointer
              hover:scale-110
              transition
              "/>



              <FaInstagram className="
              text-pink-600
              cursor-pointer
              hover:scale-110
              transition
              "/>



              <FaLinkedin className="
              text-blue-700
              cursor-pointer
              hover:scale-110
              transition
              "/>


            </div>



          </div>





        </div>









        {/* FORM */}





        <div className="
        bg-white
        rounded-3xl
        shadow-lg
        p-8
        ">



          <h2 className="
          text-3xl
          font-bold
          text-gray-800
          mb-8
          ">

            Send Message

          </h2>







          <form
          onSubmit={handleSubmit}
          className="space-y-5"
          >




            <input

            type="text"

            placeholder="Full Name"

            className="
            w-full
            border
            rounded-xl
            px-5
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
            "

            />
            <input

            type="email"

            placeholder="Email Address"

            className="
            w-full
            border
            rounded-xl
            px-5
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
            "

            />

            <input

            type="text"

            placeholder="Phone Number"

            className="
            w-full
            border
            rounded-xl
            px-5
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
            "

            />








            <textarea

            rows="5"

            placeholder="Your Message"

            className="
            w-full
            border
            rounded-xl
            px-5
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
            "

            ></textarea>







            <button

            className="
            w-full
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            text-white
            py-3
            rounded-xl
            font-bold
            hover:scale-[1.02]
            transition
            "

            >

              Send Message

            </button>





          </form>





        </div>





      </section>









      {/* MAP */}



      <section className="
      max-w-7xl
      mx-auto
      px-6
      pb-14
      ">


        <iframe

        title="map"

        src="https://www.google.com/maps?q=Kanpur&output=embed"

        className="
        w-full
        h-[350px]
        rounded-3xl
        shadow-lg
        "

        loading="lazy"

        ></iframe>



      </section>






    </div>


  );

};


export default Contact;