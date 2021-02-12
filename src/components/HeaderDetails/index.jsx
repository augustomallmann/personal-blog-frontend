/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './styled';

function HeaderDetails({ details }) {
  return (
    <S.HeaderWrap>
      {details.map(({
        node: {
          title,
          description,

        },
      }) => (
        <>
          <S.HeadingOne>
            {title}
          </S.HeadingOne>
          <S.Description>
            {description}
          </S.Description>
        </>
      ))}
    </S.HeaderWrap>
  );
}

export default HeaderDetails;
