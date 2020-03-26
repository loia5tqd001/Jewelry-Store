import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ImageContainer,
  Img,
  ActionContainer,
  Title,
  ButtonTitle,
} from './image-slowly-hover.styled';

function ImageSlowlyHover({ srcImage, title, buttonTitle }) {
  return (
    <Container>
      <ImageContainer>
        <Img src={srcImage} alt={title} />
      </ImageContainer>
      <ActionContainer>
        <Title>{title}</Title>
        <ButtonTitle>
          {buttonTitle} <ion-icon name="arrow-forward-outline" />
        </ButtonTitle>
      </ActionContainer>
    </Container>
  );
}

ImageSlowlyHover.propTypes = {
  srcImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default ImageSlowlyHover;
