"use client";

import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import DarkModeProvider from "@/components/DarkModeProvider";

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <DarkModeProvider>
                    {children}
                </DarkModeProvider>
            </PersistGate>
        </Provider>
    );
}
