import { WordPressPostsResult } from "@/types/DataTypes";

export default async function getLatestPosts() {

    try {

        let rawPosts = await fetch(process.env.WORDPRESS_API_ENDPOINT)

        const data: WordPressPostsResult[] = await rawPosts.json();

        return data;
    }
    catch (e) {
        console.log("Error in fetching wordpress posts", e)
    }

}