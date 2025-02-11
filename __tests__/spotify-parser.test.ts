import SpotifyParser from "../src/index";

describe("SpotifyFetcher", () => {
    let fetcher: SpotifyParser;

    beforeAll(() => {
        fetcher = new SpotifyParser();
    });

    test("should fetch track info", async () => {
        const url = "https://open.spotify.com/track/0CQwOxnMK1yRJaptJ0dkC7?si=573c2e5cf569431b";
        const trackInfo = await fetcher.track(url);
        expect(trackInfo).toBeDefined();
    });

    test("should fetch playlist info", async () => {
        const url = "https://open.spotify.com/album/52koatNHePHRWEmmkP0z2Z?si=1mb2DgEDT2icISYY45lMgg";
        const playlistInfo = await fetcher.playlist(url);
        expect(playlistInfo).toBeDefined();
    });
});
