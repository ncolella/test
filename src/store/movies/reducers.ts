import {
    MoviesState,
    MoviesActionTypes,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILURE,
    GET_MOVIES_LOADING,
    GET_MOVIES_GENRES_SUCCESS,
    GET_MOVIES_GENRES_FAILURE,
    GET_CAROUSEL_MOVIES_LOADING,
    GET_CAROUSEL_MOVIES_SUCCESS,
    GET_CAROUSEL_MOVIES_FAILURE,
    GET_MOVIE_LOADING,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAILURE,
    GET_RELATED_MOVIES_LOADING,
    GET_RELATED_MOVIES_SUCCESS,
    GET_RELATED_MOVIES_FAILURE,
} from './types';

const initialState: MoviesState = {
    movie: {
        posterPath: null,
        adult: false,
        backdropPath: null,
        genreIds: [],
        id: 0,
        originalLanguage: '',
        originalTitle: '',
        overview: '',
        popularity: 0,
        releaseDate: '',
        title: '',
        video: false,
        voteAverage: 0,
        voteCount: 0,
    },
    movies: [],
    genres: [],
    topMovies: [],
    relatedMovies: [],
    page: null,
    totalPages: null,
    totalResults: null,
    error: null,
    didSearch: false,
    loading: false,
};

export function moviesReducer(
    state = initialState,
    action: MoviesActionTypes
): MoviesState {
    switch (action.type) {
        case GET_MOVIES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload.movies,
                page: action.payload.page,
                totalPages: action.payload.totalPages,
                totalResults: action.payload.totalResults,
                didSearch: true,
                error: null,
                loading: false,
            };
        case GET_MOVIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case GET_MOVIES_GENRES_SUCCESS:
            return {
                ...state,
                genres: action.payload,
            };
        case GET_MOVIES_GENRES_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case GET_CAROUSEL_MOVIES_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_CAROUSEL_MOVIES_SUCCESS:
            return {
                ...state,
                topMovies: action.payload.topMovies,
                loading: false
            };
        case GET_CAROUSEL_MOVIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case GET_MOVIE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                movie: action.payload.movie,
                error: null,
                loading: false,
            };
        case GET_MOVIE_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case GET_RELATED_MOVIES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_RELATED_MOVIES_SUCCESS:
            return {
                ...state,
                relatedMovies: action.payload.relatedMovies,
                error: null,
                loading: false,
            };
        case GET_RELATED_MOVIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
