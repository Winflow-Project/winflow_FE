"use client";

import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import authService from "../../services/authService";
import { setAuth, clearAuth } from "../redux/slice/authSlice";

// --------- Types ----------
export interface LoginPayload {
    email: string;
    password: string;
}

export interface AuthResponse {
    [x: string]: string;
    access: string;
    refresh?: string;
    user?: {
        id: string;
        email: string;
    };
}

export interface SignUpPayload {
    email: string;
    password: string;
    [key: string]: unknown;
}
export interface UserProfileResponse {
    id: string;
    name: string;
    email: string;
    gender?: string;
}

export interface ResetPasswordPayload {
    email: string;
}

export interface UpdateUserProfilePayload {
    [key: string]: unknown;
}
// --------- Hooks ----------

// 🔹 Signup Mutation with Redux + Toastify
export const useSignUpMutation = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useMutation<AuthResponse, Error, SignUpPayload>({
        mutationFn: async (data) => {
            const { _type, ...rest } = data;
            return authService.signup(rest); // API call
        },
        onSuccess: (response) => {
            if (response?.access) {
                dispatch(
                    setAuth({
                        user: response.user!,
                        access: response.access,
                        refresh: response.refresh,
                    })
                );
                toast.success("Signup successful 🎉");
                router.push("/Pages/Otp"); // redirect
            } else {
                toast.error("Signup failed: No token returned");
            }
        },
        onError: (error) => {
            toast.error(error?.message || "Signup failed ❌");
        },
    });
};

// 🔹 Login Mutation (same idea)
export const useLoginMutation = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useMutation<AuthResponse, Error, LoginPayload>({
        mutationFn: async (data) => authService.login(data),
        onSuccess: (response) => {
            if (response?.access) {
                dispatch(
                    setAuth({
                        user: response.user!,
                        access: response.access,
                        refresh: response.refresh,
                    })
                );
                toast.success("Login successful ✅");
                router.push("/dashboard"); // adjust route
            } else {
                toast.error("Login failed: No token returned");
            }
        },
        onError: (error) => {
            toast.error(error?.message || "Login failed ❌");
        },
    });
};

// 🔹 Logout Mutation
export const useLogout = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    return () => {
        dispatch(clearAuth());
        toast.info("Logged out 👋");
        router.push("/auth/login");
    };
};

export interface VerifyOtpPayload {
    email: string;
    otp: string;
}

export const useVerifyOtpMutation = () => {
    return useMutation<unknown, Error, VerifyOtpPayload>({
        mutationFn: async (data) => authService.verifyOtp(data),
    });
};


export const useResetPasswordMutation = () => {
    return useMutation<unknown, Error, ResetPasswordPayload>({
        mutationFn: async (data) => authService.resetPassword(data),
    });
};

export const useForgotPasswordMutation = () => {
    return useMutation<unknown, Error, ResetPasswordPayload>({
        mutationFn: async (data) => authService.forgotPassword(data),
    });
};

export const useUpdateUserProfileMutation = () => {
    const dispatch = useDispatch();
    return useMutation<UserProfileResponse, Error, UpdateUserProfilePayload>({
        mutationFn: async (payload) => {
            const response = await authService.updateUserProfile(payload);
            return response.data;
        },
        onSuccess: (updatedUser) => {
            dispatch(setAuth({ user: updatedUser, access: "", refresh: "" })); // keep token as is
            toast.success("Profile updated successfully!");
        },
        onError: (err) => {
            toast.error(err?.message || "Failed to update profile");
        },
    });
};
