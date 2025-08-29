"use client";

import React, { useState, forwardRef } from "react";
import { FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

type InputSize = "sm" | "md" | "lg";
type InputVariant = "default" | "filled" | "flushed";

interface InputProps {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  isValid?: boolean;
  onBlur?: () => void;
  size?: InputSize;
  variant?: InputVariant;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  autoComplete?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      name,
      value,
      onChange,
      placeholder = "",
      required = false,
      isValid = true,
      onBlur,
      size = "md",
      variant = "default",
      error,
      helperText,
      leftIcon,
      rightIcon,
      disabled = false,
      className,
      autoComplete,
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    // const [isFocused, setIsFocused] = useState(false);

    const inputType = type === "password" && showPassword ? "text" : type;
    const hasError = !isValid || error;

    const baseStyles =
      "w-full transition-all duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const variantStyles = {
      default: `border-0 border-b-2 rounded-none focus:ring-0 
    ${hasError ? "border-error-500" : "border-[#935AF3] focus:border-[#935AF3]"}`,

      filled: `border-0 border-b-2 rounded-none focus:ring-0 
    ${hasError ? "border-error-500" : "border-[#935AF3] focus:border-[#935AF3]"}`,

      flushed: `border-0 border-b-2 rounded-none focus:ring-0 
    ${hasError ? "border-error-500" : "border-[#935AF3] focus:border-[#935AF3]"}`,
    };

    const inputClasses = twMerge(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      leftIcon && "pl-10",
      (rightIcon || type === "password") && "pr-10",
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={name}
            type={inputType}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            onBlur={() => {
              onBlur?.();
            }}
            disabled={disabled}
            className={inputClasses}
            autoComplete={autoComplete}
            aria-invalid={hasError ? "true" : "false"}
            aria-describedby={
              hasError
                ? `${name}-error`
                : helperText
                  ? `${name}-helper`
                  : undefined
            }
          />

          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          )}

          {rightIcon && type !== "password" && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )}

          {hasError && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-error-500">
              <FiAlertCircle size={18} />
            </div>
          )}
        </div>

        {/* Error message */}
        {hasError && (
          <p
            id={`${name}-error`}
            className="text-xs text-error-500 mt-1 flex items-center gap-1"
          >
            <FiAlertCircle size={12} />
            {error ||
              (type === "email"
                ? "Invalid email address"
                : "Password must be at least 6 characters")}
          </p>
        )}

        {/* Helper text */}
        {helperText && !hasError && (
          <p
            id={`${name}-helper`}
            className="text-xs text-muted-foreground mt-1"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
