import React from "react";

const InverterInstallation = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center px-6 py-12">
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-5xl font-bold text-center mb-10 text-blue-700">
          General Inverter Installation Guide
        </h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">Introduction</h2>
          <p className="text-lg text-gray-700 mt-3">
            Inverters convert DC power into AC power, ensuring uninterrupted electricity supply during outages. This guide provides step-by-step instructions for installing an inverter, safety precautions, and a detailed comparison of <strong>Solar and Non-Solar Inverters</strong>.
          </p>
        </section>

        <section className="mb-10 bg-blue-50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800">1. Pre-Installation Considerations</h2>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 space-y-2">
            <li><strong>Power Requirement Calculation:</strong> Determine the total wattage of devices you need to power.</li>
            <li><strong>Inverter Capacity Selection:</strong> Choose an inverter with sufficient VA (Volt-Ampere) rating.</li>
            <li><strong>Battery Compatibility:</strong> Ensure the inverter is compatible with the battery type (Lead-Acid, Lithium-ion, etc.).</li>
            <li><strong>Location Selection:</strong> Install in a well-ventilated area, away from direct sunlight and moisture.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">2. Installation Steps</h2>
          <h3 className="text-2xl font-medium text-blue-600 mt-4">For Both Solar and Non-Solar Inverters</h3>
          <ol className="list-decimal pl-6 mt-4 text-lg text-gray-700 space-y-2">
            <li><strong>Turn Off the Main Power Supply:</strong> Ensure the mains supply is turned off to prevent electrical hazards.</li>
            <li><strong>Mount the Inverter:</strong> Secure the inverter on a stable wall or surface with adequate airflow.</li>
            <li>
              <strong>Battery Connection:</strong>
              <ul className="list-disc pl-6 mt-2">
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

        <section className="mb-10 bg-blue-50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800">3. Precautions and Safety Measures</h2>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 space-y-2">
            <li><strong>Ensure Proper Ventilation:</strong> Overheating may damage the inverter; install in a cool, open space.</li>
            <li><strong>Use Correct Wire Gauge:</strong> Avoid voltage drops and overheating by using appropriate wire sizes.</li>
            <li><strong>Secure Connections:</strong> Loose connections can cause sparking or failure.</li>
            <li><strong>Avoid Overloading:</strong> Ensure connected appliances do not exceed the inverter’s capacity.</li>
            <li><strong>Periodic Maintenance:</strong> Clean battery terminals and check electrolyte levels regularly.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">4. Solar vs Non-Solar Inverter Installation</h2>
          <h3 className="text-2xl font-medium text-blue-600 mt-4">Solar Inverter Installation</h3>
          <ol className="list-decimal pl-6 mt-4 text-lg text-gray-700 space-y-2">
            <li><strong>Solar Panel Mounting:</strong> Place panels on a rooftop for maximum sunlight exposure.</li>
            <li>
              <strong>Charge Controller Connection:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Connect solar panels to the charge controller.</li>
                <li>Connect the charge controller to the battery to regulate charging.</li>
              </ul>
            </li>
            <li>
              <strong>Inverter Connection:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Connect the battery output to the inverter.</li>
                <li>Connect the inverter to the load.</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-10 bg-blue-50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800">Conclusion</h2>
          <p className="text-lg text-gray-700 mt-3">
            Proper installation of inverters ensures efficient performance and long-term reliability. Following safety precautions and manufacturer guidelines is crucial to avoid malfunctions. Choose the right inverter type based on your energy needs and installation preferences.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800">Need More Help?</h2>
          <p className="text-lg text-gray-700 mt-3">
            If you need assistance with inverter selection, troubleshooting, or installation, consult a certified electrician or refer to the user manual provided with your inverter.
          </p>
        </section>
      </div>
    </div>
  );
};

export default InverterInstallation;
