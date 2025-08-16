import React from "react";

interface SunIconProps {
    onClick: () => void;
}

export default function SunIcon({ onClick }: SunIconProps) {
    return (
        <button
            onClick={onClick}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Enable Dark Mode"
        >
            ☀️
        </button>
    );
}
