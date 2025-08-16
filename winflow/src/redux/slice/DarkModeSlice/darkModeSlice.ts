import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DarkModeState {
    [x: string]: any;
    enabled: boolean;
}

const initialState: DarkModeState = {
    enabled: false,
};

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.enabled = action.payload;
        },
        toggleDarkMode: (state) => {
            state.enabled = !state.enabled;
        },
    },
});

export const { setDarkMode, toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
