"use client";

import { useState } from "react";
import { FaTools, FaWrench, FaStar, FaBatteryFull} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

export default function Home() {
  // 🔹 Customer Reviews State
  const [reviews, setReviews] = useState([
    { text: "Best inverter ever! Great service and reliable performance.", rating: 4 },
    { text: "Highly recommend Trion UPS. Quick response and excellent support.", rating: 5 },
  ]);

  const [newReview, setNewReview] = useState(""); // User input
  const [rating, setRating] = useState(5); // Default rating

  // 🔹 Add New Review
  const handleAddReview = () => {
    if (newReview.trim() === "") return; // Prevent empty reviews
    setReviews([...reviews, { text: newReview, rating }]);
    setNewReview(""); // Clear input after submission
  };

  return (
    <div className="bg-gray-100">
      {/* 🔹 Banner Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold">Welcome to Trion UPS</h1>
        <p className="text-lg mt-2 opacity-90">Your trusted partner in power solutions</p>
      </div>

      {/* 🔹 Services Section */}
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/installation" className="service-card hover:shadow-lg transition duration-300 p-6 bg-white rounded-lg text-center">
          <FaTools className="text-blue-600 text-5xl mb-3 mx-auto" />
          <h2 className="text-2xl font-bold">Installation Precaution</h2>
          <p className="text-gray-600">Ensure safe installation with proper guidelines.</p>
        </Link>
        <Link href="/features" className="service-card">
          <FaBatteryFull className="text-green-600 text-4xl mb-2" />
          <h2 className="text-xl font-bold">Inverter Features</h2>
          <p>Explore our top-notch inverter technologies.</p>
        </Link>

        <Link href="/features" className="service-card hover:shadow-lg transition duration-300 p-6 bg-white rounded-lg text-center">
          <FaWrench className="text-red-600 text-5xl mb-3 mx-auto" />
          <h2 className="text-2xl font-bold">Trion Inverter Repair</h2>
          <p className="text-gray-600">Get your Trion inverter repaired at our centers.</p>
        </Link>
      </div>

      {/* 🔹 Customer Reviews - Carousel */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">What Our Customers Say</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="max-w-3xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
              <p className="italic text-gray-700">&ldquo;{review.text}&rdquo;</p>

              <div className="flex justify-center mt-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-gray-300" />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* 🔹 Add Customer Review Form */}
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Leave a Review</h2>
        <textarea
          className="w-full border p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Rating:</label>
          <select
            className="border p-2 rounded-md"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[5, 4, 3, 2, 1].map((num) => (
              <option key={num} value={num}>
                {num} Stars
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleAddReview}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}
