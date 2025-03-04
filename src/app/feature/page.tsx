import Link from "next/link";
import { FaBolt, FaShieldAlt, FaBatteryFull, FaSync, FaFan } from "react-icons/fa";

const features = [
  {
    href: "/feature/high-efficiency",
    icon: <FaBolt />,
    title: "High Efficiency",
    description: "Maximizes power conversion for energy savings.",
  },
  {
    href: "/feature/overload-protection",
    icon: <FaShieldAlt />,
    title: "Overload Protection",
    description: "Automatically safeguards against voltage surges.",
  },
  {
    href: "/feature/long-battery-life",
    icon: <FaBatteryFull />,
    title: "Long Battery Life",
    description: "Optimized charging to extend battery lifespan.",
  },
  {
    href: "/feature/auto-restart",
    icon: <FaSync />,
    title: "Auto Restart",
    description: "Resumes operation automatically after a power failure.",
  },
  {
    href: "/feature/silent-cooling-fan",
    icon: <FaFan />,
    title: "Silent Cooling Fan",
    description: "Advanced cooling system for noiseless operation.",
  },
  {
    href: "/feature/smart-app-monitoring",
    icon: <FaFan />,
    title: "Smart App Monitoring",
    description: "Monitor & control via a mobile app in real-time.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="p-10 min-h-screen bg-white">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
        Key Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Link
            key={index}
            href={feature.href}
            className="group relative block p-6 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl text-blue-500 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-800">{feature.title}</h2>
            </div>
            <p className="text-gray-600 mt-3 text-sm">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
