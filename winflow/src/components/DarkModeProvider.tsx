"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setDarkMode } from "@/redux/slice/DarkModeSlice/darkModeSlice";

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();
    const enabled = useSelector((state: RootState) => state.darkMode.enabled);

    // Load from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("darkMode");
        if (stored !== null) {
            dispatch(setDarkMode(JSON.parse(stored)));
        }
    }, [dispatch]);

    // Apply/remove class when state changes
    useEffect(() => {
        if (enabled) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", JSON.stringify(enabled));
    }, [enabled]);

    return <>{children}</>;
}
