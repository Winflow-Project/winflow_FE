'use client'

import { useState } from 'react'
import Input from './input'
import Image from 'next/image'
import LeftSignup from './LeftSignup'
import { useRouter } from 'next/navigation'
import Button from './Button'

export default function SignupForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [touched, setTouched] = useState({ email: false, password: false })
    const router = useRouter();

    const isValidEmail = /^\S+@\S+\.\S+$/.test(email)
    const isValidPassword = password.length >= 6
    const isFormValid = isValidEmail && isValidPassword

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!isFormValid) return

        alert(`Signing up with ${email}`)
        router.push('/Pages/Otp')
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#f8f8f8] p-4 rounded-lg">
            <div className="bg-white rounded-lg shadow-md flex max-w-4xl w-full overflow-hidden p-6">
                {/* Left Side */}
                <LeftSignup />

                {/* Right Side */}
                <div className="flex flex-col items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full p-8 rounded-lg border border-gray-300 bg-white shadow-sm"
                    >
                        <div className="flex flex-col items-center mb-6">
                            <h2 className="text-2xl font-bold mb-1">Create Account</h2>
                            <p className="text-sm text-gray-500 mb-6">Enter your details to get started.</p>
                        </div>

                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="someone@gmail.com"
                            required
                            isValid={touched.email ? isValidEmail : true}
                            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                        />

                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            isValid={touched.password ? isValidPassword : true}
                            onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
                        />

                        <Button
                            type="submit"
                            className={`w-full py-2 mt-4 rounded text-white font-medium transition ${isFormValid ? 'bg-orange-400 hover:bg-orange-500' : 'bg-orange-200 cursor-not-allowed'
                                }`}
                            disabled={!isFormValid}
                        >
                            Sign up
                        </Button>

                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="text-sm text-gray-500">Or</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        <div className="flex justify-center gap-4 mb-4 cursor-pointer">
                            <Image
                                src="/Frame 1618868336.png"
                                alt="Sign up with Provider 1"
                                className="w-10 h-10 border p-2 rounded-full"
                                width={50}
                                height={50}
                            />
                            <Image
                                src="/Frame 1618868337.png"
                                alt="Sign up with Provider 2"
                                className="cursor-pointer w-10 h-10 border p-2 rounded-full"
                                width={50}
                                height={50}
                            />
                        </div>

                        <p className="text-sm text-center">
                            Already have an account?{' '}
                            <a href="/auth/login" className="font-medium">
                                Sign In
                            </a>
                        </p>
                    </form>

                    <p className="text-xs text-gray-400 mt-4 text-center max-w-md">
                        By signing up, you agree to Winflow&apos;s{' '}
                        <a href="#" className="underline">
                            Conditions of Use
                        </a>{' '}
                        and{' '}
                        <a href="#" className="underline">
                            Privacy Policy
                        </a>.
                    </p>
                </div>

            </div>
        </div>
    )
}
