

export default function Installation() {
  return (
    <>

      <main className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-blue-600">Inverter Installation Guide</h2>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Step 1: Choose the Right Battery</h3>
          <p className="text-gray-700">Use a compatible battery: Lithium, Lead Acid, or Tubular.</p>
        </div>
        
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Step 2: Connect the Cables</h3>
          <p className="text-gray-700">Connect the red cable to the positive terminal and black to the negative.</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Step 3: Configure the Settings</h3>
          <p className="text-gray-700">Set the inverter to the correct battery type for optimized performance.</p>
        </div>
      </main>
    </>
  );
}
