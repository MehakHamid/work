"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-blue-600 p-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <h1 className="text-white text-xl font-bold">Trion UPS</h1>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </button>

        {/* Navigation Links */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 w-2/3 h-full bg-blue-700 md:hidden flex flex-col items-center justify-center space-y-6 shadow-lg"
            >
              <ul className="text-white text-lg space-y-6">
                <li>
                  <Link href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
                </li>
                <li>
                  <Link href="/installation" className="hover:underline" onClick={() => setMenuOpen(false)}>Installation</Link>
                </li>
                <li>
                  <Link href="/feature" className="hover:underline" onClick={() => setMenuOpen(false)}>Features</Link>
                </li>
                <li>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="hover:underline flex items-center"
                  >
                    Services ▾
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white text-black w-40 p-2 shadow-lg rounded-md mt-2"
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
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:underline">Home</Link>
          <Link href="/installation" className="text-white hover:underline">Installation</Link>
          <Link href="/feature" className="text-white hover:underline">Features</Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white hover:underline flex items-center"
            >
              Services ▾
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-white text-black w-40 p-2 shadow-lg rounded-md mt-1"
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
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <Link href="/contact" className="text-white hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
