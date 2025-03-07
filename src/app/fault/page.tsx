"use client"
import React, { useState } from "react";

type Fault = {
  code: string;
  issue: string;
  solution: string;
};

export default function FaultGuide() {
  const [search, setSearch] = useState("");
  const [selectedFault, setSelectedFault] = useState<Fault | null>(null); // ✅ Fix: Define proper type

  const faultCodes: Fault[] = [
    { code: "A56", issue: "Battery Low", solution: "Charge or replace the battery. Ensure the battery connections are secure." },
    { code: "A64", issue: "Overload Warning", solution: "Reduce the connected load. Unplug unnecessary devices and restart the system." },
    // Add other faults here...
  ];

  const filteredCodes = faultCodes.filter((fault) =>
    fault.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold text-center mb-5">Inverter UPS Fault Codes Guide</h1>
      <input
        type="text"
        placeholder="Search Fault Code..."
        className="w-full p-2 mb-4 border rounded focus:ring-2 focus:ring-blue-400 transition-all"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid md:grid-cols-3 gap-4">
        {filteredCodes.length > 0 ? (
          filteredCodes.map((fault, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow rounded transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedFault(fault)} // ✅ No error now
            >
              <h2 className="text-xl font-semibold">{fault.code}</h2>
              <p className="text-gray-700 font-medium">Issue: <span className="text-red-500">{fault.issue}</span></p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No fault codes found. Try a different search.</p>
        )}
      </div>
      {selectedFault && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-2xl font-bold mb-2">{selectedFault.code}</h2>
            <p className="text-gray-700"><strong>Issue:</strong> {selectedFault.issue}</p>
            <p className="text-gray-700"><strong>Solution:</strong> {selectedFault.solution}</p>
            <button onClick={() => setSelectedFault(null)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
