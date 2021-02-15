import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  display:block
  height: ${(props) => (props.toggleMenu ? '0' : '2rem')} ;


`;

export const MenuLinksList = styled.ul`
  display: flex;
  font-size: 1rem;
  font-weight: 300;
  ${media.lessThan('medium')`
  display: ${(props) => (props.toggleMenu ? 'block' : 'none')} ;
  padding: ${(props) => (props.toggleMenu ? '0' : '2rem 0')} ;
`}

`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 1.5rem;
  
  .active {
    color: var(--highlight);
  }
  ${media.lessThan('medium')`
  padding: 1rem 1.5rem;

`}
`;

export const MenuLinksLink = styled(AniLink)`
  color: var(--menuLinks);
  text-decoration: none;
  &:hover {
    color: var(--highlight);
  }
`;
