export type GithubUser = {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
    user_view_type: string;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    email: string;
    twitter_username: string;
    bio: string | null;
    company: string;
    blog: string;
    hireable: string;
    created_at: string;
    updated_at: string;
} & {
    favorite: boolean;
}
