'use client'

import { useState } from 'react'
import Input from './input'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [touched, setTouched] = useState({ email: false, password: false })

    const isValidEmail = /^\S+@\S+\.\S+$/.test(email)
    const isValidPassword = password.length >= 6
    const isFormValid = isValidEmail && isValidPassword

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!isFormValid) return
        alert(`Logging in with ${email}`)
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#f8f8f8] px-4 rounded-lg">
            <div className="bg-white rounded-lg shadow-md flex max-w-4xl w-full overflow-hidden p-8">
                {/* Left Side */}
                <div className="bg-white w-1/2 p-8 hidden md:flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        <Image src="/Logo Frame 3.png" alt="WinFlow Logo" width={150} height={40} className="mb-2" />
                    </h1>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Welcome Back 👋</h2>
                    <p className="text-sm text-gray-600">It's nice to see you again</p>
                </div>

                {/* Right Side */}
                <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-8 rounded-lg border border-gray-300">
                    <div className='flex flex-col items-center'>

                        <h2 className="text-2xl font-bold mb-1">Sign In</h2>
                        <p className="text-sm text-gray-500 mb-6">Enter your details to sign in.</p>
                    </div>

                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="info@yourmail.com"
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

                    <div className="flex justify-between items-center text-sm mb-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                className="accent-purple-500"
                            />
                            Remember me
                        </label>
                        <Link href="/forgotPassword" >Forgot Password?</Link>
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-2 rounded text-white font-medium transition ${isFormValid ? 'bg-orange-400 hover:bg-orange-500' : 'bg-orange-200 cursor-not-allowed'
                            }`}
                        disabled={!isFormValid}
                    >
                        Sign in
                    </button>
                    <div className="flex items-center gap-4 my-4">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>


                    <div className="flex justify-center gap-4 mb-4">
                        <img src="/Frame 1618868336.png" className="w-10 h-10 border p-2 rounded-full" />
                        <img src="/Frame 1618868337.png" className="w-10 h-10 border p-2 rounded-full" />
                    </div>

                    <p className="text-sm text-center">
                        Don’t have an account?{' '}
                        <a href="/auth/signup" className="font-medium">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    )
}
