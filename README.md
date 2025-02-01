# Spotify Parser

Spotify Parser is a npm package that allows you to easily get data from Spotify. It can fetch track and playlist data. It converts the input link to an embed, parses it and outputs the data back.

## Features

-   Fetch track information
-   Fetch album details
-   No need to login

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
