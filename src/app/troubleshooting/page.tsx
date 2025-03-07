"use client";
import { useState } from "react";

const issues = [
  {
    id: 1,
    title: { english: "Inverter Won't Turn On", urdu: "Inverter on nahi ho raha" },
    summary: { english: "Check battery, connections, and fuses.", urdu: "Battery, connections aur fuses check karein." },
    causes: {
      english: ["Battery is dead or faulty", "Loose cable connections", "Blown fuse"],
      urdu: ["Battery khatam ya kharab hai", "Cable connection loose hai", "Fuse blown ho gaya hai"],
    },
    solutions: {
      english: [
        "Charge or replace the battery.",
        "Check and secure all cable connections.",
        "Replace the fuse if necessary.",
      ],
      urdu: [
        "Battery charge karein ya replace karein.",
        "Cable connections check karein aur secure karein.",
        "Agar fuse blown ho gaya hai to replace karein.",
      ],
    },
  },
  {
    id: 2,
    title: { english: "Low Output Voltage", urdu: "Voltage kam araha hai" },
    summary: { english: "Reduce load and check transformer.", urdu: "Load kam karein aur transformer check karein." },
    causes: {
      english: ["Overloaded inverter", "Faulty transformer", "Weak battery"],
      urdu: ["Inverter overload ho gaya", "Transformer kharab hai", "Battery weak ho rahi hai"],
    },
    solutions: {
      english: [
        "Reduce load by unplugging extra devices.",
        "Check transformer and replace if needed.",
        "Replace weak battery with a new one.",
      ],
      urdu: [
        "Load kam karein, extra devices unplug karein.",
        "Transformer check karein, zaroorat ho to replace karein.",
        "Agar battery weak ho gayi hai to naye se replace karein.",
      ],
    },
  },
  {
    id: 3,
    title: { english: "Mobile App Connection Issue", urdu: "Mobile app connect nahi ho raha" },
    summary: { english: "Check Bluetooth, WiFi, and app settings.", urdu: "Bluetooth, WiFi aur app settings check karein." },
    causes: {
      english: ["Bluetooth/WiFi is off", "App permissions not given", "Firmware update required"],
      urdu: ["Bluetooth/WiFi off hai", "App permissions allow nahi ki gayi", "Firmware update zaroori hai"],
    },
    solutions: {
      english: [
        "Turn on Bluetooth and WiFi.",
        "Check app permissions in settings.",
        "Update the firmware if required.",
      ],
      urdu: [
        "Bluetooth aur WiFi on karein.",
        "Settings mein jakar app permissions check karein.",
        "Agar zaroori ho to firmware update karein.",
      ]
    }
    },
    
    {
        id: 4,
        title: { english: "Battery Not Charging", urdu: "Battery charge nahi ho rahi" },
        summary: { 
          english: "Check charger, battery connections, and terminals.", 
          urdu: "Charger, battery connections aur terminals check karein." 
        },
        causes: {
          english: ["Loose battery connections", "Faulty charger", "Battery expired"],
          urdu: ["Battery connections loose hain", "Charger kharab hai", "Battery zindagi puri kar chuki hai"],
        },
        solutions: {
          english: [
            "Tighten battery connections.",
            "Test charger with another battery and replace if faulty.",
            "Replace the old battery with a new one.",
          ],
          urdu: [
            "Battery connections mazboot karein.",
            "Charger ko doosri battery ke sath test karein, agar kharab ho to replace karein.",
            "Purani battery ko naye se replace karein.",
          ],
        },
      },
      {
        id: 5,
        title: { english: "Low Output Voltage", urdu: "Voltage kam araha hai" },
        summary: { 
          english: "Reduce load and check transformer.", 
          urdu: "Load kam karein aur transformer check karein." 
        },
        causes: {
          english: ["Overloaded inverter", "Faulty transformer", "Weak battery"],
          urdu: ["Inverter overload ho gaya", "Transformer kharab hai", "Battery weak ho rahi hai"],
        },
        solutions: {
          english: [
            "Reduce load by unplugging extra devices.",
            "Check transformer and replace if needed.",
            "Replace weak battery with a new one.",
          ],
          urdu: [
            "Load kam karein, extra devices unplug karein.",
            "Transformer check karein, zaroorat ho to replace karein.",
            "Agar battery weak ho gayi hai to naye se replace karein.",
          ],
        },
      },
      {
        id: 6,
        title: { english: "Inverter Overheating", urdu: "Inverter zyada garam ho raha hai" },
        summary: { 
          english: "Ensure proper ventilation and check cooling fan.", 
          urdu: "Behtareen ventilation ko ensure karein aur cooling fan check karein." 
        },
        causes: {
          english: ["Blocked ventilation", "Faulty cooling fan", "Overloaded inverter"],
          urdu: ["Ventilation blocked hai", "Cooling fan kharab hai", "Inverter overload ho gaya hai"],
        },
        solutions: {
          english: [
            "Place the inverter in a well-ventilated area.",
            "Clean air vents and ensure proper airflow.",
            "Replace faulty cooling fan if not working.",
          ],
          urdu: [
            "Inverter ko ache hawadar jagah par rakhein.",
            "Air vents saaf karein aur airflow ko behtar banayein.",
            "Agar cooling fan kaam nahi kar raha to replace karein.",
          ],
        },
      },
      {
        id: 7,
        title: { english: "Inverter Not Turning On", urdu: "Inverter on nahi ho raha" },
        summary: { 
          english: "Check power supply, fuse, and internal circuits.", 
          urdu: "Power supply, fuse aur internal circuits check karein." 
        },
        causes: {
          english: ["Blown fuse", "No power supply", "Internal circuit failure"],
          urdu: ["Fuse blown ho gaya hai", "Power supply nahi mil rahi", "Internal circuit fail ho gaya hai"],
        },
        solutions: {
          english: [
            "Replace the blown fuse with a new one.",
            "Check power source and ensure stable electricity supply.",
            "Consult a technician for internal circuit repair.",
          ],
          urdu: [
            "Blown fuse ko naye se replace karein.",
            "Power source check karein aur stable supply ensure karein.",
            "Internal circuit repair ke liye technician se rujoo karein.",
          ],
        },
      }
]
export default function TroubleshootingPage() {
  const [language, setLanguage] = useState("english");
  const [selectedIssue, setSelectedIssue] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Language Toggle */}
      <div className="flex justify-end">
        <button
          onClick={() => setLanguage("english")}
          className={`px-4 py-2 mx-1 rounded ${
            language === "english" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("urdu")}
          className={`px-4 py-2 mx-1 rounded ${
            language === "urdu" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Urdu
        </button>
      </div>

      <h1 className="text-3xl font-bold my-4 text-center">
        {language === "english" ? "Troubleshooting Guide" : "Masail Aur Hal"}
      </h1>

      {/* Issue List */}
      {!selectedIssue ? (
        <div className="space-y-4">
          {issues.map((issue) => (
            <div
              key={issue.id}
              onClick={() => setSelectedIssue(issue)}
              className="p-4 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer transition"
            >
              <h2 className="text-xl font-semibold">{issue.title[language]}</h2>
              <p className="text-gray-600">{issue.summary[language]}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold">{selectedIssue.title[language]}</h2>
          <h3 className="text-xl font-semibold mt-4">📌 {language === "english" ? "Possible Causes" : "Mumkin Waja"}</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {selectedIssue.causes[language].map((cause, i) => (
              <li key={i}>{cause}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mt-4">✅ {language === "english" ? "Solutions" : "Hal"}</h3>
          <ul className="list-disc ml-6 text-green-700">
            {selectedIssue.solutions[language].map((solution, i) => (
              <li key={i}>{solution}</li>
            ))}
          </ul>

          <button onClick={() => setSelectedIssue(null)} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
            🔙 {language === "english" ? "Back to Issues" : "Masail Par Wapas Jayein"}
          </button>
        </div>
      )}
    </div>
  );
}
