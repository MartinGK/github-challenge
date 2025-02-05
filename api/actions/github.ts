import { GITHUB_API_ENDPOINTS } from "@/api/constants";
import { axios } from "@/lib/axios";

export const getUsers = async () => {
    try {
        const response = await axios.get(GITHUB_API_ENDPOINTS.GET_USERS);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getSearchUsers = async (term: string) => {
    try {
        const response = await axios.get(GITHUB_API_ENDPOINTS.GET_SEARCH_USERS(term));
        return response.data.items;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getUser = async (username: string) => {
    try {
        const response = await axios.get(GITHUB_API_ENDPOINTS.GET_USER(username));
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};