import { useEffect, useState, useRef } from "react";
import { useGithubContext } from "@/lib/contexts/GithubContext";

export const SearchUsers = () => {
    const { fetchUsers } = useGithubContext();
    const [search, setSearch] = useState("");
    const userRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (userRef.current) clearTimeout(userRef.current);

        userRef.current = setTimeout(() => {
            if (search && search.length > 2) {
                fetchUsers(search);
            }
        }, 500);

        return () => {
            if (userRef.current) clearTimeout(userRef.current);
        };
    }, [search, fetchUsers]);

    return <input aria-label="search-input" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full h-10 rounded-md border border-gray-300 p-2" placeholder="Search users" />
}