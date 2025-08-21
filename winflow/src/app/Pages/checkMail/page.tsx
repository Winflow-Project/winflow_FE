'use client';
import Button from '@/components/Button';
import React from 'react';

const ForgotPassword = () => {



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md border border-gray-200">
                <h2 className="text-center text-xl font-semibold text-gray-800 mb-1">
                    Check your mail
                </h2>
                <p className="text-center text-sm text-gray-500 mb-6">
                    We&apos;ve sent a password reset link to your email.
                </p>

                <Button
                    type="submit"
                    onClick={() => window.open('https://mail.google.com', '_blank')}
                    className="w-full mt-6 cursor-pointer bg-orange-400 hover:bg-orange-500 text-white font-medium py-2.5 rounded-md shadow-md transition duration-200"
                >
                    Open Mail
                </Button>

                <span className='text-center text-sm cursor-pointer text-gray-500 mb-6 mt-8'>Didn&apos;t get an email?
                    <Button className='cursor-pointer text-gray-700'>Resend</Button></span>

                <div className="mt-8 flex justify-center">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-500 hover:bg-gray-100 transition"
                    >
                        ←
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
