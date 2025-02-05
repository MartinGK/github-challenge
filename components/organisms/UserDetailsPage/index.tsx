import { GithubUser } from "@/lib/types";
import Image from "next/image";
import { SquareData } from "@/components/molecules/SquareData";
import { FavoriteButton } from "@/components/molecules/FavoriteButton";
import { format } from "date-fns";
import { useGithubContext } from "@/lib/contexts/GithubContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

export const UserDetailsPage = ({ userDetails }: { userDetails: GithubUser }) => {
    const { users, fetchUsers } = useGithubContext();
    const user = users.find((u) => u.id === userDetails.id);
    const router = useRouter();

    useEffect(() => {
        if (!users.length) {
            fetchUsers(userDetails.login);
        }
    }, [userDetails.login, fetchUsers]);

    if (!user) return null;

    return <div className="flex flex-col gap-5 items-center h-screen w-screen p-20 relative">
        <button onClick={() => router.back()} className="bg-black hover:bg-gray-500 text-white p-2 rounded-full absolute top-5 left-5">
            <IoIosArrowBack className="w-5 h-5" />
        </button>
        <div className="flex flex-row justify-center gap-5">
            <div className="flex flex-row gap-5 border-2 border-gray-200 rounded-md p-5 shadow-lg">
                <Image src={userDetails.avatar_url} alt={userDetails.login} width={100} height={100} />
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl font-bold">{userDetails.login}</h2>
                    <p className="text-xl text-gray-500">{userDetails.bio ?? "No bio"}</p>
                </div>
            </div>
            <FavoriteButton user={user} />
        </div>

        <div className="flex-row gap-5 grid grid-cols-2 lg:grid-cols-4">
            <SquareData title="Bio" value={userDetails.bio ?? "No bio"} />
            <SquareData title="Repos" value={userDetails.public_repos.toString()} />
            <SquareData title="Followers" value={userDetails.followers.toString()} />
            <SquareData title="Following" value={userDetails.following.toString()} />
            <SquareData title="Location" value={userDetails.location ?? "No location"} />
            <SquareData title="Company" value={userDetails.company ?? "No company"} />
            <SquareData title="Email" value={userDetails.email ?? "No email"} />
            <SquareData title="Twitter" value={userDetails.twitter_username ?? "No twitter"} />
            <SquareData title="Blog" value={userDetails.blog ?? "No blog"} />
            <SquareData title="Hireable" value={userDetails.hireable ? "Yes" : "No"} />
            <SquareData title="Created At" value={format(new Date(userDetails.created_at), "dd/MM/yyyy")} />
            <SquareData title="Updated At" value={format(new Date(userDetails.updated_at), "dd/MM/yyyy")} />
        </div>
    </div>;
}
