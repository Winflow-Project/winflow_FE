"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleDarkMode } from "@/redux/slice/DarkModeSlice/darkModeSlice";

export default function DarkModeToggle() {
    const dispatch = useDispatch();
    const enabled = useSelector((state: RootState) => state.darkMode.enabled);

    return (
        <button
            onClick={() => dispatch(toggleDarkMode())}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
        >
            {enabled ? "Switch to Light" : "Switch to Dark"}
        </button>
    );
}
