import React from "react";
import { twMerge } from "tailwind-merge";

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "success"
  | "warning";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  rounded?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
  rounded = false,
}) => {
  const baseStyles =
    "inline-flex items-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variants = {
    default: "bg-primary-100 text-primary-800 hover:bg-primary-200",
    secondary: "bg-secondary-100 text-secondary-800 hover:bg-secondary-200",
    destructive: "bg-error-100 text-error-800 hover:bg-error-200",
    outline:
      "border border-border text-foreground hover:bg-accent hover:text-accent-foreground",
    success: "bg-success-100 text-success-800 hover:bg-success-200",
    warning: "bg-warning-100 text-warning-800 hover:bg-warning-200",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base",
  };

  const roundedStyles = rounded ? "rounded-full" : "rounded-md";

  const combinedClasses = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    roundedStyles,
    className
  );

  return <span className={combinedClasses}>{children}</span>;
};

export default Badge;

