/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

const Logo = () => (
  <S.LogoWrapper>
    <S.LogoLink
      to="/"
      cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
      title="Ir para página principal"
    >
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
