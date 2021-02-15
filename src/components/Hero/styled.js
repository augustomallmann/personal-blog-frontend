import styled from 'styled-components';
import media from 'styled-media-query';

export const HeroWrap = styled.div`
  color: var(--texts);
  max-width: 1300px;
  margin:  auto;
  height: 100%;
  display: flex;
  align-items: center;
  
}

`;

export const HeroRow = styled.div`
  display: flex;
  width: 100%;
  align-items:center;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const HeroColumn = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding: 0 15px;
  width:100%;
`;

export const HeroTitle = styled.div`
    font-size: 3.5rem;
    text-align: left;
    font-weight: bold;
    line-height: 4rem;
    text-decoration: underline solid rgb(245, 82, 87);
    ${media.lessThan('large')`
    font-size: 2.625rem;
    line-height: 3.125rem;
  `}
    ${media.lessThan('medium')`
    font-size: 1.75rem;
    line-height: 2.25rem;
    margin: 3rem 0 1.3rem;

  `}
  ${media.lessThan('small')`
    font-size: 2.25rem;
    line-height: 2.625rem;
  `}
`;

export const HeroSubTitle = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 1.3rem 0;
  ${media.lessThan('medium')`
    font-size: 1.125rem;
    margin: 1rem 0;
  `}
  ${media.lessThan('small')`
    margin: 1.3rem 0;
  `}
  `;

export const HeroDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  `;
