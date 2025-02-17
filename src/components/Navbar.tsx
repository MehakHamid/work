"use client"
import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleProductClick = () => {
        setIsProductOpen(prev => !prev); // Toggle the product dropdown
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget as Node)) {
            setIsProductOpen(false); // Close if the mouse leaves the dropdown area
        }
    };

    return (
        <nav className="bg-blue-500 p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-2xl font-bold">Trion</div>
                
                <div className="hidden md:flex space-x-6 mx-auto relative">
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link href="/about" className="text-white hover:text-gray-300">About Us</Link>
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsProductOpen(true)}  // Open on hover
                        onMouseLeave={handleMouseLeave} // Close on hover out but only when necessary
                    >
                        <button 
                            className="text-white hover:text-gray-300 flex items-center" 
                            onClick={handleProductClick} // Toggle on click
                        >
                            Product <ChevronDown size={18} className="ml-1" />
                        </button>
                        {isProductOpen && (
                            <div 
                                ref={dropdownRef}
                                className="absolute left-0 mt-2 w-40 bg-blue-600 text-white rounded-md shadow-lg"
                                onMouseLeave={handleMouseLeave} // Close when mouse leaves the dropdown
                            >
                                <Link href="/conectseries" className="block px-4 py-2 hover:bg-blue-700">Connect Series</Link>
                                <Link href="/wiseseries" className="block px-4 py-2 hover:bg-blue-700">Wise Series</Link>
                                <Link href="/wiseplusseries" className="block px-4 py-2 hover:bg-blue-700">Wise Plus Series</Link>
                                <Link href="/solplanet" className="block px-4 py-2 hover:bg-blue-700">Solplanet</Link>
                            </div>
                        )}
                    </div>
                    <Link href="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
                </div>
                
                <button 
                    className="md:hidden text-white" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 bg-blue-600 p-4 text-center">
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link href="/about" className="text-white hover:text-gray-300">About Us</Link>
                    <div className="relative">
                        <button 
                            className="text-white hover:text-gray-300" 
                            onClick={handleProductClick} // Toggle on click for mobile
                        >
                            Product
                        </button>
                        {isProductOpen && (
                            <div className="bg-blue-700 text-white p-2 rounded-md">
                                <Link href="/conectseries" className="block px-4 py-2 hover:bg-blue-800">Connect Series</Link>
                                <Link href="/wiseseries" className="block px-4 py-2 hover:bg-blue-800">Wise Series</Link>
                                <Link href="/wiseplusseries" className="block px-4 py-2 hover:bg-blue-800">Wise Plus Series</Link>
                                <Link href="/solplanet" className="block px-4 py-2 hover:bg-blue-800">Solplanet</Link>
                            </div>
                        )}
                    </div>
                    <Link href="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
                </div>
            )}
        </nav>
    );
}
