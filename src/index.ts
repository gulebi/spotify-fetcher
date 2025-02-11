import { parse, SyntaxKind, walk } from "html5parser";
import { formatEmbedURL } from "spotify-uri";
import { SpotifyPlaylist, SpotifyTrack } from "./types";
import fetch from "node-fetch";

export default class SpotifyParser {
    private async getInfo<T = any>(url: string): Promise<T> {
        const embedURL = formatEmbedURL(url);

        const response = await fetch(embedURL);
        const html = await response.text();

        const ast = parse(html);

        let data: any;

        walk(ast, {
            enter: (node) => {
                if (node.type === SyntaxKind.Tag && node.name === "script" && Array.isArray(node.body)) {
                    if (node.attributes.find((a) => a.value?.value === "__NEXT_DATA__")) {
                        const text = node.body[0];

                        if (text.type === SyntaxKind.Text) {
                            data = JSON.parse(text.value)?.props?.pageProps?.state?.data?.entity;
                        }
                    } else if (node.attributes.find((a) => a.value?.value === "initial-state")) {
                        const text = node.body[0];

                        if (text.type === SyntaxKind.Text) {
                            data = JSON.parse(atob(text.value))?.data?.entity;
                        }
                    }
                }
            },
        });

        return data;
    }

    public async track(url: string) {
        return await this.getInfo<SpotifyTrack>(url);
    }

    public async playlist(url: string) {
        return await this.getInfo<SpotifyPlaylist>(url);
    }
}
