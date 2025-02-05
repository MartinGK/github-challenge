import { GithubUser } from "@/lib/types";
import { FavoriteButton } from "@/components/molecules/FavoriteButton";
import Image from "next/image";
import Link from "next/link";

export const GithubUserListItem = ({ user }: { user: GithubUser }) => {
    return <li
        className="w-full flex flex-row items-center justify-start box-shadow-lg rounded-md transition-all duration-300 gap-5 p-5 h-100"
        key={user.id}
    >
        <Image src={user.avatar_url} alt={user.login} width={100} height={100} priority />
        <div className="flex flex-col gap-5">
            <span className="text-2xl font-bold">{user.login}</span>
            <Link href={`/user/${user.login}`}>
                <span className="border-b border-gray-200 w-fit">See more details</span>
            </Link>
        </div>
        <FavoriteButton user={user} />
    </li>
}