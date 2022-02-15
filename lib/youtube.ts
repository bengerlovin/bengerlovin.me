import { google, youtube_v3, Auth } from 'googleapis'
import * as duration from 'duration-fns'


export default async function getYoutubeStats() {

    let googleAuth: Auth.GoogleAuth;

    // global variables
    let totalPlaybackTime = 0;

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


    const listParams: youtube_v3.Params$Resource$Playlistitems$List = { playlistId: 'PL3iJPs0FCV3MC-R-BAfO2b7-VN9SaUpp9', part: ['contentDetails', 'id'], maxResults: 50 };
    let videosFromPlaylist = await youtube.playlistItems.list(listParams);
    // const response = await youtube.channels.list(channelListParams)


    for (const video of videosFromPlaylist.data.items) {
        let videoItem = await youtube.videos.list({
            part: ['contentDetails'],
            id: [video.contentDetails.videoId]
        })

        if (videoItem.data.items.length > 0) {

            let minuteLength = duration.toMinutes(duration.parse(videoItem.data.items?.[0].contentDetails.duration))

            if (minuteLength) {
                totalPlaybackTime += minuteLength;
            }
        }

    }
    totalPlaybackTime = parseInt(totalPlaybackTime.toFixed(0));

    return totalPlaybackTime;

};
