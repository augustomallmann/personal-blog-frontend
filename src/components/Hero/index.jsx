/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './styled';
import HeroImg from '../../../static/assets/svg/hero.svg';

const Hero = ({ headingOne, subtitle, description }) => (

  <S.HeroWrap>
    <S.HeroRow>
      <S.HeroColumn>
        <S.HeroTitle>
          <h1 dangerouslySetInnerHTML={{ __html: headingOne }} />
        </S.HeroTitle>
        <S.HeroSubTitle>{subtitle}</S.HeroSubTitle>
        <S.HeroDescription>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </S.HeroDescription>
      </S.HeroColumn>
      <S.HeroColumn>
        <HeroImg />
      </S.HeroColumn>
    </S.HeroRow>
  </S.HeroWrap>
);

export default Hero;
