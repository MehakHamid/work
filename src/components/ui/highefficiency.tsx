"use client"
import { useState } from "react";
import { motion } from "framer-motion";

export default function EfficiencyComparison() {
  const [selectedType, setSelectedType] = useState("solar");

  const efficiencyData = {
    solar: { efficiency: "98%", description: "Solar inverters with MPPT extract maximum power from solar panels." },
    nonSolar: { efficiency: "90%", description: "High-efficiency pure sine wave inverters minimize energy loss." }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-blue-700 mb-6"
      >
        UPS Inverter Efficiency Comparison
      </motion.h1>
      
      <div className="flex space-x-4 mb-6">
        <button 
          onClick={() => setSelectedType("solar")} 
          className={`px-4 py-2 rounded-lg font-semibold transition ${selectedType === "solar" ? "bg-blue-700 text-white" : "bg-white text-blue-700 border border-blue-700 hover:bg-blue-200"}`}
        >
          Solar Inverter
        </button>
        <button 
          onClick={() => setSelectedType("nonSolar")} 
          className={`px-4 py-2 rounded-lg font-semibold transition ${selectedType === "nonSolar" ? "bg-blue-700 text-white" : "bg-white text-blue-700 border border-blue-700 hover:bg-blue-200"}`}
        >
          Non-Solar Inverter
        </button>
      </div>

      <motion.div 
        key={selectedType}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center"
      >
        <h2 className="text-2xl font-semibold text-blue-700">Efficiency: {efficiencyData[selectedType].efficiency}</h2>
        <p className="text-gray-600 mt-2">{efficiencyData[selectedType].description}</p>
      </motion.div>
    </div>
  );
}
