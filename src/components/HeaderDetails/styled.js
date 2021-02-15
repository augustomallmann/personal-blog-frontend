import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrap = styled.section`
  max-width: 1300px;
  margin: 3rem auto;
  padding: 0 15px;
`;
export const HeadingOne = styled.h1`
  color: var(--texts);
  font-size: 4rem;
  font-weight: 700;
  margin: 1rem 0;
  ${media.lessThan('medium')`
   
    font-size: 2.625rem;
    line-height: 3.125rem;
  
`}
`;
export const Description = styled.p`
  color: var(--texts);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
`;
