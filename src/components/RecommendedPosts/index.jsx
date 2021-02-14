/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        to={`/${previous.Slug}`}
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        className="previous"
      >
        {previous.Title}

      </S.RecommendedLink>
    )}

    {next && (
    <S.RecommendedLink
      to={`/${next.Slug}`}
      cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
      className="next"
    >
      {next.Title}

    </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
);

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    Title: propTypes.string.isRequired,
    Slug: propTypes.string.isRequired,
  }),
  previous: propTypes.shape({
    Title: propTypes.string.isRequired,

    Slug: propTypes.string.isRequired,
  }),
};

export default RecommendedPosts;
