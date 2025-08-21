"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "react-toastify";
import { useUpdateUserProfileMutation } from "@/api/use-auth";
import { setAuth } from "@/redux/slice/authSlice";

const Personalize = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const updateProfileMutation = useUpdateUserProfileMutation();

    const handleSelection = (gender: string) => {
        if (!user) {
            toast.error("User not found. Please log in again.");
            router.push("/auth/login");
            return;
        }

        updateProfileMutation.mutate(
            { gender }, // backend expects this field
            {
                onSuccess: (updatedUser) => {
                    toast.success("Profile updated 🎉");
                    dispatch(
                        setAuth({
                            user: { ...user, ...updatedUser },
                            access: "", // keep same token
                        })
                    );
                    router.push("/Pages/Newsletter"); // Navigate to next page
                },
                onError: (err) => {
                    toast.error(err?.message || "Failed to update profile");
                },
            }
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center relative">
                <button
                    onClick={() => router.push("/interests")}
                    className="absolute top-4 right-4 text-sm text-gray-500 hover:text-black"
                >
                    Skip
                </button>

                <h2 className="text-xl font-semibold mb-2">About you</h2>
                <p className="text-sm text-gray-500 mb-6">Let&apos;s get to know You.</p>
                <p className="mb-4 font-medium text-gray-700">How do you Identify?</p>

                <div className="space-y-4">
                    <button
                        onClick={() => handleSelection("Male")}
                        disabled={updateProfileMutation.isPending}
                        className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-md font-semibold transition disabled:opacity-50"
                    >
                        {updateProfileMutation.isPending ? "Saving..." : "Male"}
                    </button>
                    <button
                        onClick={() => handleSelection("Female")}
                        disabled={updateProfileMutation.isPending}
                        className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-md font-semibold transition disabled:opacity-50"
                    >
                        {updateProfileMutation.isPending ? "Saving..." : "Female"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Personalize;
