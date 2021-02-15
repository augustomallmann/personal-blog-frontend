import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

const PostItem = ({
  slug, category, date, title, thumbnail,
}) => (
  <S.PostItemLink to={slug} cover direction="right" bg={getThemeColor()} duration={0.6}>
    <S.PostItemWrapper>
      <S.ThumbnailWrapper>
        {thumbnail && <S.PostThumbnail src={thumbnail.childImageSharp.fluid.src} />}
      </S.ThumbnailWrapper>
      <S.PostItemInfo>

        <S.PostItemTitle>
          {title}
        </S.PostItemTitle>
        <S.Divider />
        <S.PostDetailsWrap>

          <S.PostItemDate>
            {date}
          </S.PostItemDate>
          <S.Separator>
            •
          </S.Separator>
          <S.PostItemTag>
            {category}
          </S.PostItemTag>
        </S.PostDetailsWrap>
        {/* <S.PostItemDescription>
          {description}
        </S.PostItemDescription> */}
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
export default PostItem;
