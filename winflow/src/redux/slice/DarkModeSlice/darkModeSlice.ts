import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DarkModeState {
    [x: string]: string | boolean;
    enabled: boolean;
}

// Load from localStorage (default: false)
const getInitialDarkMode = (): boolean => {
    if (typeof window !== "undefined") {
        const stored = localStorage.getItem("darkMode");
        return stored ? JSON.parse(stored) : false;
    }
    return false;
};

const initialState: DarkModeState = {
    enabled: getInitialDarkMode(),
};

const applyDarkClass = (enabled: boolean) => {
    if (typeof document !== "undefined") {
        if (enabled) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }
    // Save in localStorage
    localStorage.setItem("darkMode", JSON.stringify(enabled));
};

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.enabled = action.payload;
            applyDarkClass(state.enabled);
        },
        toggleDarkMode: (state) => {
            state.enabled = !state.enabled;
            applyDarkClass(state.enabled);
        },
    },
});

export const { setDarkMode, toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
