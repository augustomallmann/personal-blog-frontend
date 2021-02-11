import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;
  
  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const LayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  background: var(--background);
  min-height: 100vh;
  width: 100%;

  ${media.greaterThan('large')`
  padding: 4rem 0 0 3.75rem;
  `}


  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
  ${media.lessThan('large')`
    padding: 4.125rem 0 3rem 0;
  `}
`;
