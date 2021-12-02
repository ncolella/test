import React from 'react';
import {Movie} from "../../commons/types";
import MovieCarouselItem from "../molecules/MovieCarouselItem";
import LeftArrow from "../atoms/BackArrow";
import NextArrow from "../atoms/NextArrow";
import {
   Link
} from 'react-router-dom';

const trendingMoviesCarouselContainerStyle = {
    marginBottom: '3rem',
    display: 'flex',
    position: 'relative'
} as React.CSSProperties;

interface TrendingMoviesCarouselProps {
    testId: string;
    movies: Movie[];
}

function TrendingMoviesCarousel(props: TrendingMoviesCarouselProps) {
    const {movies, testId} = props;
    const [hover, setHover] = React.useState(false);
    const [position, setPosition] = React.useState(0);

    const screenWidth = window.innerWidth;
    const defaultWidth = screenWidth < 960 ? 100 : 200;
    const maxPosition = 10 - Math.trunc(screenWidth / (defaultWidth + 10));
    const showButtons = screenWidth < (defaultWidth + 10) * 10;

    function goToPrevSlide() {
        setPosition(p => p + 1);
    }

    function goToNextSlide() {
        setPosition(p => p - 1 < -maxPosition ? 0 : p - 1);
    }

    function show() {
        setHover(() => true);
    }

    function hide() {
        setHover(() => false);
    }

    return (
        <div style={trendingMoviesCarouselContainerStyle}
             onMouseEnter={show}
             onMouseLeave={hide}
             data-testid={testId}
        >
            {showButtons && <LeftArrow
                testid="left-arrow-button"
                type="chevronLeft"
                color="arrow"
                onClick={goToPrevSlide}
                buttonStyle={{
                    transition: 'opacity 250ms ease-in-out',
                    position: 'absolute',
                    color: 'white',
                    zIndex: 1000,
                    opacity: hover && position < 0 ? 1 : 0,
                    left: '-1.5rem',
                    height: '100%',
                    background: 'linear-gradient(to right, rgb(0 0 0 / 35%), rgba(0, 0, 255, 0))',
                    display: position === 0 ? 'none' : 'inherit'
                }}
                iconStyle={{
                    height: defaultWidth < 200 ? '20' : '40',
                    width: defaultWidth < 200 ? '20' : '40',
                    position: 'relative',
                    top: '25%'
                }}
            />}
            {movies
                .filter((_, i) => i < 10)
                .map((m: Movie) => (
                    <Link to={ '/movie/' + m.id } key={m.id}>
                        <MovieCarouselItem
                            movie={m}
                            style={{
                                transform: 'translateX(' + position * (defaultWidth + 10) + 'px)',
                                transition: 'transform 250ms ease-in-out',
                                animationIterationCount: 'infinite'
                            }}
                        />
                    </Link>
                ))}
            {showButtons && <NextArrow
                testid="left-arrow-button"
                type="chevronRight"
                color="arrow"
                onClick={goToNextSlide}
                buttonStyle={{
                    transition: 'opacity 250ms ease-in-out',
                    position: 'absolute',
                    color: 'white',
                    zIndex: 1000,
                    right: '-1.5rem',
                    opacity: hover ? 1 : 0,
                    height: '100%',
                    background: 'linear-gradient(to left, rgb(0 0 0 / 35%), rgba(0, 0, 255, 0))'
                }}
                iconStyle={{
                    height: defaultWidth < 200 ? '20' : '40',
                    width: defaultWidth < 200 ? '20' : '40',
                    position: 'relative',
                    top: '25%'
                }}
            />}
        </div>
    );
}

export default TrendingMoviesCarousel;
