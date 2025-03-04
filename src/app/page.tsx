"use client";

import { FaStar, FaBolt, FaBatteryFull, FaDollarSign } from "react-icons/fa";
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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="relative w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-800 bg-opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold">Powering Your Future</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">Reliable power solutions tailored for your needs.</p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition">Contact Us</Link>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-10">Why Choose Trion UPS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Reliable Backup", icon: <FaBatteryFull className='text-blue-700 text-5xl' /> },
            { title: "Energy Efficient", icon: <FaBolt className='text-green-600 text-5xl' /> },
            { title: "Affordable & Durable", icon: <FaDollarSign className='text-yellow-500 text-5xl' /> },
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            >
              {feature.icon}
              <h3 className="text-2xl font-bold text-gray-800 mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.title === "Reliable Backup" ? "Ensure uninterrupted power with advanced UPS technology." : feature.title === "Energy Efficient" ? "Optimized power consumption for maximum efficiency." : "Long-lasting performance at an affordable price."}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mt-12 mb-8">Customer Reviews</h2>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={4000} className="max-w-3xl mx-auto">
        {reviews.map((review) => (
          <motion.div 
            key={review.id} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-md text-center mx-6"
          >
            <div className="flex justify-center mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-lg" />
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
