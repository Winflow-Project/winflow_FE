'use client'

import React from 'react'

type InputProps = {
    label?: string
    type?: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    required?: boolean
    isValid?: boolean
    onBlur?: () => void
}

const Input: React.FC<InputProps> = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    placeholder = '',
    required = false,
    isValid = true,
    onBlur
}) => {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block text-sm font-medium mb-1">
                    {label}
                </label>
            )}
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                onBlur={onBlur}
                className={`w-full p-2 border rounded focus:outline-none ${isValid ? 'border-purple-400 focus:ring-2 focus:ring-purple-500' : 'border-red-500'
                    }`}
            />
            {!isValid && (
                <p className="text-xs text-red-500 mt-1">
                    {type === 'email' ? 'Invalid email address' : 'Password must be at least 6 characters'}
                </p>
            )}
        </div>
    )
}

export default Input
