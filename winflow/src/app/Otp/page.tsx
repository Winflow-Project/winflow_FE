'use client'

import LeftSignup from "@/components/LeftSignup";
import Image from "next/image";
import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

export default function OTPPage() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef<Array<HTMLInputElement | null>>([]);
    const router = useRouter();

    const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return; // Only allow digits
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to next input
        if (value && index < 3) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (otp.every((digit) => digit !== "")) {
            const finalOtp = otp.join("");
            console.log("Submitted OTP:", finalOtp);
            router.push('/OtpSuccess'); // Navigate to success page
            // Here you can add your API call or Firebase OTP verification logic
            // Add API call or Firebase OTP verification here
        } else {
            alert("Please enter all 4 digits.");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#f8f8f8] p-4 rounded-lg">
            <div className="bg-white rounded-lg shadow-md flex max-w-4xl w-full overflow-hidden p-6">

                {/* left  side  */}
                <LeftSignup />


                {/*  Right side  */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm bg-white p-6 rounded-lg border border-gray-300 shadow-md"
                >
                    <h2 className="text-2xl font-bold text-center mb-4">Verification</h2>
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <p className="text-sm text-center text-gray-500 mb-6 mt-6">
                        Please enter the otp sent to your email </p>

                    <div className="flex justify-between gap-3 mb-6">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => { inputs.current[index] = el; }}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="w-12 h-12 text-center text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer py-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded disabled:opacity-50"
                        disabled={otp.some((digit) => digit === "")}
                    >
                        Verify
                    </button>

                    <p className="text-sm text-center mt-4 text-gray-500 mb-5">
                        Didn’t get the code? <a href="#" className="font-bold">Resend</a>
                    </p>
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span onClick={() => window.history.back()} className="flex flex-col items-center justify-center mt-5 cursor-pointer">
                        <Image src="/backbutton.svg" alt="back logo" width={40} height={40} className="mb-2" />
                    </span>
                </form>
            </div>
        </div>
    );
}
