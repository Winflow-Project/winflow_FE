import React from "react";

interface MoonIconProps {
    onClick: () => void;
}

export default function MoonIcon({ onClick }: MoonIconProps) {
    return (
        <button
            onClick={onClick}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Disable Dark Mode"
        >
            🌙
        </button>
    );
}
