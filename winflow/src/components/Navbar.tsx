'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white px-20 py-8 shadow-sm">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold cursor-pointer">
                    <span className="text-black">Win</span>
                    <span className="text-purple-600 italic">Flow</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 text-gray-500 text-sm">
                    <span className="cursor-pointer hover:text-black">Core Values</span>
                    <span className="cursor-pointer hover:text-black">FAQs</span>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div className="flex flex-col mt-4 space-y-2 text-gray-500 text-sm md:hidden">
                    <span className="cursor-pointer hover:text-black">Core Values</span>
                    <span className="cursor-pointer hover:text-black">FAQs</span>
                </div>
            )}
        </nav>
    );
}
