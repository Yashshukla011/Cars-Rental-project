import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              Car Rental
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              Find the best used cars at affordable prices.
              Trusted by thousands of customers across India.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cars">Cars</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>📍 Kanpur, Uttar Pradesh</p>
              <p>📧 info@carrental.com</p>
              <p>📞 +91 98765 43210</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

     <div className="flex flex-col space-y-3 text-gray-300 ml-15">
  <a href="#" className="flex items-center gap-2 hover:text-blue-400">
    <FaFacebook className="text-xl" />
    <span>Facebook</span>
  </a>

  <a href="#" className="flex items-center gap-2 hover:text-pink-400">
    <FaInstagram className="text-xl" />
    <span>Instagram</span>
  </a>

  <a href="#" className="flex items-center gap-2 hover:text-sky-400">
    <FaLinkedin className="text-xl" />
    <span>LinkedIn</span>
  </a>
</div>
          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © 2026 Car Rental. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;