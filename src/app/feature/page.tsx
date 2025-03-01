import Link from "next/link";
import { FaBolt, FaShieldAlt, FaBatteryFull, FaSync, FaFan, FaMobileAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    { id: "high-efficiency", icon: <FaBolt />, title: "High Efficiency", description: "Maximizes power conversion for energy savings." },
    { id: "overload-protection", icon: <FaShieldAlt />, title: "Overload Protection", description: "Automatically safeguards against voltage surges." },
    { id: "long-battery-life", icon: <FaBatteryFull />, title: "Long Battery Life", description: "Optimized charging to extend battery lifespan." },
    { id: "auto-restart", icon: <FaSync />, title: "Auto Restart", description: "Resumes operation automatically after a power failure." },
    { id: "silent-cooling-fan", icon: <FaFan />, title: "Silent Cooling Fan", description: "Advanced cooling system for noiseless operation." },
    { id: "smart-app-monitoring", icon: <FaMobileAlt />, title: "Smart App Monitoring", description: "Monitor & control via a mobile app in real-time." },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      {/* 🔹 Page Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700">Trion Inverter Features</h1>
        <p className="text-lg text-gray-600 mt-2">Advanced technology for reliable performance</p>
      </div>

      {/* 🔹 Features Grid */}
      <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link key={index} href={`/features/${feature.id}`}>
            <div className="feature-card bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl text-blue-600">{feature.icon}</div>
              <h2 className="text-xl font-bold mt-4">{feature.title}</h2>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
