"use client"
import { useState } from "react";

const errorCodes: Record<string, string> = {
  "E01": "Overload detected. Reduce connected devices.",
  "E02": "Battery voltage low. Check battery health.",
  "E03": "High temperature. Ensure proper ventilation.",
};


export default function Troubleshooting() {
  const [errorCode, setErrorCode] = useState("");
  const [solution, setSolution] = useState("");

  const handleSearch = () => {
    setSolution(errorCodes[errorCode] || "No solution found for this code.");
  };

  return (
    <>

      <main className="container mx-auto py-10 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Troubleshooting Guide</h2>
        
        <input type="text" placeholder="Enter Error Code (e.g., E01)"
          value={errorCode} onChange={(e) => setErrorCode(e.target.value.toUpperCase())}
          className="border p-2 mt-4 rounded-md text-center" />
        
        <button onClick={handleSearch} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Search
        </button>

        {solution && <p className="mt-4 text-lg text-gray-700">{solution}</p>}
      </main>
    </>
  );
}
