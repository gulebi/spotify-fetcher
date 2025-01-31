export interface SpotifyTrack {
    type: "track";
    name: string;
    uri: string;
    id: string;
    title: string;
    artists: {
        name: string;
        uri: string;
    }[];
    coverArt: null;
    releaseDate: {
        isoString: string;
    };
    duration: number;
    maxDuration: number;
    isPlayable: boolean;
    isExplicit: boolean;
    audioPreview: {
        url: string;
        format: string;
    };
    hasVideo: boolean;
    relatedEntityUri: string;
    visualIdentity: {
        backgroundBase: {
            alpha: number;
            blue: number;
            green: number;
            red: number;
        };
        backgroundTintedBase: {
            alpha: number;
            blue: number;
            green: number;
            red: number;
        };
        textBase: {
            alpha: number;
            blue: number;
            green: number;
            red: number;
        };
        textBrightAccent: {
            alpha: number;
            blue: number;
            green: number;
            red: number;
        };
        textSubdued: {
            alpha: number;
            blue: number;
            green: number;
            red: number;
        };
        image: {
            url: string;
            imageFormat: string;
            maxHeight: number;
            maxWidth: number;
        }[];
    };
}

export interface SpotifyPlaylist {
    type: "playlist" | "album";
    name: string;
    uri: string;
    id: string;
    title: string;
    subtitle: string;
    coverArt: null;
    releaseDate: null;
    duration: number;
    maxDuration: number;
    isPlayable: boolean;
    isExplicit: boolean;
    hasVideo: boolean;
    relatedEntityUri: string;
    trackList: {
        uri: string;
        uid: string;
        title: string;
        subtitle: string;
        isExplicit: boolean;
        duration: number;
        isPlayable: boolean;
        audioPreview: {
            format: string;
            url: string;
        };
    }[];
    visualIdentity: {
        backgroundBase: {
            alpha: number;
            blue: number;
            green: number;
            red: number;
        };
        backgroundTintedBase: {
            alpha: number;
            blue: number;
            green: number;
            red: number;
        };
        textBase: {
            alpha: number;
            blue: number;
            green: number;
            red: number;
        };
        textBrightAccent: {
            alpha: number;
            blue: number;
            green: number;
            red: number;
        };
        textSubdued: {
            alpha: number;
            blue: number;
            green: number;
            red: number;
        };
        image: {
            url: string;
            imageFormat: string;
            maxHeight: number;
            maxWidth: number;
        }[];
    };
}
