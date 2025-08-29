"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleDarkMode } from "@/redux/slice/DarkModeSlice/darkModeSlice";
import { SunIcon } from "../SunIcon/SunIcon";
import { MoonIcon } from "../MoonIcon/MoonIcon";

export default function DarkModeToggle() {
  const dispatch = useDispatch();
  const enabled = useSelector((state: RootState) => state.darkMode.enabled);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary-100 hover:bg-secondary-200 dark:bg-secondary-800 dark:hover:bg-secondary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-900"
      aria-label={enabled ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5">
        <SunIcon
          className={`absolute inset-0 w-5 h-5 text-warning-500 transition-all duration-300 ${
            enabled
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <MoonIcon
          className={`absolute inset-0 w-5 h-5 text-primary-500 transition-all duration-300 ${
            enabled
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          }`}
        />
      </div>
    </button>
  );
}
