"use client"
import { useRouter } from 'next/navigation';
import React from 'react';


const Personalize = () => {
    const router = useRouter();

    const handleSelection = (gender: string) => {
        console.log('Selected gender:', gender);
        router.push('/Pages/Newsletter'); // Navigate to next page
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center relative">
                <button
                    onClick={() => router.push('/interests')}
                    className="absolute top-4 right-4 text-sm text-gray-500 hover:text-black"
                >
                    Skip
                </button>

                <h2 className="text-xl font-semibold mb-2">About you</h2>
                <p className="text-sm text-gray-500 mb-6">Let's get to know You.</p>
                <p className="mb-4 font-medium text-gray-700">How do you Identify?</p>

                <div className="space-y-4">
                    <button
                        onClick={() => handleSelection('Male')}
                        className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-md font-semibold transition"
                    >
                        Male
                    </button>
                    <button
                        onClick={() => handleSelection('Female')}
                        className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-md font-semibold transition"
                    >
                        Female
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Personalize;
