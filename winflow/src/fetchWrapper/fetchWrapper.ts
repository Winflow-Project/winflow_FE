import axios, {
    AxiosRequestConfig,
    AxiosError,
    AxiosInstance,
    AxiosResponse,
    CancelTokenSource,
    InternalAxiosRequestConfig,
} from "axios";

export const cancelTokenSources: CancelTokenSource[] = [];

const BASE_URL = "https://winflow-be.onrender.com/v1/api";

// Function to create an Axios instance
const createAxiosInstance = (
    baseUrl: string,
    tokenKey: string = "token",
    includeAuthHeader: boolean = true,
    headers: Record<string, string> = { "Content-Type": "application/json" }
): AxiosInstance => {
    const instance = axios.create({
        baseURL: baseUrl,
        headers,
    });

    // Common interceptor setup
    instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            if (includeAuthHeader) {
                const token = sessionStorage.getItem(tokenKey) || "null";
                config.headers = {
                    ...config.headers,
                    Authorization: `Bearer ${token}`,
                };
            }
            // config.headers["TenantId"] = process.env.NEXT_PUBLIC_TENANT_ID;

            const source = axios.CancelToken.source();
            config.cancelToken = source.token;
            cancelTokenSources.push(source);

            return config;
        },
        (error: AxiosError) => Promise.reject(error)
    );

    instance.interceptors.response.use(
        (res: AxiosResponse) => res,
        (err: AxiosError<{ status?: number; message?: string }>) => {
            if (
                err.response?.data?.status === 401 ||
                err.response?.data?.message === "Unauthenticated"
            ) {
                console.log("error", err.response?.data?.status);
                console.log("error", err.response?.data?.message);

                if (typeof window !== "undefined") {
                    const url = new URL(window.location.href);
                    let from = url.pathname;
                    const sp = url.searchParams.toString();
                    if (sp) {
                        from += `?${sp}`;
                    }

                    cancelTokenSources.forEach((source) =>
                        source.cancel("Token Expired")
                    );
                    cancelTokenSources.length = 0;

                    window.location.href = `/login?expired=true&from=${encodeURIComponent(
                        from
                    )}`;
                }
            }
            return Promise.reject(err);
        }
    );

    return instance;
};

// Wrapper function to create CRUD operations
const createFetchWrapper = (instance: AxiosInstance) => ({
    get: <T = any>(url: string, config?: AxiosRequestConfig) =>
        instance.get<T>(url, config),
    post: <T = any>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
        instance.post<T>(url, data, config),
    patch: <T = any>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
        instance.patch<T>(url, data, config),
    put: <T = any>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
        instance.put<T>(url, data, config),
    delete: <T = any>(url: string, config?: AxiosRequestConfig) =>
        instance.delete<T>(url, config),
});

// Creating Axios instances
const authAxiosInstance = createAxiosInstance(`${BASE_URL}`);
const baseAxiosInstance = createAxiosInstance(`${BASE_URL}`, "token", false);
const formAxiosInstance = createAxiosInstance(`${BASE_URL}`, "token", true, {
    "Content-Type": "multipart/form-data",
});

// Exporting wrappers
const fetchAuthWrapper = createFetchWrapper(authAxiosInstance);
const fetchUserProfileWrapper = createFetchWrapper(authAxiosInstance);
const fetchBaseWrapper = createFetchWrapper(baseAxiosInstance);
const fetchFormWrapper = createFetchWrapper(formAxiosInstance);

export {
    fetchAuthWrapper,
    fetchUserProfileWrapper,
    fetchBaseWrapper,
    fetchFormWrapper,
};
