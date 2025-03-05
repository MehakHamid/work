"use client"
import React, { useState } from "react";

const faultCodes = [
  { code: "A56", issue: "Battery Low", solution: "Charge or replace the battery. Ensure the battery connections are secure." },
  { code: "A64", issue: "Overload Warning", solution: "Reduce the connected load. Unplug unnecessary devices and restart the system." },
  { code: "A68", issue: "High Temperature", solution: "Ensure proper ventilation and reduce load. Check the cooling fan for blockages." },
  { code: "E07", issue: "Output Voltage High", solution: "Check the output voltage and adjust settings if necessary. Ensure proper inverter calibration." },
  { code: "E09", issue: "Output Short", solution: "Inspect all output wiring for shorts and replace damaged cables." },
  { code: "E13", issue: "Over Charging", solution: "Stop charging immediately. Check the battery and charge controller settings." },
  { code: "E14", issue: "Over Load Fault", solution: "Disconnect some appliances and restart the inverter. Ensure load capacity is not exceeded." },
  { code: "E18", issue: "Fan Failed", solution: "Check if the fan is blocked or not working. Replace if necessary." },
  { code: "E19", issue: "Over Temperature", solution: "Allow the inverter to cool down. Ensure adequate ventilation." },
  { code: "E90", issue: "Output Not Working", solution: "Inspect the output connections and settings. Reset the system if needed." },
  { code: "E0", issue: "Board Burned Due to Wrong Connections", solution: "Replace or repair the damaged board. Ensure correct wiring." },
  { code: "A88", issue: "PV Voltage High", solution: "Check solar panel voltage and reduce if necessary. Inspect charge controller settings." },
  { code: "F01", issue: "Fan Locked", solution: "Ensure the inverter is on and the fan is not physically obstructed." },
  { code: "F02", issue: "Over Temperature or NTC Not Connected", solution: "Reconnect or replace the NTC sensor. Check temperature control settings." },
  { code: "F03", issue: "Battery Voltage Too High", solution: "Check the battery and reduce input voltage if necessary." },
  { code: "F04", issue: "Battery Voltage Too Low", solution: "Recharge or replace the battery. Check voltage levels." },
  { code: "F05", issue: "Output Short Circuited", solution: "Check the inverter wiring and remove any short circuits." },
  { code: "F06", issue: "Output Voltage Too High", solution: "Adjust inverter output settings to match load requirements." },
  { code: "F07", issue: "Overload Timeout", solution: "Reduce the connected load and reset the system." },
  { code: "F08", issue: "Bus Voltage Too High", solution: "Check the bus voltage and regulate as needed." },
  { code: "F09", issue: "Bus Soft Start Failed", solution: "Inspect inverter startup circuits and restart the system." },
  { code: "F10", issue: "PV Current Over", solution: "Reduce the solar panel current load. Inspect panel connections and controller settings." },
  { code: "F11", issue: "PV Voltage Over", solution: "Check solar panel voltage and adjust if necessary." },
  { code: "F12", issue: "Charge Current Over", solution: "Reduce charging current and inspect battery settings." },
  { code: "F51", issue: "Over Current or Surge", solution: "Disconnect excess load and restart the system." },
  { code: "F52", issue: "Bus Voltage Too Low", solution: "Check and regulate bus voltage levels." },
  { code: "F53", issue: "Inverter Soft Start Failure", solution: "Restart the inverter and check startup settings." },
  { code: "F55", issue: "Over DC Offset in AC Output", solution: "Check inverter AC output and ensure stable power delivery." },
  { code: "F57", issue: "Current Sensor Failure", solution: "Inspect and replace faulty current sensors." },
  { code: "F58", issue: "Output Voltage Too Low", solution: "Check inverter output settings and increase voltage if necessary." },
  { code: "F59", issue: "PV Voltage Over Limitation", solution: "Reduce PV voltage input and ensure it is within the inverter's limits." },
  { code: "Earth Light Issue", issue: "Grounding Problem", solution: "Ensure proper grounding and inspect wiring connections." },
  { code: "Reverse Meter Fault", issue: "Meter Reading Issue", solution: "Check and recalibrate the meter if necessary." },
  { code: "Charging Fault", issue: "Battery Charging Problem", solution: "Inspect charger settings and battery health." }
];

export default function FaultGuide() {
  const [search, setSearch] = useState("");
  const [selectedFault, setSelectedFault] = useState(null);

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
              onClick={() => setSelectedFault(fault)}
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

