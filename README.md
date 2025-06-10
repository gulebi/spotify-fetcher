# Spotify Fetcher

Spotify Fetcher is a npm package that allows you to easily get data from Spotify. It can fetch track and playlist data. It converts the input link to an embed, fetches it and outputs the data back.

## Features

-   Fetch track information
-   Fetch album details
-   No need to login

## Installation

```bash
npm install spotify-fetcher
```

## Usage

```javascript
const SpotifyFetcher = require("spotify-fetcher");

const spotifyFetcher = new SpotifyFetcher();

async function fetchSpotifyData(url) {
    const fetchedData = await spotifyFetcher.track(url);
    console.log(fetchedData);
}

const spotifyUrl = "https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC";

fetchSpotifyData(spotifyUrl);
```

## License

This project is licensed under the MIT License.
