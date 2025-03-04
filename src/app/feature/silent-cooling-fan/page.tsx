import Link from "next/link";
import { FaArrowLeft, FaFan, FaCheckCircle, FaInfoCircle, FaTemperatureHigh } from "react-icons/fa";

export default function SilentCoolingFan() {
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
          <FaFan className="text-4xl text-blue-600 animate-spin-slow" />
          <h1 className="text-3xl font-bold text-gray-800">Silent Cooling Fan</h1>
        </div>
        <p className="text-gray-600 mt-2">
          Advanced cooling technology with **whisper-quiet operation**, ensuring maximum efficiency without noise.
        </p>

        {/* Benefits Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" /> Benefits:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Maintains **optimal temperature without noise**.</li>
          <li>Improves **device lifespan** by preventing overheating.</li>
          <li>Energy-efficient **low-power fan design**.</li>
          <li>Smart **speed control based on heat levels**.</li>
        </ul>

        {/* Technical Details Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaInfoCircle className="text-blue-500 mr-2" /> Technical Details:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Noise level: **Below 25 dB** (Whisper-quiet).</li>
          <li>Auto-speed adjustment based on **real-time temperature**.</li>
          <li>Consumes **30% less power** than standard fans.</li>
          <li>Advanced **dual-ball bearing mechanism** for durability.</li>
        </ul>

        {/* Usage Scenarios */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaTemperatureHigh className="text-red-500 mr-2" /> Usage Scenarios:
        </h2>
        <p className="text-gray-700 mt-2">
          Ideal for **power inverters, gaming consoles, laptops, and solar energy systems** where quiet yet effective cooling is required.
        </p>
      </div>
    </div>
  );
}
