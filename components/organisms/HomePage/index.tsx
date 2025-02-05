import { useGithubContext } from "@/lib/contexts/GithubContext";
import { GithubUserListItem } from "@/components/molecules/GithubUserListItem";
import { SearchUsers } from "@/components/atoms/SearchUsers";
import { Skeleton } from "@heroui/skeleton";

export const HomePage = () => {
    const { users, isLoadingUsers } = useGithubContext();

    return <div
        className="flex flex-col items-center justify-center h-screen w-screen p-16 gap-10"
    >
        <div className="w-full">
            <SearchUsers />
        </div>
        <ul className="w-full h-full flex flex-col gap-5" >
            {isLoadingUsers ?
                [...Array(10)].map((_, index) => <li key={index}>
                    <Skeleton className="h-[130px] w-full" />
                </li>)
                : users.map((user) => (
                    <GithubUserListItem key={user.id} user={user} />
                ))
            }
        </ul>
    </div>;
};
