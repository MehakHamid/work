"use client";

import { FaStar } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const reviews = [
    { id: 1, name: "Ali Khan", rating: 5, text: "Reliable inverter! Great service and consistent performance." },
    { id: 2, name: "Sarah Ahmed", rating: 4, text: "Highly recommend Trion UPS. Fast response and outstanding support." },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="bg-blue-700 text-white text-center py-20 px-6"
      >
        <h1 className="text-5xl font-extrabold">Welcome to Trion UPS</h1>
        <p className="mt-4 text-lg">Reliable Power Solutions for Your Home & Office</p>
        <Link 
          href="/contact" 
          className="mt-6 inline-block bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Contact Us
        </Link>
      </motion.div>

      {/* Features Section */}
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Why Choose Trion UPS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Reliable Backup", "Energy Efficient", "Affordable & Durable"].map((feature, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-gray-800">{feature}</h3>
              <p className="text-gray-600 mt-2">{feature === "Reliable Backup" ? "Ensure uninterrupted power with advanced UPS technology." : feature === "Energy Efficient" ? "Optimized power consumption for maximum efficiency." : "Long-lasting performance at an affordable price."}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mt-12 mb-6">Customer Reviews</h2>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={4000} className="max-w-lg mx-auto">
        {reviews.map((review) => (
          <motion.div 
            key={review.id} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-700 italic">"{review.text}"</p>
            <p className="text-blue-700 font-semibold mt-2">- {review.name}</p>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
}
