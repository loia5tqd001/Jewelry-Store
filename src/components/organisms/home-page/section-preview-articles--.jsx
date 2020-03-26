import React from 'react';

import routes, { StyledLink } from '../../../routes';
import ArticlePreview from '../../molecules/article-preview--';

import DATA from './section-preview-articles.data';
import { SectionContainer, ArticlesContainer } from './section-preview-articles.styled';

function SectionPreviewArticles() {
  return (
    <SectionContainer>
      <h2>
        <StyledLink to={routes.newArticles.path}>Bài viết mới nhất</StyledLink>
      </h2>
      <ArticlesContainer>
        {DATA.map((item) => (
          <ArticlePreview key={item.articleId} {...item} />
        ))}
      </ArticlesContainer>
    </SectionContainer>
  );
}

export default SectionPreviewArticles;
