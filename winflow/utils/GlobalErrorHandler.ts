import { QueryClient, QueryCache, MutationCache, QueryCacheNotifyEvent, MutationCacheNotifyEvent } from "@tanstack/react-query";
import { handleLogout } from "./LogOut";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1, // Retry failed queries once
            refetchOnWindowFocus: false, // Avoid refetching when the window gains focus
        },
        mutations: {
            retry: 1, // Retry failed mutations once
        },
    },
});

// A type guard for Axios-like errors
function isUnauthorizedError(error: unknown): boolean {
    return (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        (error as { response?: { status?: number } }).response?.status === 401
    );
}

// Add a global error handler for queries
queryClient.getQueryCache().subscribe((event: QueryCacheNotifyEvent) => {
    console.log("query event", event);
    if (event?.type === "updated" && event.query.state.status === "error") {
        const error = event.query.state.error;
        if (isUnauthorizedError(error)) {
            handleLogout(); // Log out the user if token has expired
        }
    }
});

// Add a global error handler for mutations
queryClient.getMutationCache().subscribe((event: MutationCacheNotifyEvent) => {
    console.log("mutation event", event);
    if (event?.type === "updated" && event.mutation.state.status === "error") {
        const error = event.mutation.state.error;
        if (isUnauthorizedError(error)) {
            handleLogout(); // Log out the user if token has expired
        }
    }
});
