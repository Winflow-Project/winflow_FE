
import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";



export default function Start() {
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        router.push('/auth/signup')
    }



    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-6xl mx-auto">
            {/* Left side */}
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-3xl font-semibold mb-4 text-gray-800">Ready to Start?</h1>
                <p className="text-gray-600 text-start mb-6 max-w-md">
                    Join Askwinflow and grow one idea, one question, one win at a time.
                </p>
                <Button onClick={handleSubmit} className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-5 py-2.5 rounded-md shadow-md transition duration-200">
                    Get Started
                </Button>
            </div>

            {/* Right side */}
            <div className="md:w-1/2">
                <img
                    src="/ready.png"
                    alt="Ready to start"
                    className="w-full max-w-md mx-auto md:mx-0"
                />
            </div>
        </div>
    );
}
