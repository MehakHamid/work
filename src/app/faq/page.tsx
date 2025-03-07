"use client";
import React, { useState } from "react";

export default function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [language, setLanguage] = useState<"en" | "ur">("en"); // Ensuring TypeScript knows only "en" or "ur" is valid

  const faqs = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold text-center mb-5">
        {language === "en" ? "Frequently Asked Questions (FAQs)" : "اکثر پوچھے جانے والے سوالات"}
      </h1>

      {/* Language Toggle */}
      <div className="flex justify-center mb-4">
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white mx-2"
          onClick={() => setLanguage("en")}
        >
          English
        </button>
        <button
          className="px-4 py-2 rounded bg-green-600 text-white mx-2"
          onClick={() => setLanguage("ur")}
        >
          اردو
        </button>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2
              className="text-lg font-semibold cursor-pointer"
              onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
            >
              {faq.question[language]}
            </h2>
            {selectedQuestion === index && (
              <p className="text-gray-700 mt-2">{faq.answer[language]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
