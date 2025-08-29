"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setDarkMode } from "@/redux/slice/DarkModeSlice/darkModeSlice";

export default function DarkModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const enabled = useSelector((state: RootState) => state.darkMode.enabled);

  // Initialize dark mode on mount
  useEffect(() => {
    const initializeDarkMode = () => {
      // Check localStorage first
      const stored = localStorage.getItem("darkMode");
      if (stored !== null) {
        dispatch(setDarkMode(JSON.parse(stored)));
      } else {
        // If no stored preference, use system preference
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        dispatch(setDarkMode(systemPrefersDark));
      }
    };

    initializeDarkMode();
  }, [dispatch]);

  // Apply/remove class when state changes
  useEffect(() => {
    const root = document.documentElement;

    if (enabled) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save to localStorage
    localStorage.setItem("darkMode", JSON.stringify(enabled));
  }, [enabled]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      const stored = localStorage.getItem("darkMode");
      if (stored === null) {
        dispatch(setDarkMode(e.matches));
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [dispatch]);

  return <>{children}</>;
}
