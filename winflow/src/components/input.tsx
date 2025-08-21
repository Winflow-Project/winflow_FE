'use client';

import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

type InputProps = {
    label?: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    isValid?: boolean;
    onBlur?: () => void;
};

const Input: React.FC<InputProps> = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    placeholder = '',
    required = false,
    isValid = true,
    onBlur,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <div className="mb-6 relative">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    {label}
                </label>
            )}

            <input
                id={name}
                type={inputType}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                onBlur={onBlur}
                className={`w-full border-b-2 py-2 px-1 focus:outline-none ${isValid
                    ? 'border-purple-400 focus:border-purple-600'
                    : 'border-red-500'
                    }`}
            />

            {/* Eye toggle only for password */}
            {type === 'password' && (
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-2 top-4 text-gray-500 hover:text-gray-700"
                >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
            )}

            {/* Validation message */}
            {!isValid && (
                <p className="text-xs text-red-500 mt-1">
                    {type === 'email'
                        ? 'Invalid email address'
                        : 'Password must be at least 6 characters'}
                </p>
            )}
        </div>
    );
};

export default Input;
