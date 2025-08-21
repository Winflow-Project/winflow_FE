"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Reducers
import darkModeReducer from "./slice/DarkModeSlice/darkModeSlice";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
    auth: authReducer, // <-- add auth state
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "darkMode"], // <-- persist both auth + darkMode
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
