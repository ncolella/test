import React from 'react';
import {useDispatch, useSelector} from '../../store';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import TrendingMoviesCarousel from '../organisms/TrendingMoviesCarousel';
import DetailLayout from "../layouts/DetailLayout";
import {useParams} from "react-router-dom";

function MoviePage() {

    const { id } = useParams();

    const dispatch = useDispatch();
    const {movie, genres, relatedMovies} = useSelector(
        ({moviesState}) => moviesState
    );

    React.useEffect(() => {
        dispatch({ type: 'GET_MOVIES_GENRES_REQUEST' });
    }, [dispatch]);

    React.useEffect(() => {
        dispatch({type: 'GET_MOVIE_REQUEST', payload: id as string});
    }, [dispatch, id]);

    React.useEffect(() => {
        dispatch({type: 'GET_RELATED_MOVIES_REQUEST', payload: id as string});
    }, [dispatch, id]);

    const trendingMoviesCarousel = (
        <TrendingMoviesCarousel
            movies={relatedMovies}
            testId="related-movies-carousel"
        />
    );

    return (
        <DetailLayout
            header={<Header/>}
            movie={movie}
            genres={genres}
            trendingMoviesCarousel={trendingMoviesCarousel}
            footer={<Footer/>}
        />
    );
}

export default MoviePage;
