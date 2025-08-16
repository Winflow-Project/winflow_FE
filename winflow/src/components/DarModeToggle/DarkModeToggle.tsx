'use client';
import React from "react";
import SunIcon from "../SunIcon/SunIcon";
import MoonIcon from "../MoonIcon/MoonIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setDarkMode } from "../../redux/slice/DarkModeSlice/darkModeSlice";

const DarkModeToggle = () => {
    const darkMode = useSelector((state: RootState) => state.darkMode.enabled);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <li>
            {darkMode ? (
                <MoonIcon onClick={() => dispatch(setDarkMode(false))} />
            ) : (
                <SunIcon onClick={() => dispatch(setDarkMode(true))} />
            )}
        </li>
    );
};

export default DarkModeToggle;
