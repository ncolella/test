import {spawn, call, put, takeLatest} from 'redux-saga/effects';
import MoviesService, {
    MovieResponse,
    MoviesByNameResponse,
    MoviesGenresResponse, RelatedMoviesResponse, TopMoviesResponse,
} from '../../services/movies';
import {
    GetMoviesRequest,
    GetMoviesSuccess,
    GetMoviesFailure,
    GetMoviesLoading,
    GetMoviesGenresSuccess,
    GetMoviesGenresFailure,
    GetCarouselMoviesLoading,
    GetCarouselMoviesSuccess,
    GetCarouselMoviesFailure,
    GetMovieRequest,
    GetMovieLoading,
    GetMovieSuccess,
    GetMovieFailure,
    GetRelatedMoviesRequest,
    GetRelatedMoviesLoading, GetRelatedMoviesSuccess, GetRelatedMoviesFailure,
} from '../movies/types';

function* watchGetMovies() {
    yield takeLatest('GET_MOVIES_REQUEST', fetchMovies);
}

function* fetchMovies(action: GetMoviesRequest) {
    try {
        yield put<GetMoviesLoading>({
            type: 'GET_MOVIES_LOADING',
        });

        // TS does not infer the yield calls yet
        // so we must define the variable type
        const data: MoviesByNameResponse = yield call(
            MoviesService.searchByFields,
            action.payload.name,
            action.payload.discover,
            action.payload.genre,
            action.payload.language,
            action.payload.rating
        );

        yield put<GetMoviesSuccess>({
            type: 'GET_MOVIES_SUCCESS',
            payload: data,
        });
    } catch (error) {
        yield put<GetMoviesFailure>({
            type: 'GET_MOVIES_FAILURE',
            payload: error,
        });
    }
}

function* watchGetGenres() {
    yield takeLatest('GET_MOVIES_GENRES_REQUEST', fetchGenres);
}

function* fetchGenres() {
    try {
        const data: MoviesGenresResponse = yield call(MoviesService.getGenres);

        yield put<GetMoviesGenresSuccess>({
            type: 'GET_MOVIES_GENRES_SUCCESS',
            payload: data,
        });
    } catch (error) {
        yield put<GetMoviesGenresFailure>({
            type: 'GET_MOVIES_GENRES_FAILURE',
            payload: error,
        });
    }
}

function* watchGetCarouselMovies() {
    yield takeLatest('GET_CAROUSEL_MOVIES_REQUEST', fetchCarouselMovies);
}

function* fetchCarouselMovies() {
    try {
        yield put<GetCarouselMoviesLoading>({
            type: 'GET_CAROUSEL_MOVIES_LOADING',
        });

        // TS does not infer the yield calls yet
        // so we must define the variable type
        const data: TopMoviesResponse = yield call(
            MoviesService.getTopMovies
        );

        yield put<GetCarouselMoviesSuccess>({
            type: 'GET_CAROUSEL_MOVIES_SUCCESS',
            payload: data,
        });
    } catch (error) {
        yield put<GetCarouselMoviesFailure>({
            type: 'GET_CAROUSEL_MOVIES_FAILURE',
            payload: error,
        });
    }
}

function* watchGetMovie() {
    yield takeLatest('GET_MOVIE_REQUEST', fetchMovie);
}

function* fetchMovie(action: GetMovieRequest) {
    try {
        yield put<GetMovieLoading>({
            type: 'GET_MOVIE_LOADING',
        });

        // TS does not infer the yield calls yet
        // so we must define the variable type
        const data: MovieResponse = yield call(
            MoviesService.getMovie,
            action.payload
        );

        yield put<GetMovieSuccess>({
            type: 'GET_MOVIE_SUCCESS',
            payload: data,
        });
    } catch (error) {
        yield put<GetMovieFailure>({
            type: 'GET_MOVIE_FAILURE',
            payload: error,
        });
    }
}

function* watchGetRelatedMovies() {
    yield takeLatest('GET_RELATED_MOVIES_REQUEST', fetchRelatedMovies);
}

function* fetchRelatedMovies(action: GetRelatedMoviesRequest) {
    try {
        yield put<GetRelatedMoviesLoading>({
            type: 'GET_RELATED_MOVIES_LOADING',
        });

        // TS does not infer the yield calls yet
        // so we must define the variable type
        const data: RelatedMoviesResponse = yield call(
            MoviesService.getRelatedMovies,
            action.payload
        );

        yield put<GetRelatedMoviesSuccess>({
            type: 'GET_RELATED_MOVIES_SUCCESS',
            payload: data,
        });
    } catch (error) {
        yield put<GetRelatedMoviesFailure>({
            type: 'GET_RELATED_MOVIES_FAILURE',
            payload: error,
        });
    }
}

// https://redux-saga.js.org/docs/advanced/RootSaga.html
export default function* root() {
    yield spawn(watchGetMovies);
    yield spawn(watchGetGenres);
    yield spawn(watchGetCarouselMovies);
    yield spawn(watchGetMovie);
    yield spawn(watchGetRelatedMovies);
}
