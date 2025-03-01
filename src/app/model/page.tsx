"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const models = [
  {
    id: 1,
    name: "CONNECT-1201",
    capacity: "1000W",
    features: [
      "1200VA/1000W/12VDC/240VAC",
      "Wide input voltage range 90-280 VAC",
      "Overload and short circuit protection",
      "LCD & LED display Indicator",
      "Charge current varies 0A - 25 Ampere Selectable",
      "Alarm for Low Battery, Overload, Fault indication"
    ],
    suitable: "25 LED Bulb OR 8 LED Tubelights and 5 Fans"
  },
  {
    id: 2,
    name: "CONNECT-2201",
    capacity: "2200VA / 1800W",
    features: [
      "2200VA/1800W/24VDC/240VAC",
      "Wide input voltage range 90-280 VAC",
      "Overload and short circuit protection",
      "LCD & LED display Indicator",
      "Charge current varies 0A - 20 Ampere Selectable",
      "Alarm for Low Battery, Overload, Fault indication"
    ],
    suitable: "50 LED Bulb OR 15 LED Tubelights and 12 Fans"
  },
  {
    id: 3,
    name: "WISE-1201",
    capacity: "1000W",
    features: [
      "MPPT modified sine wave inverter with 70A MPPT Charger",
      "Maximum PV Array Power 960W",
      "Wide input voltage range: 90-280 VAC",
      "Overload and short circuit protection",
      "3-stage charger control for effective charging while preventing overcharging",
      "Thermal protection",
      "LCD & LED RGB display indicator"
    ],
    suitable: "25 LED Bulb OR 8 LED Tubelights and 5 Fans"
  },
  {
    id: 4,
    name: "WISE-2001",
    capacity: "1800W",
    features: [
      "MPPT modified sine wave inverter with 70A MPPT Charger",
      "Maximum PV Array Power 1650W",
      "Wide input voltage range: 90-280 VAC",
      "Overload and short circuit protection",
      "3-stage charger control for effective charging while preventing overcharging",
      "Thermal protection",
      "LCD & LED RGB display indicator"
    ],
    suitable: "50 LED Bulb OR 15 LED Tubelights and 12 Fans"
  }
];

export default function ModelsPage() {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Our Models
      </h1>

      {/* Model Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {models.map((model) => (
          <motion.div
            key={model.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedModel(model)}
          >
            <h2 className="text-xl font-semibold">{model.name}</h2>
            <p className="text-gray-600">{model.capacity}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal for Model Details with Animation */}
      <AnimatePresence>
        {selectedModel && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModel(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
                onClick={() => setSelectedModel(null)}
              >
                ✖
              </button>
              <h2 className="text-xl font-bold mb-3">{selectedModel.name}</h2>
              <p className="text-gray-600 mb-2">
                <strong>Capacity:</strong> {selectedModel.capacity}
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                {selectedModel.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className="mt-4 text-green-700">
                <strong>Suitable for:</strong> {selectedModel.suitable}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
