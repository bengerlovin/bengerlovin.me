import { WordPressPostsResult } from "@/types/DataTypes";

export default async function getLatestPosts() {

    try {

        let rawPosts = await fetch('https://happyhealthytechie.com/wp-json/wp/v2/posts')

        const data: WordPressPostsResult[] = await rawPosts.json();

        return data;
    }
    catch (e) {
        throw new Error("Error in fetching wordpress posts", e)
    }

}