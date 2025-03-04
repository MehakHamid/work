import Link from "next/link";
import { FaArrowLeft, FaBatteryFull, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

export default function LongBatteryLife() {
  return (
    <div className="min-h-screen p-8 bg-gray-100 flex justify-center items-center">
      <div className="max-w-2xl bg-white shadow-lg rounded-lg p-6">
        {/* Back to Features Button */}
        <Link href="/feature">
          <button className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300">
            <FaArrowLeft className="mr-2" /> Back to Features
          </button>
        </Link>

        {/* Title & Icon */}
        <div className="flex items-center space-x-3 mt-4">
          <FaBatteryFull className="text-4xl text-green-600 animate-pulse" />
          <h1 className="text-3xl font-bold text-gray-800">Long Battery Life</h1>
        </div>
        <p className="text-gray-600 mt-2">
          Advanced power management ensures longer battery lifespan, efficient charging, and stable power output.
        </p>

        {/* Benefits Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" /> Benefits:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Extends **battery lifespan** by preventing overcharging.</li>
          <li>Reduces **power loss and overheating**.</li>
          <li>Improves **backup power reliability**.</li>
          <li>Optimized **fast-charging without damage**.</li>
        </ul>

        {/* Technical Details Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaInfoCircle className="text-blue-500 mr-2" /> Technical Details:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Battery efficiency: **Up to 95% energy retention**.</li>
          <li>Smart charging algorithm to **prevent over-discharge**.</li>
          <li>Supports **Lithium-ion, Lead-Acid, and AGM batteries**.</li>
          <li>Auto cut-off at **optimal charge levels**.</li>
        </ul>

        {/* Usage Scenarios */}
        <h2 className="text-xl font-semibold mt-6">Usage Scenarios:</h2>
        <p className="text-gray-700 mt-2">
          Ideal for **solar power systems, UPS backups, electric vehicles, and mobile power banks**, ensuring long-lasting performance.
        </p>
      </div>
    </div>
  );
}
