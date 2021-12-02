import React, {CSSProperties} from 'react';
import styled from 'styled-components';
import {Movie} from '../../commons/types';
import {MOVIE_DB_IMAGE_PATH} from '../../commons/constants';
import CarouselImage from "../atoms/CarouselImage";

const InfoContainer = styled.div``;

const TitleContainer = styled.span`
    position: absolute;
    color: white;
    bottom: 0;
    background: linear-gradient(to top, rgb(0 0 0), rgba(0, 0, 255, 0));
    width: 100px
    text-align: center;
    padding: 10px;
    display: none;
    
    @media (min-width: 960px) {
     width: 200px;
     display: inherit;
    }
`;

const imageStyle = {
    borderRadius: 0,
};

const ContainerImage = styled.div`
  margin-right: 10px;
`;

interface MovieCarouselItemProps {
    movie: Movie;
    style: CSSProperties;
}

function MovieCarouselItem(props: MovieCarouselItemProps) {
    const {movie, style} = props;

    return (
        <InfoContainer>
            {movie.backdropPath && (
                <ContainerImage>
                    <CarouselImage
                        imageStyle={imageStyle}
                        style={style}
                        src={`${MOVIE_DB_IMAGE_PATH}w300${movie.backdropPath}`}
                    />
                    {movie.title && (<TitleContainer style={style}>{movie.title}</TitleContainer>)}
                </ContainerImage>
            )}
        </InfoContainer>
    );
}

export default MovieCarouselItem;
