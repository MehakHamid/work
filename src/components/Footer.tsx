import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold">Trion Inverter UPS</h2>
        <p className="mt-1 text-gray-400">Reliable Power Solutions for Your Home & Business</p>

        {/* Contact Email */}
        <div className="flex justify-center items-center mt-3 space-x-2">
          <FaEnvelope className="text-blue-400 text-xl" />
          <a href="mailto:care@tri-angels.com.pk" className="text-blue-400 hover:underline">
            care@tri-angels.com.pk
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="https://facebook.com" target="_blank" className="text-blue-500 hover:text-white text-2xl">
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-white text-2xl">
            <FaInstagram />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-blue-400 hover:text-white text-2xl">
            <FaLinkedin />
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-gray-500 text-sm">© 2025 Trion Inverter UPS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
