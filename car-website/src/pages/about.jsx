import { Link } from "react-router-dom";
import {
  FaCar,
  FaShieldAlt,
  FaHandshake,
  FaAward,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-950 text-white">

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600"
          alt="Cars"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative text-center max-w-4xl px-6">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            India's Trusted
            <span className="text-blue-500"> Used Car </span>
            Marketplace
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Buy and sell certified used cars with complete confidence.
            Transparent pricing, verified cars, and trusted dealers —
            everything in one place.
          </p>

          <div className="mt-8 flex justify-center gap-5">

            <Link to="/cars">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
                Explore Cars
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </Link>

          </div>

        </div>

      </section>

      {/* About Company */}

      <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12 items-center bg-white">

        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900"
          className="rounded-xl shadow-2xl"
          alt=""
        />

        <div>

          <h2 className="text-4xl font-bold mb-6 text-black">
            Who We Are
          </h2>

          <p className="text-black leading-8 mb-6">

            Car Rental is an online platform that helps customers buy and
            sell certified used cars across India.

            Every vehicle goes through a detailed inspection process
            before being listed, ensuring quality, transparency,
            and peace of mind for every customer.

          </p>

          <p className="text-black leading-8">

            Whether you're purchasing your first car or upgrading
            your current one, our mission is to make the process
            simple, secure, and affordable.

          </p>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <div className="bg-gray-800 rounded-xl p-8">

            <FaCar className="text-5xl text-blue-500 mb-5"/>

            <h2 className="text-3xl font-bold mb-4">

              Our Mission

            </h2>

            <p className="text-gray-300 leading-8">

              To make buying and selling used cars
              transparent, affordable, and hassle-free
              through technology and trust.

            </p>

          </div>

          <div className="bg-gray-800 rounded-xl p-8">

            <FaAward className="text-5xl text-yellow-400 mb-5"/>

            <h2 className="text-3xl font-bold mb-4">

              Our Vision

            </h2>

            <p className="text-gray-300 leading-8">

              To become India's most trusted online
              destination for certified pre-owned cars.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;