import { fetchFormWrapper } from "../src/fetchWrapper/fetchWrapper";

// Example response type (adjust these based on your API's actual responses)
interface ApiResponse<T> {
    data: T;
    message?: string;
    status?: number;
}

// Example payload types
interface PaginationPayload {
    current_page: number;
    per_page: number;
}

interface IdPayload {
    id: number | string;
}

interface UpdateUserPayload {
    id: number | string;
    name?: string;
    email?: string;
    [key: string]: any;
}

export const userService = {
    getAllUsers: async (payload: PaginationPayload): Promise<any> => {
        const response = await fetchFormWrapper.get<ApiResponse<any>>(
            `/users/profile/get-users?current_page=${payload.current_page}&per_page=${payload.per_page}`
        );
        return response?.data;
    },

    getAllTenders: async (payload: any): Promise<any> => {
        const response = await fetchFormWrapper.post<ApiResponse<any>>(
            "/tenders/tenders",
            payload
        );
        return response?.data;
    },

    ExcelHistory: async (): Promise<any> => {
        const response = await fetchFormWrapper.get<ApiResponse<any>>(
            "/tenders/excel-history?page=1&perpage="
        );
        return response?.data;
    },

    updateUser: async (payload: UpdateUserPayload): Promise<any> => {
        const response = await fetchFormWrapper.post<ApiResponse<any>>(
            "/users/profile/edit-user",
            payload
        );
        return response?.data;
    },

    storeDesignation: async (payload: any): Promise<any> => {
        const response = await fetchFormWrapper.post<ApiResponse<any>>(
            "/designations/store-designation",
            payload
        );
        return response?.data;
    },

    deleteDesignation: async (payload: IdPayload): Promise<any> => {
        const response = await fetchFormWrapper.delete<ApiResponse<any>>(
            `/designations/delete-designation?designation_id=${payload.id}`
        );
        return response?.data;
    },

    ListDesignation: async (): Promise<any> => {
        const response = await fetchFormWrapper.get<ApiResponse<any>>(
            "/designations/index?page=1&perPage=10"
        );
        return response?.data;
    },

    importTender: async (payload: any): Promise<any> => {
        const response = await fetchFormWrapper.post<ApiResponse<any>>(
            "/tenders/import-tender",
            payload
        );
        return response?.data;
    },

    // Example for delete methods
    deleteUser: async (payload: IdPayload): Promise<any> => {
        const response = await fetchFormWrapper.delete<ApiResponse<any>>(
            `/users/profile/delete-user?user_id=${payload.id}`
        );
        return response?.data;
    },

    deleteRole: async (payload: IdPayload): Promise<any> => {
        const response = await fetchFormWrapper.delete<ApiResponse<any>>(
            `/roles/delete-role?role_id=${payload.id}`
        );
        return response?.data;
    },
};

export default userService;
