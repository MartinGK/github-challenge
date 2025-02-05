import { getUser } from "@/api/actions/github";
import { UserDetailsPage } from "@/components/organisms/UserDetailsPage";
import { GithubUser } from "@/lib/types";

export default function UserDetails({ userDetails }: { userDetails: GithubUser }) {
    return <UserDetailsPage userDetails={userDetails} />;
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
    const { id } = params;

    if (typeof id === "string") {
        const userDetails = await getUser(id);
        return {
            props: { userDetails: userDetails },
        };
    }
    return {
        notFound: true,
    };
}
