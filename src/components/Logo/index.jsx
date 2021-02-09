/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt';
import * as S from './styled';

const Logo = () => (
  <S.LogoWrapper>
    <S.LogoLink>
      <S.LogoIcon>
        <CodeAlt />
      </S.LogoIcon>
      <S.LogoText>
        mallmann.dev
      </S.LogoText>
    </S.LogoLink>
  </S.LogoWrapper>
);

export default Logo;
