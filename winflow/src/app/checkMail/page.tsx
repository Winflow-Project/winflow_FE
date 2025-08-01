'use client';
import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle email submission logic here
        alert(`Password reset link sent to ${email}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md border border-gray-200">
                <h2 className="text-center text-xl font-semibold text-gray-800 mb-1">
                    Check your mail
                </h2>
                <p className="text-center text-sm text-gray-500 mb-6">
                    We've sent a password reset link to your email.
                </p>

                <button
                    type="submit"
                    className="w-full mt-6 cursor-pointer bg-orange-400 hover:bg-orange-500 text-white font-medium py-2.5 rounded-md shadow-md transition duration-200"
                >
                    Open Mail
                </button>

                <span className='text-center text-sm cursor-pointer text-gray-500 mb-6 mt-8'>Didn't get an email? <button className='cursor-pointer text-gray-700'>Resend</button></span>

                <div className="mt-8 flex justify-center">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="w-10 cursor-pointer h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-500 hover:bg-gray-100 transition"
                    >
                        ←
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
