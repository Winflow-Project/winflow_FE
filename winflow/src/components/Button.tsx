import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "outline";
    disabled?: boolean;
};

const baseStyles =
    "inline-block px-6 py-2 rounded-md font-semibold transition duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-gray-700 text-white hover:bg-gray-800",
    outline: "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
};

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    className = "",
    type = "button",
    variant = "primary",
    disabled = false,
}) => {
    const combinedClasses = twMerge(baseStyles, variants[variant], className);

    if (href) {
        return (
            <Link href={href}>
                <a className={combinedClasses}>{children}</a>
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
