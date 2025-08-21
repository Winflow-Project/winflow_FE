// src/services/authService.ts
import {
    fetchAuthWrapper,
    cancelTokenSources,
    fetchBaseWrapper,
    fetchFormWrapper,
} from "../src/fetchWrapper/fetchWrapper";
import { AxiosResponse } from "axios";

// Example request/response interfaces (adjust these to match your API)
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    access: string;
    refresh?: string;
    user?: {
        id: string;
        email: string;
        [key: string]: any;
    };
}

export interface RegisterPayload {
    email: string;
    password: string;
    [key: string]: any;
}

export interface ForgotPasswordPayload {
    email: string;
}

export interface ResetPasswordPayload {
    password: string;
    token: string;
}

export interface UpdateProfilePayload {
    [key: string]: any;
}

export const authService = {
    login: async (
        credentials: LoginCredentials
    ): Promise<AuthResponse> => {
        const response: AxiosResponse<AuthResponse> =
            await fetchBaseWrapper.post("auth/signin", credentials, {
                headers: { "Content-Type": "application/json" }
            });

        sessionStorage.setItem("token", response.data.access);
        return response.data;
    },



    forgotPassword: async (
        payload: ForgotPasswordPayload
    ): Promise<any> => {
        const response: AxiosResponse = await fetchBaseWrapper.post(
            "auth/forgot-password",
            payload,
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        return response.data;
    },

    getUserProfile: async (): Promise<AxiosResponse | void> => {
        try {
            const response = await fetchAuthWrapper.get("/user/profile/current-user");
            return response;
        } catch (error) {
            console.error("Get profile error:", error);
        }
    },

    updateUserProfile: async (
        userId: string,
        payload: UpdateProfilePayload
    ): Promise<AxiosResponse | void> => {
        try {
            const response = await fetchAuthWrapper.put('update-profile',
                payload
            );
            return response;
        } catch (error) {
            console.error("Update profile error:", error);
        }
    },


    verifyOtp: async (payload: { email: string; otp: string }) => {
        try {
            const response = await fetchAuthWrapper.post("/auth/verify-email", payload);
            return response.data;
        } catch (error) {
            throw error;
        }
    },


    resetPassword: async (
        request: ResetPasswordPayload
    ): Promise<AxiosResponse | void> => {
        try {
            const response = await fetchAuthWrapper.put("setnewpassword/", request);
            return response;
        } catch (error) {
            console.error("Reset password error:", error);
        }
    },

    logout: async (): Promise<boolean> => {
        try {
            cancelTokenSources.forEach((source) =>
                source.cancel("Logout initiated")
            );
            cancelTokenSources.length = 0;

            localStorage.removeItem("isDefault");
            localStorage.removeItem("useSelection");
            sessionStorage.removeItem("sctk");
            return true;
        } catch (error) {
            console.error("Error during logout:", error);
            throw error;
        }
    },


    signup: async (payload: RegisterPayload): Promise<AuthResponse> => {
        const response: AxiosResponse<AuthResponse> =
            await fetchBaseWrapper.post("auth/signup", payload, {
                headers: { "Content-Type": "application/json" },
            });
        return response.data;
    },

};

export default authService;
