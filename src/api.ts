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








/* TV interface */
export interface IGetTvResult {
  page:          number;
  results:       Results[];
  total_pages:   number;
  total_results: number;
}

export interface Results {
  backdrop_path:     string;
  first_air_date:    Date;
  genre_ids:         number[];
  id:                number;
  name:              string;
  origin_country:    string[];
  original_language: string;
  original_name:     string;
  overview:          string;
  popularity:        number;
  poster_path:       null | string;
  vote_average:      number;
  vote_count:        number;
}


export interface IGetTvVideo {
  id:      number;
  results: Resultss[];
}

export interface Resultss {
  iso_639_1:    string;
  iso_3166_1:   string;
  name:         string;
  key:          string;
  site:         string;
  size:         number;
  type:         string;
  official:     boolean;
  published_at: Date;
  id:           string;
}


export interface ITvTopRated {
  page:          number;
  results:       ITvResult[];
  total_pages:   number;
  total_results: number;
}

export interface ITvResult {
  backdrop_path:     null | string;
  first_air_date:    Date;
  genre_ids:         number[];
  id:                number;
  name:              string;
  origin_country:    string[];
  original_language: string;
  original_name:     string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  vote_average:      number;
  vote_count:        number;
}

export interface ITvOnAir {
  page:          number;
  results:       ITvOnAirResult[];
  total_pages:   number;
  total_results: number;
}

export interface ITvOnAirResult {
  backdrop_path:     null | string;
  first_air_date:    Date;
  genre_ids:         number[];
  id:                number;
  name:              string;
  origin_country:    string[];
  original_language: string;
  original_name:     string;
  overview:          string;
  popularity:        number;
  poster_path:       null | string;
  vote_average:      number;
  vote_count:        number;
}


export interface ISearch {
  page:          number;
  results:       SearchResult[];
  total_pages:   number;
  total_results: number;
}

export interface SearchResult {
  adult?:                boolean;
  gender?:               number;
  id:                    number;
  known_for?:            KnownFor[];
  known_for_department?: string;
  media_type:            MediaType;
  name?:                 string;
  popularity:            number;
  profile_path?:         null | string;
  backdrop_path?:        null | string;
  first_air_date?:       Date;
  genre_ids?:            number[];
  origin_country?:       string[];
  original_language?:    ResultOriginalLanguage;
  original_name?:        string;
  overview?:             string;
  poster_path?:          null | string;
  vote_average?:         number;
  vote_count?:           number;
  original_title?:       string;
  release_date?:         Date;
  title?:                string;
  video?:                boolean;
}

export interface KnownFor {
  adult:             boolean;
  backdrop_path?:    null | string;
  genre_ids:         number[];
  id:                number;
  media_type:        MediaType;
  original_language: KnownForOriginalLanguage;
  original_title:    string;
  overview:          string;
  poster_path?:      null | string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export enum MediaType {
  Movie = "movie",
  Person = "person",
  Tv = "tv",
}

export enum KnownForOriginalLanguage {
  CN = "cn",
  En = "en",
  Zh = "zh",
}

export enum ResultOriginalLanguage {
  En = "en",
  Es = "es",
  Th = "th",
}

export interface ITvRating {
  results: ITvRatingResult[];
  id:      number;
}

export interface ITvRatingResult {
  iso_3166_1: string;
  rating:     string;
}


export interface ITvSimilar {
  page:          number;
  results:       ITvSimilarResult[];
  total_pages:   number;
  total_results: number;
}

export interface ITvSimilarResult {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  name:              string;
  origin_country:    string[];
  original_language: IOriginalLanguage;
  original_name:     string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  first_air_date:    Date;
  vote_average:      number;
  vote_count:        number;
}

export enum IOriginalLanguage {
  En = "en",
}

export interface ITvDetail {
  adult:                boolean;
  backdrop_path:        string;
  created_by:           any[];
  episode_run_time:     number[];
  first_air_date:       Date;
  genres:               Genre[];
  homepage:             string;
  id:                   number;
  in_production:        boolean;
  languages:            string[];
  last_air_date:        Date;
  last_episode_to_air:  TEpisodeToAir;
  name:                 string;
  next_episode_to_air:  TEpisodeToAir;
  networks:             Network[];
  number_of_episodes:   number;
  number_of_seasons:    number;
  origin_country:       string[];
  original_language:    string;
  original_name:        string;
  overview:             string;
  popularity:           number;
  poster_path:          string;
  production_companies: Network[];
  production_countries: ProductionCountry[];
  seasons:              Season[];
  spoken_languages:     SpokenLanguage[];
  status:               string;
  tagline:              string;
  type:                 string;
  vote_average:         number;
  vote_count:           number;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface TEpisodeToAir {
  air_date:        Date;
  episode_number:  number;
  id:              number;
  name:            string;
  overview:        string;
  production_code: string;
  runtime:         number | null;
  season_number:   number;
  still_path:      null | string;
  vote_average:    number;
  vote_count:      number;
}

export interface Network {
  name:           string;
  id:             number;
  logo_path?:     string;
  origin_country: string;
  logo?:          Logo;
}

export interface Logo {
  path:         string;
  aspect_ratio: number;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}

export interface Season {
  air_date:      Date;
  episode_count: number;
  id:            number;
  name:          string;
  overview:      string;
  poster_path:   string;
  season_number: number;
  networks:      Network[];
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}


export interface ITvCredit {
  cast: ICast[];
  crew: ICast[];
  id:   number;
}

export interface ICast {
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: string;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         null | string;
  character?:           string;
  credit_id:            string;
  order?:               number;
  department?:          string;
  job?:                 string;
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

export function getMovieTopRated(){
  return fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=ko&page=1®ion=KR`).then(
    (response) => response.json()
  );
}




/* TV API */


export function getTvPopular() {
  return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}&language=ko&page=1®ion=KR`).then(
    (response) => response.json()
  );
}

export function getTvVideo(id: number | undefined) {
  return fetch(`${BASE_PATH}/tv/${id}/videos?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getTopLated(){
  return fetch(`${BASE_PATH}/tv/top_rated?api_key=${API_KEY}&language=ko&page=1®ion=KR`).then(
    (response) => response.json()
  );
}

export function getTvOnAir(){
  return fetch(`${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}&language=ko&page=1®ion=KR`).then(
    (response) => response.json()
  );
}

export function getTvContentRatings(id: number | undefined){
  return fetch(`${BASE_PATH}/tv/${id}/content_ratings?api_key=${API_KEY}&language=en-US`).then(
    (response) => response.json()
  );
}

export function getTvSimilar(id: number | undefined){
  return fetch(`${BASE_PATH}/tv/${id}/content_ratings?api_key=${API_KEY}&language=ko&page=1®ion=KR`).then(
    (response) => response.json()
  );
}

export function getTvDetail(id: number | undefined){
  return fetch(`${BASE_PATH}/tv/${id}/content_ratings?api_key=${API_KEY}&language=ko&page=1®ion=KR`).then(
    (response) => response.json()
  );
}

export function getTvCredits(id: number | undefined){
  return fetch(`${BASE_PATH}/tv/${id}/credits?api_key=${API_KEY}&language=en-US`).then(
    (response) => response.json()
  );
}


/* search  */

export function multiSearch(query : string | undefined){
  return fetch(`${BASE_PATH}/search/multi?api_key=${API_KEY}&language=ko&query=${query}&page=1®ion=KR&include_adult=false`).then(
    (response) => response.json()
  );
}