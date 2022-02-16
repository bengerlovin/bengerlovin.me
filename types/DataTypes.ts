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
    categories: number[];
    qubely_featured_image_url: { full: [string | number] }

}

export type WordPressCategory = {
    id: number;
    name: string;
}

export type GithubCommitDataResult = {
    commitCount: number;
    commitData: {
        repo: string,
        commitData: any[],
    }[]
}