export type WordPressPostsResult = {

    id: number;
    date: string;
    date_gmt: string;
    slug: string;
    type: string;
    link: string;
    title: { rendered: string };
    tags: number[];
    sticky: boolean;
    qubely_featured_image_url: { full: [string | number] }

}

export type GithubCommitDataResult = {
    commitCount: number;
    commitData: {
        repo: string,
        commitData: any[],
    }[]
}