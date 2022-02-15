export default async function getLatestPosts() {

    try {

        let rawPosts = await fetch(process.env.WORDPRESS_API_ENDPOINT)

        const data = await rawPosts.json();

        return data ? data : null;
    }
    catch (e) {
        console.log("Error in fetching wordpress posts", e)
    }

}