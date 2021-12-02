import React from 'react';
import styled from 'styled-components';

const StyledFigure = styled.figure`
  min-width: 100px;
  width: 100px;

  @media (min-width: 960px) {
    min-width: 200px;
    width: 200px;
  }
`;

interface ImageProps {
    src: string;
    alt?: string; // this should be mandatory
    style?: React.CSSProperties;
    imageStyle?: React.CSSProperties;
}
function CarouselImage(props: ImageProps) {
    const { src, alt, style, imageStyle } = props;

    return (
        <StyledFigure style={style} className="image">
            <img style={imageStyle} src={src} alt={alt} />
        </StyledFigure>
    );
}

export default CarouselImage;
