import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { GithubUser } from "@/lib/types";
import { getSearchUsers, getUsers } from "@/api/actions/github";

type GithubContextType = {
    users: GithubUser[];
    isLoadingUsers: boolean;
    setUsers: (users: GithubUser[]) => void;
    toggleUserFavorite: (user: GithubUser) => void;
    setIsLoadingUsers: (isLoadingUsers: boolean) => void;
    fetchUsers: (search?: string) => Promise<void>;
};

const defaultState: GithubContextType = {
    users: [],
    isLoadingUsers: true,
    setUsers: () => { },
    toggleUserFavorite: () => { },
    setIsLoadingUsers: () => { },
    fetchUsers: () => Promise.resolve(),
};

export const GithubContext = createContext<GithubContextType>(defaultState);

export const GithubProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<GithubUser[]>([]);
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);

    const setUserAsFavorite = (user: GithubUser) => {
        localStorage.setItem("favoriteUsers", JSON.stringify([...(JSON.parse(localStorage.getItem("favoriteUsers") || "[]") || []), user.login]));
        setUsers(users.map(u => u.id === user.id ? { ...u, favorite: true } : u));
    };

    const setUserAsNotFavorite = (user: GithubUser) => {
        localStorage.setItem("favoriteUsers", JSON.stringify(users.filter(u => u.login !== user.login)));
        setUsers(users.map(u => u.id === user.id ? { ...u, favorite: false } : u));
    };

    const toggleUserFavorite = (user: GithubUser) => {
        if (user.favorite) {
            setUserAsNotFavorite(user);
        } else {
            setUserAsFavorite(user);
        }
    };

    const fetchUsers = useCallback(async (search: string = "") => {
        let fetchedUsers: GithubUser[] = [];

        setIsLoadingUsers(true);

        if (search.trim() === "") {
            fetchedUsers = await getUsers();
        } else {
            fetchedUsers = await getSearchUsers(search);
        }

        if (fetchedUsers) {
            const favoriteUsers = JSON.parse(localStorage.getItem("favoriteUsers") || "[]");
            const newUsers = fetchedUsers.map(user => {
                return { ...user, favorite: favoriteUsers.includes(user.login) };
            });
            setUsers(newUsers);
        }

        setIsLoadingUsers(false);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return <GithubContext.Provider value={{ users, setUsers, toggleUserFavorite, isLoadingUsers, setIsLoadingUsers, fetchUsers }}>{children}</GithubContext.Provider>;
};

export const useGithubContext = () => {
    return useContext(GithubContext);
};
