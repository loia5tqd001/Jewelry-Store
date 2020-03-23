import React from 'react';
import DATA from './section-preview-articles.data';
import routes, { StyledLink } from '../../../routes';

import ArticlePreview from '../../molecules/article-preview.component';

import { SectionContainer, ArticlesContainer } from './section-preview-articles.styles';

function SectionPreviewArticles(props) {
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
