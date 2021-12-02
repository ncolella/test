import React from 'react';
import styled from 'styled-components';
import {Movie, Genre} from '../../commons/types';
import {MOVIE_DB_IMAGE_PATH} from '../../commons/constants';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import LabeledValue from './LabeledValue';
import Image from '../atoms/Image';
import {Link} from "react-router-dom";

const DetailContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    display: flex;
  }
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const imageStyle = {
    borderRadius: 6,
};

const ContainerImage = styled.div`
  margin-right: 20px;
`;

interface MovieInfoProps {
    movie: Movie;
    genres: Genre[];
}

function MovieInfo(props: MovieInfoProps) {
    const {movie, genres} = props;

    function getGenres(ids: number[]): string {
        // filter(Boolean) remove all undefined from the array values
        const genresFound = ids
            .map(id => genres.find(g => g.id === id))
            .filter(Boolean) as Genre[];
        return genresFound.map(genre => genre.name).join(', ');
    }

    return (
        <DetailContainer>
            <div>
                <Link to="/">
                    <Text testid="back-to-home" color="primary">← Back to Home</Text>
                </Link>
            </div>
            <Title style={{marginBottom: 0, marginTop: 20}} level={1} size={5} alignment="left">
                {movie.title} ({movie.releaseDate ? movie.releaseDate.slice(0, 4) : ''})
            </Title>
            <InfoContainer>
                {
                    movie.posterPath && (
                        <ContainerImage>
                            <Image
                                imageStyle={imageStyle}
                                src={`${MOVIE_DB_IMAGE_PATH}w200${movie.posterPath}`}
                            />
                        </ContainerImage>
                    )
                }

                <div>
                    <LabeledValue label="Vote:" value={movie.voteAverage.toString()}/>
                    <LabeledValue label="Genres:" value={getGenres(movie.genreIds)}/>
                    <LabeledValue label="Plot:" value={movie.overview}/>
                    <LabeledValue label="Release date:" value={movie.releaseDate} />
                </div>
            </InfoContainer>
        </DetailContainer>
    );
}

export default MovieInfo;
