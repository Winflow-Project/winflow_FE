'use client';

import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import Button from './Button';
import { setDarkMode } from '../redux/slice/DarkModeSlice/darkModeSlice';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <nav
            className='px-20 py-8 shadow-sm transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white'
        >
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold cursor-pointer">
                    <span className={`${darkMode ? 'text-white' : 'text-black'}`}>Win</span>
                    <span className="text-purple-600 italic">Flow</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 text-sm">
                    <span
                        className={`cursor-pointer hover:opacity-80 ${darkMode ? 'text-gray-300' : 'text-gray-500'
                            }`}
                    >
                        Core Values
                    </span>
                    <span
                        className={`cursor-pointer hover:opacity-80 ${darkMode ? 'text-gray-300' : 'text-gray-500'
                            }`}
                    >
                        FAQs
                    </span>
                </div>

                {/* Dark Mode Toggle */}
                <Button
                    onClick={() => dispatch(setDarkMode(!darkMode))}
                    className={`hidden md:block px-3 py-1 rounded-full text-sm border transition-colors ${darkMode
                        ? 'bg-white text-black border-gray-400'
                        : 'bg-gray-900 text-white border-gray-700'
                        }`}
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden flex items-center gap-3">
                    <Button
                        onClick={() => dispatch(setDarkMode(!darkMode))}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${darkMode
                            ? 'bg-white text-black border-gray-400'
                            : 'bg-gray-900 text-white border-gray-700'
                            }`}
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </Button>
                    <Button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </Button>
                </div>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div
                    className={`flex flex-col mt-4 space-y-2 text-sm md:hidden ${darkMode ? 'text-gray-300' : 'text-gray-500'
                        }`}
                >
                    <span className="cursor-pointer hover:opacity-80">Core Values</span>
                    <span className="cursor-pointer hover:opacity-80">FAQs</span>
                </div>
            )}
        </nav>
    );
}
