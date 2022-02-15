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

}