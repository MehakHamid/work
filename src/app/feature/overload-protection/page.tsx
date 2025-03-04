import Link from "next/link";
import { FaArrowLeft, FaShieldAlt, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

export default function OverloadProtection() {
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
          <FaShieldAlt className="text-4xl text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Overload Protection</h1>
        </div>
        <p className="text-gray-600 mt-2">
          Automatically safeguards electrical systems against voltage surges, preventing damage to appliances and circuits.
        </p>

        {/* Benefits Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" /> Benefits:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Prevents electrical damage by managing sudden power surges.</li>
          <li>Increases lifespan of connected appliances and devices.</li>
          <li>Ensures user safety by reducing risks of short circuits and fires.</li>
          <li>Automatically disconnects power supply in case of excessive load.</li>
        </ul>

        {/* Technical Details Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaInfoCircle className="text-blue-500 mr-2" /> Technical Details:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Overload detection threshold: <strong>Auto-cutoff at 110% load</strong>.</li>
          <li>Built-in surge suppression to handle sudden voltage spikes.</li>
          <li>Thermal protection with automatic shutdown at high temperatures.</li>
          <li>Compatible with both AC and DC power systems.</li>
        </ul>

        {/* Usage Scenarios */}
        <h2 className="text-xl font-semibold mt-6">Usage Scenarios:</h2>
        <p className="text-gray-700 mt-2">
          Ideal for homes, offices, and industrial setups where reliable protection against power fluctuations is essential.
        </p>
      </div>
    </div>
  );
}

