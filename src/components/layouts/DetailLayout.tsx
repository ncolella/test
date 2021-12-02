import React from 'react';
import {Genre, Movie} from "../../commons/types";
import MovieInfo from "../molecules/MovieInfo";
import Subtitle from "../atoms/Subtitle";

const mainStyle = {
    flex: 1,
};
const Main = ({children}: { children: React.ReactNode }) => (
    <main style={mainStyle} className="section">
        {children}
    </main>
);

const baseLayoutStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
};

interface DetailLayoutProps {
    movie: Movie;
    genres: Genre[];
    style?: React.CSSProperties;
    header: React.ReactNode;
    trendingMoviesCarousel: React.ReactNode;
    footer: React.ReactNode;
}

function DetailLayout(props: DetailLayoutProps) {
    const {
        movie,
        genres,
        style,
        header,
        trendingMoviesCarousel,
        footer,
    } = props;

    return (
        <div style={{...baseLayoutStyle, ...style}}>
            {header}
            <Main>
                <MovieInfo genres={genres} movie={movie} />
                <Subtitle level={1} alignment="left" color="primary">Related Elements</Subtitle>
                {trendingMoviesCarousel}
            </Main>
            {footer}
        </div>
    );
}

export default DetailLayout;
