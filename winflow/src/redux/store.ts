"use client";

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { SetDarkModeAction } from './actionTypes/DarkModeActionTypes';
import DarkModeReducer from './reducers/DarkModeReducer';

// Combine multiple reducers
const rootReducer = combineReducers({
    darkMode: DarkModeReducer,
});

// Define RootState and RootAction types
export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = SetDarkModeAction;

// Redux Persist config
const persistConfig = {
    key: "root",
    storage,
};

// Persisted reducer
const persistedReducer = persistReducer<RootState, RootAction>(
    persistConfig,
    rootReducer
);

// Create the Redux store with persisted reducer
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Create the persistor
export const persistor = persistStore(store);
