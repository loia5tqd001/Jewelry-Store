import React from 'react';
import PropTypes from 'prop-types';
import routes, { Link, StyledLink } from '../../utils/routes';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {
  Container,
  ImageContainer,
  ContentContainer,
  Title,
  Paragraph,
} from './article-preview.styled';

function ArticlePreview({ articleId, srcImage, time, title, previewContent }) {
  const to = `${routes.blog.path}/${articleId}`;

  return (
    <Container>
      <ImageContainer>
        <Link to={to} title={title}>
          <LazyLoadImage src={srcImage} alt={title} />
        </Link>
      </ImageContainer>
      <ContentContainer>
        <Paragraph>{time}</Paragraph>
        <Title>
          <StyledLink to={to}>{title}</StyledLink>
        </Title>
        <Paragraph>{previewContent}</Paragraph>
      </ContentContainer>
    </Container>
  );
}

ArticlePreview.propTypes = {
  articleId: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
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
