const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

import SpotifyWebApi from 'spotify-web-api-node'


const credentials = {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://bengerlovin.me/'
};

const spotifyApi = new SpotifyWebApi(credentials);

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,

        })
    });

    return response.json();
};

async function setCredentials(token) {


    spotifyApi.setCredentials({
        refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
        accessToken: token,
    });



}

export default async function getSpotifyPlayHistory() {


    // set up authorization before making request
    let { access_token } = await getAccessToken();

    let today = new Date();
    let thirtyDaysAgo = new Date().setDate(today.getDate() - 30)


    let urlParams = new URLSearchParams({ after: `${thirtyDaysAgo}`, limit: '50' });
    let startingEndpoint = `${RECENTLY_PLAYED_ENDPOINT}?${urlParams}`
    let nextURL = startingEndpoint;
    let trackItems = [];

    do {
        let results = await fetch(nextURL, {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
        })

        let parsed = await results.json();

        if (parsed?.items) {
            trackItems = [...trackItems, ...parsed?.items]
        }
        nextURL = parsed.next;
    } while (nextURL != null)

    // each item -> item.track.duration_ms
    let totalPlaybackTime = trackItems.map((trackItem) => {
        return trackItem.track.duration_ms;
    }).reduce((partialSum, a) => partialSum + a, 0);

    totalPlaybackTime = parseInt(((totalPlaybackTime / 1000) / 60).toFixed(2))

    return totalPlaybackTime;

}