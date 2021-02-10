import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--secondaryBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  left: 0;
  width: 3.75rem;
  z-index: 98;


  ${media.lessThan('large')`
  bottom: 0;
  flex-direction: row;
  height: auto;
  padding: 0;
  position: fixed;
  width: 100%;
`}
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  &:first-of-type{
    margin-top: 4rem;
  }

  ${media.lessThan('large')`
    flex-direction: row;
    &:first-of-type{
      margin-top: 0rem;
    }
  `}
`;

export const MenuBarLink = styled(AniLink)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &.light{
    color: #d4d400;
    &:hover{
      color: #e2e240;
    }
  }
  &:hover {
    color: var(--highlight);
  }
  &.display {
    ${media.lessThan('large')`
      display: none;
    `}
  }
  ${media.greaterThan('large')`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan('large')`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`;
