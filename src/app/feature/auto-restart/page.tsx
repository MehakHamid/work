import Link from "next/link";
import { FaArrowLeft, FaSync, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

export default function AutoRestart() {
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
          <FaSync className="text-4xl text-blue-600 animate-spin-slow" />
          <h1 className="text-3xl font-bold text-gray-800">Auto Restart</h1>
        </div>
        <p className="text-gray-600 mt-2">
          Automatically resumes operation after a power failure, ensuring uninterrupted performance and system protection.
        </p>

        {/* Benefits Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" /> Benefits:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Ensures **continuous operation** without manual intervention.</li>
          <li>Protects **electronic appliances** from sudden power failures.</li>
          <li>Reduces **downtime in critical applications** like data centers.</li>
          <li>Enhances the **lifespan of power systems** and batteries.</li>
        </ul>

        {/* Technical Details Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaInfoCircle className="text-blue-500 mr-2" /> Technical Details:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Automatic recovery time: **5-10 seconds** after power restoration.</li>
          <li>Built-in **voltage stabilization** to prevent fluctuations.</li>
          <li>Compatible with **UPS, inverters, and smart power systems**.</li>
          <li>Smart detection to **avoid restarting in unsafe conditions**.</li>
        </ul>

        {/* Usage Scenarios */}
        <h2 className="text-xl font-semibold mt-6">Usage Scenarios:</h2>
        <p className="text-gray-700 mt-2">
          Ideal for **home power backups, industrial equipment, medical devices, and IT infrastructure**, where seamless operation is essential.
        </p>
      </div>
    </div>
  );
}
