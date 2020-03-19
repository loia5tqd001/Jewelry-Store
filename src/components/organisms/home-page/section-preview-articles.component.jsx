import React from 'react';
import PropTypes from 'prop-types';

import ArticlePreview from '../../molecules/article-preview.component';

import { SectionContainer, Link, ArticlesContainer } from './section-preview-articles.styles';
import DATA from './section-preview-articles.data';

function SectionPreviewArticles(props) {
  return (
    <SectionContainer>
      <h2>
        <Link>Bài viết mới nhất</Link>
      </h2>
      <ArticlesContainer>
        {DATA.map((item, i) => (
          <ArticlePreview key={i} {...item} />
        ))}
      </ArticlesContainer>
    </SectionContainer>
  );
}

SectionPreviewArticles.propTypes = {};

export default SectionPreviewArticles;
