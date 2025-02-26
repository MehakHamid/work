"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <h1 className="text-white text-xl font-bold">Trion UPS</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent md:flex transition-all ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
            <li>
              <Link href="/" className="text-white hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/installation" className="text-white hover:underline">Installation</Link>
            </li>
            <li>
              <Link href="/feature" className="text-white hover:underline">Features</Link>
            </li>
            <li className="relative">
              {/* Dropdown Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white hover:underline flex items-center"
              >
                Services ▾
              </button>
              {/* Dropdown Menu */}
              <ul
                className={`absolute bg-white text-black w-40 p-2 shadow-lg rounded-md mt-1 ${
                  dropdownOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link href="/troubleshooting" className="block px-3 py-1 hover:bg-gray-200">
                    Troubleshooting
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="block px-3 py-1 hover:bg-gray-200">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="block px-3 py-1 hover:bg-gray-200">
                    Service
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
