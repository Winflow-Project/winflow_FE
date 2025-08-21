"use client";

import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import DarkModeProvider from "@/components/DarkModeProvider";
import { ToastContainer } from "react-toastify";
import ReactQueryProvider from "./QueryClientProvider";


export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ReactQueryProvider>
                    <DarkModeProvider>
                        {children}
                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </DarkModeProvider>
                </ReactQueryProvider>
            </PersistGate>
        </Provider>
    );
}
