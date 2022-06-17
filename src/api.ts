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
  results: Resultsz[];
  total_pages: number;
  total_results: number;
}

export interface Resultsz {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguagesq;
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

export enum OriginalLanguagesq {
  En = "en",
  Es = "es",
  Fr = "fr",
  Ja = "ja",
}

export interface IReleaseDate {
  id: number;
  results: Resultss[];
}

export interface Resultss {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDate {
  certification: string;
  iso_639_1: ISO639_1;
  release_date: Date;
  type: number;
  note?: string;
}

export enum ISO639_1 {
  De = "de",
  Empty = "",
  Fr = "fr",
}

export interface ISimilarMovies {
  page: number;
  results: Resulttt[];
  total_pages: number;
  total_results: number;
}

export interface Resulttt {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  original_language: OriginalLanguagess;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguagess {
  De = "de",
  En = "en",
  Fr = "fr",
  Ja = "ja",
}

export interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface IGetMovieCredits {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: Department;
  job?: string;
}

export enum Department {
  Acting = "Acting",
  Directing = "Directing",
  Production = "Production",
  Sound = "Sound",
  Writing = "Writing",
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

export function getReleaseDates(id: number | undefined) {
  return fetch(
    `${BASE_PATH}/movie/${id}/release_dates?api_key=${API_KEY}`
  ).then((response) => response.json());
}

export function getSimilarMovies(id: number | undefined) {
  return fetch(
    `${BASE_PATH}/movie/${id}/similar?api_key=${API_KEY}&language=ko&page=1®ion=KR`
  ).then((response) => response.json());
}

export function getMovieDetails(id: Number | undefined) {
  return fetch(`${BASE_PATH}/movie/${id}?api_key=${API_KEY}`).then((response) =>
    response.json()
  );
}

export function getMovieCredits(id: Number | undefined) {
  return fetch(`${BASE_PATH}/movie/${id}/credits?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
