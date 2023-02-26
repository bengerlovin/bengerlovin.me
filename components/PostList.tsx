import { WordPressCategory, WordPressPostsResult } from "@/types/DataTypes";
import fetcher from "lib/fetcher";
import useSWR from "swr";
import SinglePostListItem from '@/components/SinglePostListItem'



const PostList = ({ }) => {

    let { data, error: fetchError } = useSWR<WordPressPostsResult[]>('https://happyhealthytechie.com/wp-json/wp/v2/posts', fetcher)

    return (
        <>

            {data && (
                <div className="w-full">

                    {/* Top 5 Published posts */}
                    {data.filter(item => !item.title.rendered.includes('FAQ') && !item.title.rendered.includes('About'))
                        .slice(0, 4)
                        .map((postItem) => (
                            <div key={postItem.id}>
                                <SinglePostListItem categories={postItem.categories} title={postItem.title.rendered} link={postItem.link}></SinglePostListItem>
                            </div>
                        ))}
                </div>
            )}

            {fetchError && (
                <div></div>
            )}
        </>
    )
}

function formatPosts(posts) {
    return (
        posts.map((postItem) => {
            return (<p key={postItem.id}>{postItem.title.rendered}</p>)
        })
    )
}

export default PostList
