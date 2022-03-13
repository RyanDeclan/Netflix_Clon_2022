const API_KEY = "76cc6e403cc055aca7d30392d7bee9b9";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IGetMoviesResult {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = "en",
  Ja = "ja",
}

export interface IVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}
export interface IGetMovieVideo {
  success?: boolean;
  id: number;
  results: IVideo[];
}

export interface IGetUpcomingMovie {
  dates: Dates;
  page: number;
  results: Results[];
  total_pages: number;
  total_results: number;
}

export interface Results {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguages;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguages {
  En = "en",
  Es = "es",
  Fr = "fr",
  Ja = "ja",
}

export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko&page=1®ion=KR`
  ).then((response) => response.json());
}

export function getMovieVideo(id: number | undefined) {
  return fetch(`${BASE_PATH}/movie/${id}/videos?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getUpcomingMovies() {
  return fetch(
    `${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=ko&page=1®ion=KR`
  ).then((response) => response.json());
}
