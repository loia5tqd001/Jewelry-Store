import React from 'react';
import PropTypes from 'prop-types';

import { Container, ImageContainer, ContentContainer, Title, Paragraph } from './article-preview.styles';

function ArticlePreview({ srcImage, time, title, previewContent }) {
  return (
    <Container>
      <ImageContainer>
        <img src={srcImage} alt={title} />
      </ImageContainer>
      <ContentContainer>
        <Paragraph>{time}</Paragraph>
        <Title>{title}</Title>
        <Paragraph>{previewContent}</Paragraph>
      </ContentContainer>
    </Container>
  );
}

ArticlePreview.propTypes = {
  srcImage: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  previewContent: PropTypes.string.isRequired,
};

ArticlePreview.defaultProps = {
  srcImage: 'https://file.hstatic.net/1000327411/article/blog6_grande.jpg',
  time: 'Thứ Hai 15.10.2018',
  title: 'Sức hút của vàng hồng trong ngành trang sức',
  previewContent:
    'Vàng hồng là một trong những nguyên liệu chế tác trang sức được các quý cô ưa chuộng nhất hiện nay.Vàng hồng từ lâu đã quen thuộc và trở thành...',
};

export default ArticlePreview;
