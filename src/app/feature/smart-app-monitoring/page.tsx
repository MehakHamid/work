import Link from "next/link";
import { FaArrowLeft, FaMobileAlt, FaCheckCircle, FaWifi, FaCogs } from "react-icons/fa";

export default function SmartAppMonitoring() {
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
          <FaMobileAlt className="text-4xl text-blue-600 animate-pulse" />
          <h1 className="text-3xl font-bold text-gray-800">Smart App Monitoring</h1>
        </div>
        <p className="text-gray-600 mt-2">
          **Real-time monitoring & control** via a dedicated mobile app, ensuring **seamless energy management** from anywhere.
        </p>

        {/* Benefits Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" /> Benefits:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Monitor **power consumption & efficiency** in real-time.</li>
          <li>Get **instant alerts** for voltage fluctuations & system issues.</li>
          <li>Control **on/off functions remotely** via the app.</li>
          <li>Optimize **energy usage** with smart insights & analytics.</li>
        </ul>

        {/* Technical Details Section */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaCogs className="text-blue-500 mr-2" /> Technical Details:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
          <li>Wi-Fi & **Bluetooth 5.0 connectivity** for seamless pairing.</li>
          <li>Supports **Android & iOS** applications.</li>
          <li>Real-time **data logging & power statistics tracking**.</li>
          <li>Secure **AES-256 encryption** for data protection.</li>
        </ul>

        {/* Usage Scenarios */}
        <h2 className="text-xl font-semibold mt-6 flex items-center">
          <FaWifi className="text-red-500 mr-2" /> Usage Scenarios:
        </h2>
        <p className="text-gray-700 mt-2">
          Ideal for **home automation, renewable energy systems, smart inverters, and business power monitoring** where remote control & efficiency tracking are essential.
        </p>
      </div>
    </div>
  );
}

