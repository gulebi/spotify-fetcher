# Spotify Parser

Spotify Parser is an npm package designed to help you extract and parse data from Spotify. Whether you need to retrieve information about tracks, albums, artists, or playlists, this package provides a simple and efficient way to interact with the Spotify API.

## Features

-   Retrieve track information
-   Fetch album details
-   Get artist data
-   Access playlist contents
-   Easy-to-use API

## Installation

```bash
npm install spotify-parser
```

## Usage

```javascript
const SpotifyParser = require("spotify-parser");

// Example usage
SpotifyParser.getTrack("trackId")
    .then((track) => {
        console.log(track);
    })
    .catch((error) => {
        console.error(error);
    });
```

## License

This project is licensed under the MIT License.
