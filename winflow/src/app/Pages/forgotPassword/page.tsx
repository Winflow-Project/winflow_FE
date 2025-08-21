'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForgotPasswordMutation } from '@/api/use-auth';
import { toast } from 'react-toastify';
import Button from '@/components/Button';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const forgotPasswordMutation = useForgotPasswordMutation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        forgotPasswordMutation.mutate(
            { email },
            {
                onSuccess: (data) => {
                    const msg = data?.message || 'Password reset link sent!';
                    toast.success(msg);
                    router.push('/Pages/checkMail');
                },
                onError: (error) => {
                    const msg =
                        error?.response?.data?.message ||
                        error?.message ||
                        'Failed to send reset link';
                    toast.error(msg);
                },
            }
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md border border-gray-200">
                <h2 className="text-center text-xl font-semibold text-gray-800 mb-1">
                    Forgot Password
                </h2>
                <p className="text-center text-sm text-gray-500 mb-6">
                    Enter your email to reset your password
                </p>

                <form onSubmit={handleSubmit}>
                    <label className="block text-sm text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="info@yourmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border-b-2 border-purple-400 focus:outline-none focus:border-purple-600 transition"
                        required
                    />

                    <Button
                        type="submit"
                        disabled={forgotPasswordMutation.isPending}
                        className={`w-full mt-6 py-2.5 rounded-md shadow-md font-medium transition ${forgotPasswordMutation.isPending
                            ? 'bg-orange-200 cursor-not-allowed'
                            : 'bg-orange-400 hover:bg-orange-500 text-white'
                            }`}
                    >
                        {forgotPasswordMutation.isPending ? 'Sending...' : 'Continue'}
                    </Button>
                </form>

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
