"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-blue-700 text-white p-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Service Centers Section */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-teal-200">Service Centers</h3>
                    <p className="mt-2">For inquiries, please reach out to our service centers or contact us at:</p>
                    <p className="mt-2">
                        Email:{" "}
                        <a href="mailto:care@tri-angels.com.pk" className="underline text-teal-300">
                            care@tri-angels.com.pk
                        </a>
                    </p>
                    <Link href="./service" className="underline mt-2 block text-teal-300">
                        View Service Center Details
                    </Link>
                </div>

                {/* Social Media Section */}
                <div className="mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-center md:text-left text-teal-200">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4 mt-2">
                        <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                            <Facebook size={24} />
                        </Link>
                        <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                            <Instagram size={24} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                            <Twitter size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Copyright Section */}
            <div className="mt-6 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Tri-Angels. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
