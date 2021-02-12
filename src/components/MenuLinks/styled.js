import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  // ${media.lessThan('large')`
  //   display: none;
  // `}
`;

export const MenuLinksList = styled.ul`
  display: flex;
  font-size: 1rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 1.5rem;
  .active {
    color: var(--highlight);
  }
`;

export const MenuLinksLink = styled(AniLink)`
  color: var(--menuLinks);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`;
