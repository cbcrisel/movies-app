// To parse this data:
//
//   import { Convert, NowPlayingResponse } from "./file";
//
//   const nowPlayingResponse = Convert.toNowPlayingResponse(json);

export interface NowPlayingResponse {
    dates:         Dates;
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Movie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    Ja = "ja",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toNowPlayingResponse(json: string): NowPlayingResponse {
        return JSON.parse(json);
    }

    public static nowPlayingResponseToJson(value: NowPlayingResponse): string {
        return JSON.stringify(value);
    }
}