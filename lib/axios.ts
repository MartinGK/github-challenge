import axiosInstance from "axios";

export const axios = axiosInstance.create({
    baseURL: process.env.NEXT_PUBLIC_GITHUB_API_URL,
});
