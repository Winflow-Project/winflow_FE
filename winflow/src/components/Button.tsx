import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
// import { componentVariants } from "@/design-system/tokens";

type ButtonSize = "sm" | "md" | "lg" | "xl";
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg";
const variants = {
  primary:
    "bg-[#F7B053] text-white hover:bg-[#e09f46] focus:ring-[#F7B053] shadow-sm hover:shadow-md",
  secondary:
    "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-sm hover:shadow-md",
  outline:
    "border border-[#F7B053] text-[#F7B053] hover:bg-[#F7B053]/10 focus:ring-[#F7B053] bg-transparent",
  ghost:
    "text-[#F7B053] hover:bg-[#F7B053]/10 focus:ring-[#F7B053] bg-transparent",
  destructive:
    "bg-error-600 text-white hover:bg-error-700 focus:ring-error-500 shadow-sm hover:shadow-md",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-base gap-2",
  lg: "px-6 py-3 text-lg gap-2.5",
  xl: "px-8 py-4 text-xl gap-3",
};

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  loading = false,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
}) => {
  const combinedClasses = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && leftIcon && (
        <span className="flex-shrink-0">{leftIcon}</span>
      )}
      <span className={loading ? "opacity-0" : ""}>{children}</span>
      {!loading && rightIcon && (
        <span className="flex-shrink-0">{rightIcon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      {content}
    </button>
  );
};

export default Button;
