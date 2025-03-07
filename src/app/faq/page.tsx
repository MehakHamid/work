"use client"
import React, { useState } from "react";

export default function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  ;
  const [language, setLanguage] = useState("en"); // Default English

  const faqs = [
    // ✅ Product Information
    {
      category: "Product Information",
      question: {
        en: "What is the difference between a pure sine wave and a modified sine wave inverter?",
        ur: "Pure sine wave aur modified sine wave inverter mein kya farq hai?",
      },
      answer: {
        en: "Pure sine wave inverters produce clean power similar to grid electricity, making them suitable for sensitive devices like medical equipment and laptops. Modified sine wave inverters are cheaper but may cause issues like overheating in appliances.",
        ur: "Pure sine wave inverters wohi quality ki bijli dete hain jo grid se milti hai, jo ke sensitive devices ke liye behtareen hai. Modified sine wave inverters saste hote hain lekin kuch appliances ke sath overheating ka masla hosakta hai.",
      },
    },
    {
      category: "Product Information",
      question: {
        en: "Can I use Trion inverters for solar power?",
        ur: "Kya Trion inverters solar power ke liye istemal ho sakte hain?",
      },
      answer: {
        en: "Yes, Trion offers hybrid inverters that support solar panels. Ensure compatibility with MPPT or PWM charge controllers before installation.",
        ur: "Jee haan, Trion ke hybrid inverters solar panels ko support karte hain. Installation se pehle MPPT ya PWM charge controller compatibility check karain.",
      },
    },

    // ✅ Troubleshooting
    {
      category: "Troubleshooting",
      question: {
        en: "Why is my inverter not charging the battery?",
        ur: "Mera inverter battery charge kyun nahi kar raha?",
      },
      answer: {
        en: "Check if the AC mains supply is connected and working. Also, ensure the battery terminals are clean and securely connected. A faulty battery or blown fuse may also cause charging issues.",
        ur: "Dekhein ke AC mains supply sahi kaam kar rahi hai. Battery terminals clean aur tightly connected hone chahiye. Faulty battery ya fuse issue bhi ho sakta hai.",
      },
    },
    {
      category: "Troubleshooting",
      question: {
        en: "Why is my inverter making a beeping sound?",
        ur: "Mera inverter beeping sound kyun kar raha hai?",
      },
      answer: {
        en: "Continuous beeping may indicate overload, low battery, or system fault. Reduce the load, check battery voltage, and restart the inverter.",
        ur: "Agar inverter continuously beep kar raha hai to iska matlab overload, low battery ya system fault ho sakta hai. Load kam karain, battery voltage check karain aur restart karain.",
      },
    },

    // ✅ Installation & Maintenance
    {
      category: "Installation & Maintenance",
      question: {
        en: "What is the recommended battery capacity for Trion inverters?",
        ur: "Trion inverters ke liye recommended battery capacity kya hai?",
      },
      answer: {
        en: "Battery capacity depends on your power needs. A 1200VA inverter typically uses a 12V 150Ah battery, while a 2200VA inverter may require two 12V 200Ah batteries in series.",
        ur: "Battery capacity aapki power zaroorat par depend karti hai. 1200VA inverter ke liye aam tor par 12V 150Ah battery use hoti hai, jabke 2200VA inverter ke liye do 12V 200Ah batteries series mein connect hoti hain.",
      },
    },
    {
      category: "Installation & Maintenance",
      question: {
        en: "How often should I service my inverter?",
        ur: "Inverter ki service kitne arsay baad karni chahiye?",
      },
      answer: {
        en: "It is recommended to clean the inverter every 3-6 months, check battery water levels (if applicable), and inspect connections for corrosion or loose wires.",
        ur: "Har 3-6 mahine baad inverter ki safai karein, battery ka pani check karein (agar required ho), aur terminals ki corrosion ya loose wires inspect karein.",
      },
    },

    // ✅ Warranty & Support
    {
      category: "Warranty & Support",
      question: {
        en: "What is the warranty period for Trion inverters?",
        ur: "Trion inverters ki warranty period kya hai?",
      },
      answer: {
        en: "Trion inverters come with a 1-2 year standard warranty. Ensure to keep the purchase invoice for warranty claims.",
        ur: "Trion inverters par aam tor par 1-2 saal ki warranty milti hai. Warranty claim ke liye purchase invoice zaroori hai.",
      },
    },
    {
      category: "Warranty & Support",
      question: {
        en: "Does Trion provide on-site repair service?",
        ur: "Kya Trion on-site repair service provide karta hai?",
      },
      answer: {
        en: "Trion offers limited on-site repair services in select cities. Contact customer support for details.",
        ur: "Trion kuch selected cities mein on-site repair service deta hai. Tafseelat ke liye customer support se rabta karein.",
      },
    },

    // ✅ Battery & Performance
    {
      category: "Battery & Performance",
      question: {
        en: "Can I use a car battery with my inverter?",
        ur: "Kya inverter ke sath car battery istemal ki ja sakti hai?",
      },
      answer: {
        en: "Car batteries are not recommended for inverters as they are designed for short bursts of high power rather than deep discharge cycles. Use deep-cycle batteries for better performance.",
        ur: "Car batteries inverter ke liye recommended nahi hain kyunki yeh short bursts of power ke liye design ki gayi hain. Behtar performance ke liye deep-cycle batteries use karein.",
      },
    },
    {
      category: "Battery & Performance",
      question: {
        en: "How can I extend my battery life?",
        ur: "Battery ki zindagi kaise barhayi ja sakti hai?",
      },
      answer: {
        en: "Avoid deep discharges, keep terminals clean, and charge the battery fully before use. Also, ensure proper ventilation to prevent overheating.",
        ur: "Battery ko puri tarah charge karne ke baad use karein, deep discharge se bachen, aur terminals clean rakhein. Zyada garmi se bachne ke liye achi ventilation zaroori hai.",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold text-center mb-5">
        {language === "en" ? "Frequently Asked Questions (FAQs)" : "اکثر پوچھے جانے والے سوالات"}
      </h1>

      {/* Language Toggle */}
      <div className="flex justify-center mb-4">
        <button className="px-4 py-2 rounded bg-blue-600 text-white mx-2" onClick={() => setLanguage("en")}>
          English
        </button>
        <button className="px-4 py-2 rounded bg-green-600 text-white mx-2" onClick={() => setLanguage("ur")}>
          اردو
        </button>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold cursor-pointer" onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}>
              {faq.question[language]}
            </h2>
            {selectedQuestion === index && <p className="text-gray-700 mt-2">{faq.answer[language]}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
