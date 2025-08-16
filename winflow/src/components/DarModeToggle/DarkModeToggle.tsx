'use client';
import React, { useEffect } from "react";
import SunIcon from "../SunIcon/SunIcon";
import MoonIcon from "../MoonIcon/MoonIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setDarkMode } from "../../redux/slice/DarkModeSlice/darkModeSlice";

const DarkModeToggle = () => {
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
    const dispatch = useDispatch<AppDispatch>();

    const handleDarkModeTrue = () => {
        dispatch(setDarkMode(true));
    };

    const handleDarkModeFalse = () => {
        dispatch(setDarkMode(false));
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
        <li>
            {darkMode ? (
                <MoonIcon handleDarkModeFalse={handleDarkModeFalse} />
            ) : (
                <SunIcon handleDarkModeTrue={handleDarkModeTrue} />
            )}
        </li>
    );
};

export default DarkModeToggle;
