import React from 'react';
import { useDispatch, useSelector } from '../../store';
import SearchLayout from '../layouts/SearchLayout';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import SearchBox from '../molecules/SearchBox';
import MovieBoxList from '../organisms/MovieBoxList';
import TrendingMoviesCarousel from '../organisms/TrendingMoviesCarousel';

function SearchMoviesPage() {
  const dispatch = useDispatch();
  const { movies, genres, topMovies, error, loading, didSearch } = useSelector(
    ({ moviesState }) => moviesState
  );

  React.useEffect(() => {
    dispatch({ type: 'GET_MOVIES_GENRES_REQUEST' });
  }, [dispatch]);

  React.useEffect(() => {
    dispatch({ type: 'GET_CAROUSEL_MOVIES_REQUEST' });
  }, [dispatch]);

  const moviesSearchBox = (
    <SearchBox
      placeholder="Search a movie"
      genres={genres}
      error={error}
      loading={loading}
      onSearch={(n, d, g, l, r) => dispatch({ type: 'GET_MOVIES_REQUEST', payload: {
          name: n, discover: d, genre: g, language: l, rating: r
        } })}
    />
  );

  const trendingMoviesCarousel = (
      <TrendingMoviesCarousel
          testId="trending-movies-carousel"
          movies={topMovies}
      />
  );

  return (
    <SearchLayout
      header={<Header />}
      trendingMoviesCarousel={trendingMoviesCarousel}
      searchBox={moviesSearchBox}
      showSeparator={movies.length > 0}
      list={
        <MovieBoxList didSearch={didSearch} genres={genres} movies={movies} />
      }
      footer={<Footer />}
    />
  );
}

export default SearchMoviesPage;
