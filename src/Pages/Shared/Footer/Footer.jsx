import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className=" flex flex-col md:flex-row justify-center">
        {/* Contact Section */}
        <div className=" bg-[#1F2937] flex-1 flex flex-col py-12  justify-center items-center">
          <h2 className="text-lg font-semibold text-gray-100 mb-2">
            CONTACT US
          </h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Follow Us Section */}
        <div className="bg-gray-900 flex-1 flex flex-col py-12  justify-center items-center">
          <h2 className="text-lg font-semibold text-gray-100 mb-2">
            Follow US
          </h2>
          <p className="mb-2">Join us on social media</p>
          <div className="flex space-x-4">
            <Link
              to="/facebook"
              className="text-gray-300 hover:text-gray-100 transition-colors"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              to="/instagram"
              className="text-gray-300 hover:text-gray-100 transition-colors"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              to="/twitter"
              className="text-gray-300 hover:text-gray-100 transition-colors"
            >
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className=" border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        Copyright © CulinaryCloud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
