import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: string;
    email: string;
    [key: string]: unknown;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    pendingEmail: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    pendingEmail: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (
            state,
            action: PayloadAction<{ user: User; access: string; refresh?: string }>
        ) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.access;
            state.refreshToken = action.payload.refresh || null;
            state.pendingEmail = null
        },
        clearAuth: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.pendingEmail = null
        },
        setpendingEmail: (state, action: PayloadAction<string>) => {
            state.pendingEmail = action.payload;
        }
    },
});

export const { setAuth, clearAuth, setpendingEmail } = authSlice.actions;
export default authSlice.reducer;
