import { useGithubContext } from "@/lib/contexts/GithubContext";
import { GithubUser } from "@/lib/types";
import { GoHeart, GoHeartFill } from "react-icons/go";
export const FavoriteButton = ({ user }: { user: GithubUser }) => {
    const { toggleUserFavorite } = useGithubContext();

    const handleFavorite = () => {
        toggleUserFavorite(user);
    };

    return <button
        aria-label="Add to favorites"
        className="ml-auto bg-transparent transition-all duration-300 h-[75px] w-[75px] rounded-full flex items-center justify-center"
        onClick={handleFavorite}
    >
        {user.favorite ? <GoHeartFill className="w-[75px] h-[75px]" fill="tomato" /> : <GoHeart className="w-[75px] h-[75px]" fill="tomato" />}
    </button>
}