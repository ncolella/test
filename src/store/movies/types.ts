import { Movie, Genre } from '../../commons/types';

export interface MoviesState {
  movie: Movie;
  movies: Movie[];
  genres: Genre[];
  topMovies: Movie[];
  relatedMovies: Movie[];
  page: number | null;
  totalPages: number | null;
  totalResults: number | null;
  loading: boolean;
  didSearch: boolean;
  error: Error | null;
}

export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_LOADING = 'GET_MOVIES_LOADING';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

export interface GetMoviesRequest {
  type: typeof GET_MOVIES_REQUEST;
  payload: {
    name: string,
    discover: boolean,
    genre: number,
    language: string,
    rating: number
  };
}

export interface GetMoviesLoading {
  type: typeof GET_MOVIES_LOADING;
}

export interface GetMoviesSuccess {
  type: typeof GET_MOVIES_SUCCESS;
  payload: {
    movies: Movie[];
    page: number | null;
    totalPages: number | null;
    totalResults: number | null;
  };
}

export interface GetMoviesFailure {
  type: typeof GET_MOVIES_FAILURE;
  payload: Error;
}

export const GET_MOVIES_GENRES_REQUEST = 'GET_MOVIES_GENRES_REQUEST';
export const GET_MOVIES_GENRES_SUCCESS = 'GET_MOVIES_GENRES_SUCCESS';
export const GET_MOVIES_GENRES_FAILURE = 'GET_MOVIES_GENRES_FAILURE';

export interface GetMoviesGenresRequest {
  type: typeof GET_MOVIES_GENRES_REQUEST;
}

export interface GetMoviesGenresSuccess {
  type: typeof GET_MOVIES_GENRES_SUCCESS;
  payload: Genre[];
}

export interface GetMoviesGenresFailure {
  type: typeof GET_MOVIES_GENRES_FAILURE;
  payload: Error;
}

export const GET_CAROUSEL_MOVIES_REQUEST = 'GET_CAROUSEL_MOVIES_REQUEST';
export const GET_CAROUSEL_MOVIES_LOADING = 'GET_CAROUSEL_MOVIES_LOADING';
export const GET_CAROUSEL_MOVIES_SUCCESS = 'GET_CAROUSEL_MOVIES_SUCCESS';
export const GET_CAROUSEL_MOVIES_FAILURE = 'GET_CAROUSEL_MOVIES_FAILURE';

export interface GetCarouselMoviesRequest {
  type: typeof GET_CAROUSEL_MOVIES_REQUEST;
}

export interface GetCarouselMoviesLoading {
  type: typeof GET_CAROUSEL_MOVIES_LOADING;
}

export interface GetCarouselMoviesSuccess {
  type: typeof GET_CAROUSEL_MOVIES_SUCCESS;
  payload: {
    topMovies: Movie[];
  };
}

export interface GetCarouselMoviesFailure {
  type: typeof GET_CAROUSEL_MOVIES_FAILURE;
  payload: Error;
}

export const GET_MOVIE_REQUEST = 'GET_MOVIE_REQUEST';
export const GET_MOVIE_LOADING = 'GET_MOVIE_LOADING';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_FAILURE = 'GET_MOVIE_FAILURE';

export interface GetMovieRequest {
  type: typeof GET_MOVIE_REQUEST;
  payload: string;
}

export interface GetMovieLoading {
  type: typeof GET_MOVIE_LOADING;
}

export interface GetMovieSuccess {
  type: typeof GET_MOVIE_SUCCESS;
  payload: {
    movie: Movie;
  };
}

export interface GetMovieFailure {
  type: typeof GET_MOVIE_FAILURE;
  payload: Error;
}

export const GET_RELATED_MOVIES_REQUEST = 'GET_RELATED_MOVIES_REQUEST';
export const GET_RELATED_MOVIES_LOADING = 'GET_RELATED_MOVIES_LOADING';
export const GET_RELATED_MOVIES_SUCCESS = 'GET_RELATED_MOVIES_SUCCESS';
export const GET_RELATED_MOVIES_FAILURE = 'GET_RELATED_MOVIES_FAILURE';

export interface GetRelatedMoviesRequest {
  type: typeof GET_RELATED_MOVIES_REQUEST;
  payload: string;
}

export interface GetRelatedMoviesLoading {
  type: typeof GET_RELATED_MOVIES_LOADING;
}

export interface GetRelatedMoviesSuccess {
  type: typeof GET_RELATED_MOVIES_SUCCESS;
  payload: {
    relatedMovies: Movie[];
  };
}

export interface GetRelatedMoviesFailure {
  type: typeof GET_RELATED_MOVIES_FAILURE;
  payload: Error;
}

export type MoviesActionTypes =
  | GetMoviesRequest
  | GetMoviesLoading
  | GetMoviesSuccess
  | GetMoviesFailure
  | GetMoviesGenresRequest
  | GetMoviesGenresSuccess
  | GetMoviesGenresFailure
  | GetCarouselMoviesRequest
  | GetCarouselMoviesLoading
  | GetCarouselMoviesSuccess
  | GetCarouselMoviesFailure
  | GetMovieRequest
  | GetMovieLoading
  | GetMovieSuccess
  | GetMovieFailure
  | GetRelatedMoviesRequest
  | GetRelatedMoviesLoading
  | GetRelatedMoviesSuccess
  | GetRelatedMoviesFailure;
