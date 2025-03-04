import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaCheckCircle, FaInfoCircle, FaBolt } from "react-icons/fa";

const HighEfficiency = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100 flex justify-center items-center">
      <div className="max-w-2xl bg-white shadow-lg rounded-lg p-6">
        {/* Back to Features Button */}
        <Link href="/feature">
          <button className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300">
            <FaArrowLeft className="mr-2" /> Back to Features
          </button>
        </Link>

        {/* Title */}
        <div className="flex items-center space-x-3 mt-4">
          <FaBolt className="text-4xl text-yellow-500" />
          <h1 className="text-3xl font-bold text-gray-800">High Efficiency</h1>
        </div>
        <p className="text-gray-600 mt-2">
          Maximizes power conversion for energy savings, ensuring stable and optimized output.
        </p>

        {/* Benefits Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" /> Benefits:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Reduces electricity costs by optimizing energy use.</li>
          <li>Minimizes power wastage and enhances sustainability.</li>
          <li>Provides stable voltage output, reducing fluctuations.</li>
          <li>Increases lifespan of electrical appliances.</li>
        </ul>

        {/* Technical Details Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaInfoCircle className="text-blue-500 mr-2" /> Technical Details:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Efficiency rating: <strong>90%+ power conversion</strong>.</li>
          <li>Pure sine wave output ensures stable power delivery.</li>
          <li>Low energy loss with intelligent power management.</li>
          <li>Advanced thermal cooling for enhanced performance.</li>
        </ul>

        {/* Usage Scenarios */}
        <h2 className="text-xl font-semibold mt-6">Usage Scenarios:</h2>
        <p className="text-gray-700 mt-2">
          Ideal for residential, commercial, and industrial power backup systems where energy efficiency is critical.
        </p>
      </div>
    </div>
  );
};

export default HighEfficiency;
