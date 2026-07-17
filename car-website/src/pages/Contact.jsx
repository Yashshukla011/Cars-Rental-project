import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-blue-900 via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Contact <span className="text-blue-500">CarZone</span>
          </h1>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
            Have questions about buying or selling a car?
            Our team is always ready to help you.
          </p>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">

          <h2 className="text-3xl font-bold mb-8">
            Get In Touch
          </h2>

          <div className="space-y-6">

            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl mt-1"/>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-400">
                  Kanpur, Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaPhoneAlt className="text-blue-500 text-2xl mt-1"/>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="text-blue-500 text-2xl mt-1"/>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">
                  support@carzone.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaClock className="text-blue-500 text-2xl mt-1"/>
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="text-gray-400">
                  Mon - Sat : 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>

          </div>

          <div className="mt-10">
            <h3 className="font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl ">

              <FaFacebook className="cursor-pointer hover:text-blue-500 duration-300"/>

              <FaInstagram className="cursor-pointer hover:text-pink-500 duration-300"/>

              <FaLinkedin className="cursor-pointer hover:text-blue-400 duration-300"/>

            </div>
          </div>

        </div>

        {/* Contact Form */}

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">

          <h2 className="text-3xl font-bold mb-8">
            Send Message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* Google Map */}

      {/* <section className="max-w-7xl mx-auto px-6 pb-16">

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Kanpur&output=embed"
          className="w-full h-[350px] rounded-2xl"
          loading="lazy"
        ></iframe>

      </section> */}

    </div>
  );
};

export default Contact;