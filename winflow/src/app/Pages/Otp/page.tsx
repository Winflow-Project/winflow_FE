'use client'

import LeftSignup from "@/components/LeftSignup";
import Image from "next/image";
import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useVerifyOtpMutation } from "@/api/use-auth";
import { toast } from "react-toastify";
import Button from "@/components/Button";

export default function OTPPage() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef<Array<HTMLInputElement | null>>([]);
    const router = useRouter();
    const pendingEmail = useSelector((state: RootState) => state.auth.pendingEmail);

    const verifyOtpMutation = useVerifyOtpMutation();

    // for resend otp
    // const resendOtpMutation = useResendOtpMutation();

    const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return; // Only allow digits
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.some((digit) => digit === "")) {
            toast.error("Please enter all 4 digits.");
            return;
        }

        if (!pendingEmail) {
            toast.error("No email found. Please signup again.");
            router.push("/auth/signup");
            return;
        }

        const finalOtp = otp.join("");
        verifyOtpMutation.mutate(
            { email: pendingEmail, otp: finalOtp },
            {
                onSuccess: () => {
                    toast.success("OTP verified successfully 🎉");
                    router.push("/Pages/OtpSuccess");
                },
                onError: (err) => {
                    toast.error(err?.message || "Invalid OTP, try again.");
                },
            }
        );
    };

    const handleResend = () => {
        if (!pendingEmail) {
            toast.error("No email found. Please signup again.");
            return;
        }

        // resendOtpMutation.mutate(
        //     { email: pendingEmail },
        //     {
        //         onSuccess: () => {
        //             toast.success("OTP resent successfully 📩");
        //         },
        //         onError: (err: any) => {
        //             toast.error(err?.message || "Failed to resend OTP");
        //         },
        //     }
        // );
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#f8f8f8] p-4 rounded-lg">
            <div className="bg-white rounded-lg shadow-md flex max-w-4xl w-full overflow-hidden p-6">
                {/* Left side */}
                <LeftSignup />

                {/* Right side */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm bg-white p-6 rounded-lg border border-gray-300 shadow-md"
                >
                    <h2 className="text-2xl font-bold text-center mb-4">Verification</h2>
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <p className="text-sm text-center text-gray-500 mb-6 mt-6">
                        Please enter the OTP sent to <span className="font-semibold">{pendingEmail || "your email"}</span>
                    </p>

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

                    <Button
                        type="submit"
                        className="w-full cursor-pointer py-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded disabled:opacity-50"
                        disabled={otp.some((digit) => digit === "") || verifyOtpMutation.isPending}
                    >
                        {verifyOtpMutation.isPending ? "Verifying..." : "Verify"}
                    </Button>

                    <p className="text-sm text-center mt-4 text-gray-500 mb-5">
                        Didn’t get the code?{" "}
                        <button
                            type="button"
                            onClick={handleResend}
                            className="font-bold text-orange-500 hover:underline"
                        // disabled={resendOtpMutation.isLoading}
                        >
                            {/* {resendOtpMutation.isLoading ? "Resending..." : "Resend"} */}
                        </button>
                    </p>

                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span
                        onClick={() => window.history.back()}
                        className="flex flex-col items-center justify-center mt-5 cursor-pointer"
                    >
                        <Image src="/backbutton.svg" alt="back logo" width={40} height={40} className="mb-2" />
                    </span>
                </form>
            </div>
        </div>
    );
}
