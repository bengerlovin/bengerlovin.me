import { NextApiRequest, NextApiResponse } from "next";
import { google, youtube_v3, Auth } from 'googleapis'

let googleAuth: Auth.GoogleAuth;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    googleAuth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY
        },
        scopes: ['https://www.googleapis.com/auth/youtube']
    });

    const youtube: youtube_v3.Youtube = google.youtube({
        auth: googleAuth,
        version: 'v3'
    });

    const listParams: youtube_v3.Params$Resource$Playlistitems$List = { playlistId: 'UCyWLwj0w2WRsXpOG_aLl-5Q', part: ['contentDetails'] };
    const response = await youtube.playlistItems.list(listParams);

    const listResults = await response.data;



    return res.status(200).json({
        listResults
    });
};