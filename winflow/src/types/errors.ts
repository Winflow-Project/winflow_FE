// Error types for API responses
export interface ApiError {
    message?: string;
    status?: number;
    code?: string;
    details?: Record<string, unknown>;
}

export interface AxiosErrorResponse {
    response?: {
        data?: ApiError;
        status?: number;
        statusText?: string;
    };
    message?: string;
    code?: string;
    request?: unknown;
}

export type ErrorHandler = (error: AxiosErrorResponse) => void;

