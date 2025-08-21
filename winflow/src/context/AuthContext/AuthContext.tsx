"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { clearAuth } from "@/redux/slice/authSlice";

// ---------- Types ----------
interface AuthContextType {
    loading: boolean;
    expired: boolean;
    updateExpired: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ---------- Provider ----------
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useDispatch<AppDispatch>();

    const { accessToken } = useSelector((state: RootState) => state.auth);

    const [loading, setLoading] = useState<boolean>(true);
    const [expired, setExpired] = useState<boolean>(false);

    // Redirect if no token
    useEffect(() => {
        const checkAuth = () => {
            const isAuthPage =
                pathname === "/auth/login" || pathname === "/auth/signup" || pathname === "/Pages/forgotPassword" || pathname === "/Pages/Otp" || pathname === "/Pages/Newsletter" || pathname === "/Pages/OtpSuccess" || pathname === "/" || pathname === "/Pages/Personilise" || pathname === "/Pages/checkMail";

            if (!accessToken && !isAuthPage) {
                let from = pathname;
                const sp = searchParams?.toString();
                if (sp) {
                    from += `?${sp}`;
                }

                // ✅ prevent infinite loops → use replace
                router.replace(`/auth/login?from=${encodeURIComponent(from)}`);
            }

            setLoading(false);
        };

        checkAuth();
        // ✅ don't include router in deps (prevents re-trigger)
    }, [pathname, searchParams, accessToken, router]);

    // If token expired → clear redux + redirect
    useEffect(() => {
        if (expired) {
            setExpired(false);
            dispatch(clearAuth());
            router.replace(`/auth/login?expired=true`);
        }
    }, [expired, router, dispatch]);

    if (loading) {
        return <div>loading.....</div>;
    }

    return (
        <AuthContext.Provider value={{ loading, expired, updateExpired: setExpired }}>
            {children}
        </AuthContext.Provider>
    );
};

// ---------- Hook ----------
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
