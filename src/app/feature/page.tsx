import { FaBolt, FaShieldAlt, FaBatteryFull, FaSync, FaFan, FaMobileAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    { icon: <FaBolt />, title: "High Efficiency", description: "Maximizes power conversion for energy savings." },
    { icon: <FaShieldAlt />, title: "Overload Protection", description: "Automatically safeguards against voltage surges." },
    { icon: <FaBatteryFull />, title: "Long Battery Life", description: "Optimized charging to extend battery lifespan." },
    { icon: <FaSync />, title: "Auto Restart", description: "Resumes operation automatically after a power failure." },
    { icon: <FaFan />, title: "Silent Cooling Fan", description: "Advanced cooling system for noiseless operation." },
    { icon: <FaMobileAlt />, title: "Smart App Monitoring", description: "Monitor & control via a mobile app in real-time." },
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
          <div key={index} className="feature-card">
            <div className="text-5xl text-blue-600">{feature.icon}</div>
            <h2 className="text-xl font-bold mt-4">{feature.title}</h2>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
