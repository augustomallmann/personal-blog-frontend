import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'gatsby';

export const LogoWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: row;
`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--menuLinks);
  text-decoration: none;
  transition: color 0.5s;

  ${media.lessThan('large')`
    display: flex;
    text-align: left;
  `}

  &:hover {
    color: var(--highlight);
  }
`;

export const LogoText = styled.h1`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  text-transform: uppercase;
  color: var(--menuLinks);

  `;

export const LogoIcon = styled.span`
  color: var(--highlight);
  cursor: pointer;
  display: block;
  height: 4rem;
  padding: 1.1rem;
  position: relative;
  width: 4rem;
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
