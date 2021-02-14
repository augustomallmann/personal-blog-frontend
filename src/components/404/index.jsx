import React from 'react';
import NotFoundImg from '../../images/notfound.svg';
import * as S from './styled';

function NotFound() {
  return (
    <S.NotFoundWrapper>
      <S.NotFoundRow>
        <NotFoundImg />
      </S.NotFoundRow>
    </S.NotFoundWrapper>
  );
}

export default NotFound;
