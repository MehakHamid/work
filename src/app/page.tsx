"use client";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Welcome to TRI-ANGELS Inverter Solutions</h1>
                    <p className="mt-4 text-lg">Your trusted source for Solar, On-Grid, and Off-Grid Inverters</p>
                    <Link href="/contact" className="mt-6 inline-block bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600">
                        Get In Touch
                    </Link>
                </div>
            </section>

            {/* Inverter Types Section */}
            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-700">Our Inverter Solutions</h2>
                    <p className="mt-4 text-lg text-gray-600">Explore the different types of inverters we offer for your power needs.</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Solar Inverter */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-teal-600">Solar Inverter</h3>
                            <p className="mt-4 text-gray-600">Harness the power of the sun with our efficient and reliable solar inverters, perfect for residential and commercial use.</p>
                            <Link href="/solar-inverter" className="mt-4 inline-block text-teal-500 hover:text-teal-600">
                                Learn More
                            </Link>
                        </div>
                        {/* On-Grid Inverter */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-teal-600">On-Grid Inverter</h3>
                            <p className="mt-4 text-gray-600">On-grid inverters help you connect your solar system to the grid for energy savings and better efficiency.</p>
                            <Link href="/on-grid-inverter" className="mt-4 inline-block text-teal-500 hover:text-teal-600">
                                Learn More
                            </Link>
                        </div>
                        {/* Off-Grid Inverter */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-teal-600">Off-Grid Inverter</h3>
                            <p className="mt-4 text-gray-600">Perfect for remote locations, our off-grid inverters allow you to stay independent of the electricity grid.</p>
                            <Link href="/off-grid-inverter" className="mt-4 inline-block text-teal-500 hover:text-teal-600">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

                   
        </div>
    );
}
