import { NextApiRequest, NextApiResponse } from "next";
import { google, youtube_v3, Auth } from 'googleapis'

let googleAuth: Auth.GoogleAuth;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { privateKey } = JSON.parse(process.env.GOOGLE_PRIVATE_KEY)
    googleAuth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/youtube.readonly']
    });

    const youtube: youtube_v3.Youtube = google.youtube({
        auth: googleAuth,
        version: 'v3'
    });

    const channelListParams: youtube_v3.Params$Resource$Channels$List = { id: ['UCyWLwj0w2WRsXpOG_aLl-5Q'], part: ['status'] }
    const listParams: youtube_v3.Params$Resource$Playlistitems$List = { playlistId: 'PL3iJPs0FCV3M3iD2MzW5LzVGYOOVvhigp', part: ['contentDetails', 'id'] };
    const response = await youtube.playlistItems.list(listParams);
    // const response = await youtube.channels.list(channelListParams)

    const listResults = response.data;



    return res.status(200).json({
        listResults
    });
};