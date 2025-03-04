import React from "react";

// Define TypeScript types for the models
interface ModelType {
  name: string;
  power: string;
  features: string[];
  suitableFor: string;
}

// List of benefits
const benefits = [
  "Reliable & Efficient Power Backup – Stable performance for all needs",
  "Advanced Safety Features – Protection against overload and short circuits",
  "Smart Monitoring – LCD display for easy status checks",
  "Energy-Saving Technology – Reduces electricity costs",
  "Intelligent Battery Protection – Multiple battery management included in all models, BMS available in Wise-3004 and above",
  "Three-Phase Compatibility – Available in Wise-4004 and above for high-power applications",
  "Optimized Solar Integration – MPPT range 30V - 80V for Wise-1201 & Wise-2001, and 60V - 450V for Wise-3004 & above",
  "Dual Load Option – Available from Wise-3604 & above for efficient power distribution",
  "WiFi Monitoring (Built-in) – Available from Wise-4004 & above for remote system tracking",
  "Dual MPPT Feature – Available in Wise-8004 for enhanced solar energy utilization",
  "Supports Essential Appliances – From small home devices to large air conditioners",
];

// List of models with their details
const models: ModelType[] = [
  {
    name: "Wise-1201",
    power: "1KVA",
    features: [
      "Pure Sine Wave Output",
      "Fast Battery Charging",
      "Multiple Battery Management",
      "MPPT Range: 30V - 80V",
    ],
    suitableFor: "LED bulbs, TV, WiFi router, laptop, small fans, desktop PC",
  },
  {
    name: "Wise-2001",
    power: "2KVA",
    features: [
      "LCD Display",
      "Overload & Short Circuit Protection",
      "Multiple Battery Management",
      "MPPT Range: 30V - 80V",
    ],
    suitableFor: "LED bulbs, TV, WiFi router, laptop, desktop PC, ceiling fan, fridge (small)",
  },
  {
    name: "Wise-3004",
    power: "3KVA",
    features: [
      "Smart Cooling System",
      "Battery Management System (BMS)",
      "MPPT Range: 60V - 450V",
    ],
    suitableFor: "LED bulbs, TV, multiple fans, laptop, desktop PC, refrigerator (medium), water pump (small)",
  },
  {
    name: "Wise-3604",
    power: "3.6KVA",
    features: [
      "Hybrid Functionality",
      "Surge & Spike Protection",
      "Battery Management System (BMS)",
      "MPPT Range: 60V - 450V",
      "Dual Load Option",
    ],
    suitableFor: "LED bulbs, TV, multiple fans, laptop, desktop PC, refrigerator (medium-large), water pump (medium), iron (occasional use)",
  },
  {
    name: "Wise-4004",
    power: "4KVA",
    features: [
      "Pure Sine Wave Technology",
      "Auto Restart Function",
      "Battery Management System (BMS)",
      "MPPT Range: 60V - 450V",
      "Three-Phase Compatibility",
      "WiFi Monitoring (Built-in)",
    ],
    suitableFor: "LED bulbs, multiple TVs, ceiling fans, laptop, desktop PC, refrigerator (large), deep freezer, washing machine, water pump (medium-large), air cooler, iron (regular use)",
  },
  {
    name: "Wise-6004",
    power: "6KVA",
    features: [
      "Heavy Load Capacity",
      "Multiple Battery Configuration Options",
      "Battery Management System (BMS)",
      "MPPT Range: 60V - 450V",
      "Three-Phase Compatibility",
      "Dual Load Option",
      "WiFi Monitoring (Built-in)",
    ],
    suitableFor: "LED bulbs, multiple TVs, ceiling fans, refrigerators, deep freezer, water pump (large), washing machine, air cooler, 1-TON air conditioner (split unit), microwave, iron (frequent use)",
  },
  {
    name: "Wise-8004",
    power: "8KVA",
    features: [
      "Three-Phase Compatibility",
      "Industrial-Grade Components",
      "Battery Management System (BMS)",
      "MPPT Range: 60V - 450V",
      "Dual MPPT Feature",
      "Dual Load Option",
      "WiFi Monitoring (Built-in)",
    ],
    suitableFor: "LED bulbs, multiple TVs, ceiling fans, refrigerators, deep freezer, washing machine, large water pump, 1.5 to 2-TON air conditioner (split unit), microwave, heavy iron use, industrial appliances",
  },
];

// Model card component
const ModelCard: React.FC<{ model: ModelType }> = ({ model }) => {
  return (
    <div className="bg-gradient-to-br from-[#004AAD] to-[#20ebf1] shadow-lg rounded-2xl p-6 m-4 w-full md:w-1/2 lg:w-1/3 transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out text-white">
      <h2 className="text-xl font-bold">{model.name} - {model.power}</h2>
      <ul className="mt-2">
        {model.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">✅ {feature}</li>
        ))}
      </ul>
      <p className="mt-3 text-sm">
        <strong>Suitable For:</strong> {model.suitableFor}
      </p>
    </div>
  );
};

// Main page component
const ModelsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] text-gray-600 p-8">
      <h1 className="text-4xl font-bold text-center text-black">
        Trion WISE Series - Advanced Power Backup Solutions
      </h1>
      <p className="text-center text-gray-300 mt-2">
        Uninterrupted Power for Homes & Businesses
      </p>

      <div className="bg-gradient-to-r from-[#00274D] to-[#00509E] shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold text-white text-center">
          Why Choose Trion WISE Series?
        </h2>
        <ul className="list-disc text-gray-300 mt-4 space-y-2 px-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="hover:text-blue-500 transition duration-200">✅ {benefit}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap justify-center mt-6">
        {models.map((model, index) => (
          <ModelCard key={index} model={model} />
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;
