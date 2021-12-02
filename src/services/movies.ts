import { Movie, Genre } from '../commons/types';
import { MOVIE_DB_KEY, MOVIE_DB_PATH } from '../commons/constants';

function movieAdapter(rawMovie: any): Movie {
  return {
    adult: rawMovie.adult,
    backdropPath: rawMovie.backdrop_path,
    genreIds: rawMovie.genre_ids || rawMovie.genres.map((g: Genre) => g.id),
    id: rawMovie.id,
    originalLanguage: rawMovie.original_language,
    originalTitle: rawMovie.original_title,
    overview: rawMovie.overview,
    popularity: rawMovie.popularity,
    posterPath: rawMovie.poster_path,
    releaseDate: rawMovie.release_date,
    title: rawMovie.title,
    video: rawMovie.video,
    voteAverage: rawMovie.vote_average,
    voteCount: rawMovie.vote_count,
  };
}

export interface MoviesByNameResponse {
  movies: Movie[];
  page: number;
  totalPages: number;
  totalResults: number;
}

export interface RelatedMoviesResponse {
  relatedMovies: Movie[];
}

export interface TopMoviesResponse {
  topMovies: Movie[];
}

export interface MovieResponse {
  movie: Movie;
}

export type MoviesGenresResponse = Genre[];

export default {
  searchByFields: async (name: string, discover: boolean, genre: number, language: string, rating: number, ): Promise<MoviesByNameResponse> => {
    try {
      const byNameUrl = `${MOVIE_DB_PATH}/3/search/movie?api_key=${MOVIE_DB_KEY}`;
      const discoveryUrl = `${MOVIE_DB_PATH}/3/discover/movie?api_key=${MOVIE_DB_KEY}`;
      let url = '';

      if (!discover) {
        url += byNameUrl + '&query=' + name;
      } else {
        url += discoveryUrl +
            (genre !== -1 ? '&with_genres=' + genre : '') +
            (language ? '&with_original_language=' + language : '') +
            (rating !== -1 ? '&vote_average.gte=' + rating : '');
      }

      const res = await fetch(url);
      const body = await res.json();

      // this is a pretty simplified way handle failed requests
      // - we should expose a custom error to our users
      // - we should handle 204 and check if res.json() crashes
      if (!res.ok) throw new Error(body.errors.join(','));

      return {
        movies: body.results.map(movieAdapter),
        page: body.page,
        totalPages: body.total_pages,
        totalResults: body.total_results,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getGenres: async (): Promise<MoviesGenresResponse> => {
    try {
      const url = `${MOVIE_DB_PATH}/3/genre/movie/list?api_key=${MOVIE_DB_KEY}`;
      const res = await fetch(url);
      const body = await res.json();

      if (!res.ok) throw new Error(body.errors.join(','));

      return body.genres;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getTopMovies: async (): Promise<TopMoviesResponse> => {
    try {
      const url = `${MOVIE_DB_PATH}/3/trending/movie/week?api_key=${MOVIE_DB_KEY}`;
      const res = await fetch(url);
      const body = await res.json();

      // this is a pretty simplified way handle failed requests
      // - we should expose a custom error to our users
      // - we should handle 204 and check if res.json() crashes
      if (!res.ok) throw new Error(body.errors.join(','));

      return {
        topMovies: body.results.map(movieAdapter)
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getMovie: async (id: string): Promise<MovieResponse> => {
    try {
      const url = `${MOVIE_DB_PATH}/3/movie/${id}?api_key=${MOVIE_DB_KEY}`;
      const res = await fetch(url);
      const body = await res.json();

      // this is a pretty simplified way handle failed requests
      // - we should expose a custom error to our users
      // - we should handle 204 and check if res.json() crashes
      if (!res.ok) throw new Error(body.errors.join(','));

      return {
        movie: movieAdapter(body)
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getRelatedMovies: async (id: string): Promise<RelatedMoviesResponse> => {
    try {
      const url = `${MOVIE_DB_PATH}/3/movie/${id}/similar?api_key=${MOVIE_DB_KEY}`;
      const res = await fetch(url);
      const body = await res.json();

      // this is a pretty simplified way handle failed requests
      // - we should expose a custom error to our users
      // - we should handle 204 and check if res.json() crashes
      if (!res.ok) throw new Error(body.errors.join(','));

      return {
        relatedMovies: body.results.map(movieAdapter)
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
