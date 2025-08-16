"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function DarkModeWrapper({ children }: { children: React.ReactNode }) {
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);


    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add("dark-mode");
        }
        else {
            html.classList.remove("dark-mode");
        }
    }, [darkMode]);
    return (
        <>
            {children}
        </>
    );
}
