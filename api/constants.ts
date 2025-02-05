export const GITHUB_API_ENDPOINTS = {
    GET_USERS: "/users",
    GET_SEARCH_USERS: (term: string) => `/search/users?q=${term}`,
    GET_USER: (username: string) => `/users/${username}`,
};
