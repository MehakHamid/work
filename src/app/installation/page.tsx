import React from "react";

const InverterInstallation = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">General Inverter Installation Guide</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
        <p className="text-gray-700 mt-2">Inverters are essential devices for converting DC power into AC power, ensuring uninterrupted electricity supply during outages. This guide provides step-by-step instructions for installing an inverter, safety precautions, and a detailed comparison of <strong>Solar and Non-Solar Inverters</strong>.</p>
      </section>

      <section className="mb-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">1. Pre-Installation Considerations</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li><strong>Power Requirement Calculation:</strong> Determine the total wattage of devices you need to power.</li>
          <li><strong>Inverter Capacity Selection:</strong> Choose an inverter with sufficient VA (Volt-Ampere) rating.</li>
          <li><strong>Battery Compatibility:</strong> Ensure the inverter is compatible with the battery type (Lead-Acid, Lithium-ion, etc.).</li>
          <li><strong>Location Selection:</strong> Install in a well-ventilated area, away from direct sunlight and moisture.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">2. Installation Steps</h2>
        <h3 className="text-xl font-medium text-blue-600">For Both Solar and Non-Solar Inverters</h3>
        <ol className="list-decimal pl-6 mt-2 text-gray-700">
          <li><strong>Turn Off the Main Power Supply:</strong> Ensure the mains supply is turned off to prevent electrical hazards.</li>
          <li><strong>Mount the Inverter:</strong> Secure the inverter on a stable wall or surface with adequate airflow.</li>
          <li>
            <strong>Battery Connection:</strong>
            <ul className="list-disc pl-6">
              <li>Connect the <strong>positive terminal</strong> of the battery to the <strong>positive input</strong> of the inverter.</li>
              <li>Connect the <strong>negative terminal</strong> similarly.</li>
              <li>Ensure tight connections to prevent power loss.</li>
            </ul>
          </li>
          <li><strong>AC Power Input Connection:</strong> Connect the inverter’s AC input to the mains power supply (for non-solar inverters).</li>
          <li><strong>Load Connection:</strong> Connect essential appliances to the inverter’s output terminals.</li>
          <li><strong>Testing:</strong> Turn on the inverter and check if appliances are receiving power.</li>
        </ol>
      </section>

      <section className="mb-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">3. Precautions and Safety Measures</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li><strong>Ensure Proper Ventilation:</strong> Overheating may damage the inverter; install in a cool, open space.</li>
          <li><strong>Use Correct Wire Gauge:</strong> Avoid voltage drops and overheating by using appropriate wire sizes.</li>
          <li><strong>Secure Connections:</strong> Loose connections can cause sparking or failure.</li>
          <li><strong>Avoid Overloading:</strong> Ensure connected appliances do not exceed the inverter's capacity.</li>
          <li><strong>Periodic Maintenance:</strong> Clean battery terminals and check electrolyte levels regularly.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">4. Solar vs Non-Solar Inverter Installation</h2>
        <h3 className="text-xl font-medium text-blue-600">Solar Inverter Installation</h3>
        <ol className="list-decimal pl-6 mt-2 text-gray-700">
          <li><strong>Solar Panel Mounting:</strong> Place panels on a rooftop for maximum sunlight exposure.</li>
          <li>
            <strong>Charge Controller Connection:</strong>
            <ul className="list-disc pl-6">
              <li>Connect solar panels to the charge controller.</li>
              <li>Connect the charge controller to the battery to regulate charging.</li>
            </ul>
          </li>
          <li>
            <strong>Inverter Connection:</strong>
            <ul className="list-disc pl-6">
              <li>Connect the battery output to the inverter.</li>
              <li>Connect the inverter to the load.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
        <p className="text-gray-700 mt-2">Proper installation of inverters ensures efficient performance and long-term reliability. Following safety precautions and manufacturer guidelines is crucial to avoid malfunctions. Choose the right inverter type based on your energy needs and installation preferences.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Need More Help?</h2>
        <p className="text-gray-700 mt-2">If you need assistance with inverter selection, troubleshooting, or installation, consult a certified electrician or refer to the user manual provided with your inverter.</p>
      </section>
    </div>
  );
};

export default InverterInstallation;
