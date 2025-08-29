"use client";

import { useState } from "react";
import Input from "./input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./Card";
import { useLoginMutation } from "@/api/use-auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/slice/authSlice";
import { AxiosErrorResponse } from "@/types/errors";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [, setTouched] = useState({ email: false, password: false });

  const router = useRouter();
  const loginMutation = useLoginMutation();
  const dispatch = useDispatch();

  const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
  const isValidPassword = password.length >= 6;
  const isFormValid = isValidEmail && isValidPassword;

  interface AuthResponse {
    message?: string;
    user: {
      id: string;
      email: string;
      name?: string;
    };
    access: string;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { email, password, rememberMe };

    loginMutation.mutate(payload, {
      onSuccess: (data) => {
        toast.success((data as AuthResponse)?.message || "Login successful 🎉");
        if (data.user) {
          dispatch(setAuth({ user: data.user, access: data.access }));
          if (rememberMe) {
            localStorage.setItem("authToken", data.access);
          }
          router.push("/dashboard");
        } else {
          toast.error("Login failed: No user data received");
        }
      },
      onError: (error: AxiosErrorResponse) => {
        const msg =
          error?.response?.data?.message || error?.message || "Login failed";
        toast.error(msg);
      },
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f8f8f8] dark:bg-[#1a1a1a] p-4">
      <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl shadow-soft flex max-w-4xl w-full overflow-hidden">
        {/* Left Side */}
        <div className="bg-gradient-to-br w-1/2 p-8 hidden md:flex flex-col justify-center text-black">
          <Image
            src="/Group1.png"
            alt="WinFlow Logo"
            width={150}
            height={40}
            className="mb-4"
          />

          <div className="mb-4">
            <h1 className="text-3xl text-black font-bold mb-2">
              Welcome Back 👋
            </h1>
            <p className="text-black text-lg">
              It&apos;s nice to see you again
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <Card className="w-full border-0 shadow-none rounded-none md:rounded-r-2xl">
            <CardContent className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground dark:text-white">
                  Sign In
                </CardTitle>
                <CardDescription className="text-muted-foreground dark:text-gray-300">
                  Enter your details to sign in to your account
                </CardDescription>
              </CardHeader>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <Input
                  label="Email"
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
                  required
                  isValid={isValidEmail || !email}
                  autoComplete="email"
                />

                {/* Password Input */}
                <Input
                  label="Password"
                  type="password"
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
                  required
                  isValid={isValidPassword || !password}
                  autoComplete="current-password"
                />

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                    />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <a
                    href="/Pages/forgotPassword"
                    className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                  >
                    Forgot Password?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full py-2 mt-4 bg-[#F6A63B] hover:bg-[#E59535] text-white font-medium rounded-md shadow-md transition-colors"
                  disabled={!isFormValid || loginMutation.isPending}
                  loading={loginMutation.isPending}
                >
                  {loginMutation.isPending ? "Signing In..." : "Sign In"}
                </Button>

                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-border"></div>
                  <span className="text-sm text-muted-foreground">Or</span>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                <div className="flex justify-center gap-4 mb-6">
                  <button
                    type="button"
                    className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:bg-secondary-50 transition-colors"
                  >
                    <Image
                      src="/Frame 1618868336.png"
                      alt="Google"
                      width={24}
                      height={24}
                    />
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:bg-secondary-50 transition-colors"
                  >
                    <Image
                      src="/Frame 1618868337.png"
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>

                <p className="text-sm text-center text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <a
                    href="/auth/signup"
                    className="text-primary-600 hover:text-primary-700 font-medium hover:underline"
                  >
                    Sign Up
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
