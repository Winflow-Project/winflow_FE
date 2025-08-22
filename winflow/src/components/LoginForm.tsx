'use client';

import { useState } from 'react';
import Input from './input';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from './Button';
import { useLoginMutation } from '@/api/use-auth';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setAuth } from '@/redux/slice/authSlice';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [, setTouched] = useState({ email: false, password: false });

    const router = useRouter();
    const loginMutation = useLoginMutation();
    const dispatch = useDispatch();

    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
    const isValidPassword = password.length >= 6;
    const isFormValid = isValidEmail && isValidPassword;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const payload = { email, password, rememberMe };

        loginMutation.mutate(payload, {
            onSuccess: (data) => {
                toast.success(data?.message || 'Login successful 🎉');
                dispatch(setAuth({ user: data.user, token: data.access }));
                if (rememberMe) {
                    localStorage.setItem('authToken', data.access);
                }
                router.push('/dashboard');
            },
            onError: (error) => {
                const msg =
                    error?.response?.data?.message ||
                    error?.message ||
                    'Login failed';
                toast.error(msg);
            },
        });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#f8f8f8] p-4 rounded-lg">
            <div className="bg-white rounded-lg shadow-md flex max-w-4xl w-full overflow-hidden p-6">
                {/* Left Side */}
                <div className="bg-white w-1/2 p-8 hidden md:flex flex-col justify-center ">
                    <Image
                        src="/Group1.png"
                        alt="WinFlow Logo"
                        width={150}
                        height={40}
                        className="mb-4"
                    />

                    <div className="mb-4">
                        <p className="text-2xl font-bold text-black font-sans">
                            Welcome Back 👋
                        </p>
                        <p className="text-sm text-gray-600">
                            It&apos;s nice to see you again
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-center w-full">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full p-8 rounded-lg border border-gray-300 bg-white shadow-sm"
                    >
                        <div className="flex flex-col items-center mb-6">
                            <h2 className="text-2xl font-bold mb-1">Sign In</h2>
                            <p className="text-sm text-gray-500 mb-6">
                                Enter your details to sign in.
                            </p>
                        </div>

                        {/* Email Input */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="someone@gmail.com"
                                onBlur={() =>
                                    setTouched((prev) => ({
                                        ...prev,
                                        email: true,
                                    }))
                                }
                                name="email"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4 relative">
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                onBlur={() =>
                                    setTouched((prev) => ({
                                        ...prev,
                                        password: true,
                                    }))
                                }
                                name="password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-9 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword}
                            </button>
                        </div>

                        {/* Remember Me */}
                        <div className="flex justify-between items-center text-sm mb-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() =>
                                        setRememberMe(!rememberMe)
                                    }
                                    className="accent-purple-500"
                                />
                                Remember me
                            </label>
                            <a
                                href="/Pages/forgotPassword"
                                className="text-purple-600 hover:underline"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-2 mt-4"
                            disabled={!isFormValid || loginMutation.isPending}
                            loading={loginMutation.isPending}
                        >
                            {loginMutation.isPending
                                ? 'Signing In...'
                                : 'Sign In'}
                        </Button>

                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="text-sm text-gray-500">Or</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        <div className="flex justify-center gap-4 mb-4 cursor-pointer">
                            <Image
                                src="/Frame 1618868336.png"
                                alt="Google"
                                className="w-10 h-10 border p-2 rounded-full"
                                width={50}
                                height={50}
                            />
                            <Image
                                src="/Frame 1618868337.png"
                                alt="Facebook"
                                className="cursor-pointer w-10 h-10 border p-2 rounded-full"
                                width={50}
                                height={50}
                            />
                        </div>

                        <p className="text-sm text-center">
                            Don&apos;t have an account?{' '}
                            <a href="/auth/signup" className="font-medium">
                                Sign Up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
