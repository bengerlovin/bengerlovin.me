import { NextApiRequest, NextApiResponse } from "next";
import { WordPressPostsResult } from '@/types/DataTypes'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const rawPostData = await fetch(process.env.WORDPRESS_RECENT_POSTS_API);
    const results: WordPressPostsResult[] = await rawPostData.json();
    res.status(200).json({ msg: "hello from wordpress", data: results })
}