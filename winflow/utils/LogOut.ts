// utils/auth.ts
export const handleLogout = (): void => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem("token");
        window.location.href = "/login?expired=true";
    }
};
