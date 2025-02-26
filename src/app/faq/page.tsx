"use client"
import { useState } from "react";

const faqData = [
  { question: "How do I install the inverter?", answer: "Follow the installation guide and connect cables properly." },
  { question: "Which battery type is best?", answer: "Tubular batteries work best with Trion Inverters." },
  { question: "How to reset the inverter?", answer: "Press and hold the reset button for 10 seconds." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>

      <main className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-blue-600">Frequently Asked Questions</h2>

        {faqData.map((item, index) => (
          <div key={index} className="mt-4 border-b">
            <button onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left text-lg font-semibold py-2 focus:outline-none">
              {item.question}
            </button>
            {openIndex === index && <p className="text-gray-700 mt-2">{item.answer}</p>}
          </div>
        ))}
      </main>
    </>
  );
}
