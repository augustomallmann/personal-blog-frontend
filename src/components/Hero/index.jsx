import React from 'react';
import * as S from './styled';
import HeroImg from '../../../static/assets/svg/hero.svg';

function Hero() {
  return (

    <S.HeroWrap>
      <S.HeroRow>
        <S.HeroColumn>
          <S.HeroTitle>
            Olá,
            <br />
            Sou Augusto
            <br />
            Desenvolvedor ReactJS
          </S.HeroTitle>
          <S.HeroSubTitle>Front-end Web</S.HeroSubTitle>
          <S.HeroDescription>
            Trabalho com tecnologia há 3 anos. Atualmente atuo como
            Desenvolvedor Front-end para a PUCRS. Possuo com experiência
            com SEO Tech, prestando consultoria, através da Agência Cadastra,
            para grandes empresas como Samsung, O Globo e Lojas Renner.
            <br />
            Precisa de ajuda em algum projeto? Você pode me encontrar nestes canais:
          </S.HeroDescription>
        </S.HeroColumn>
        <S.HeroColumn>
          <HeroImg />
        </S.HeroColumn>
      </S.HeroRow>
    </S.HeroWrap>
  );
}

export default Hero;
