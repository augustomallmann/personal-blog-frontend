/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './styled';

function HeaderDetails({ details }) {
  return (
    <S.HeaderWrap>
      <>
        <S.HeadingOne>
          {details.title}
        </S.HeadingOne>
        <S.Description>
          {details.description}
        </S.Description>
      </>

    </S.HeaderWrap>
  );
}

export default HeaderDetails;
