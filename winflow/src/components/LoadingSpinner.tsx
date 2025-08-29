import React from "react";
import { twMerge } from "tailwind-merge";

type SpinnerSize = "sm" | "md" | "lg" | "xl";
type SpinnerVariant = "primary" | "secondary" | "white" | "muted";

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  className?: string;
  label?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  variant = "primary",
  className,
  label = "Loading...",
}) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  const variants = {
    primary: "text-primary-600",
    secondary: "text-secondary-600",
    white: "text-white",
    muted: "text-muted-foreground",
  };

  const combinedClasses = twMerge(
    "animate-spin",
    sizes[size],
    variants[variant],
    className
  );

  return (
    <div
      className="flex items-center justify-center"
      role="status"
      aria-label={label}
    >
      <svg
        className={combinedClasses}
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
      <span className="sr-only">{label}</span>
    </div>
  );
};

interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  spinnerSize?: SpinnerSize;
  spinnerVariant?: SpinnerVariant;
  className?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  children,
  spinnerSize = "lg",
  spinnerVariant = "primary",
  className,
}) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className={twMerge("relative", className)}>
      {children}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
        <LoadingSpinner size={spinnerSize} variant={spinnerVariant} />
      </div>
    </div>
  );
};

export { LoadingSpinner, LoadingOverlay };

