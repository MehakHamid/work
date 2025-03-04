"use client"
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

const faqData = [
  {
    question: "What is Smart App Monitoring and how does it work?",
    answer:
      "Smart App Monitoring allows users to track energy consumption, manage device settings remotely, and receive real-time alerts through a mobile application. This feature enhances efficiency by providing insights into usage patterns and optimizing power consumption.",
  },
  {
    question: "How does Overload Protection ensure device safety?",
    answer:
      "Overload Protection works by detecting voltage spikes or excessive power loads. When the system senses an anomaly, it instantly disconnects power to prevent electrical hazards. This feature extends the lifespan of appliances and prevents overheating.",
  },
  {
    question: "What is the benefit of Auto Restart in electrical devices?",
    answer:
      "Auto Restart enables devices to resume operation automatically after a power failure. This is crucial in locations with frequent power outages, as it prevents disruptions and ensures continuous functionality without manual intervention.",
  },
  {
    question: "How does a Silent Cooling Fan improve performance?",
    answer:
      "A Silent Cooling Fan is designed with noise reduction technology and efficient airflow mechanisms. It ensures that the internal components remain cool without generating excessive noise, making it ideal for home and office environments.",
  },
  {
    question: "What factors contribute to Long Battery Life in electronics?",
    answer:
      "Long Battery Life is achieved through optimized charging cycles, intelligent power management, and high-capacity battery cells. These technologies minimize energy waste and extend the battery’s overall lifespan.",
  },
  {
    question: "How does Adaptive Voltage Regulation enhance efficiency?",
    answer:
      "Adaptive Voltage Regulation adjusts power output dynamically based on the connected device's requirements. This minimizes energy loss and enhances operational stability, particularly in regions with fluctuating power supply.",
  },
  {
    question: "What role does Temperature Control play in energy systems?",
    answer:
      "Temperature Control mechanisms prevent devices from overheating by adjusting fan speeds, modifying power usage, or activating heat dissipation systems. This ensures safety and prolongs the life of electronic components.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center">
        <FaQuestionCircle className="text-6xl text-blue-700 mb-4" />
        <h1 className="text-4xl font-bold text-blue-700">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-2 max-w-lg">
          Find answers to commonly asked questions about our advanced energy solutions.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-3xl mt-6">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 border border-gray-300 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left p-4 bg-white shadow-md rounded-lg hover:bg-blue-50 transition duration-300"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-blue-600" />
              ) : (
                <FaChevronDown className="text-blue-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-700 rounded-b-lg">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
