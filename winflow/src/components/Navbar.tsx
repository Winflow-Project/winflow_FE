"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";
import DarkModeToggle from "./DarModeToggle/DarkModeToggle";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-20 py-8 shadow-sm transition-colors duration-300 bg-white dark:bg-[#1a1a1a] text-black dark:text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer">
          <Image src="/Group1.png" alt="winflow Logo" width={100} height={100} />

        </div>

        {/* Dark Mode Toggle */}
        {/* <div className="hidden md:block">
          <DarkModeToggle />
        </div> */}

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center gap-3">
          {/* <DarkModeToggle /> */}
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </Button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm">
          <span className="cursor-pointer hover:opacity-80 text-gray-500 dark:text-gray-300">
            Core Values
          </span>
          <span
            onClick={() =>
              document
                .getElementById("faqs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer hover:opacity-80 text-gray-500 dark:text-gray-300"
          >
            <a href="#fqs">FAQs</a>
          </span>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-2 text-sm md:hidden text-gray-500 dark:text-gray-300">
          <span className="cursor-pointer hover:opacity-80">Core Values</span>
          <span className="cursor-pointer hover:opacity-80">FAQs</span>
        </div>
      )}
    </nav>
  );
}
