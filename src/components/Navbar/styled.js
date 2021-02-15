import styled from 'styled-components';
import media from 'styled-media-query';

export const NavbarWrapper = styled.div`
  align-items: center;
  background: var(--primaryBackground);
  display: ${(props) => (props.toggleMenu ? 'flex' : 'block')};
  flex-direction: row;
  justify-content: space-between;
  height: 70px
  position: fixed;
  top: 0;
  text-align: center;
  width: 100vw;
  padding: 0 15px 0  0;
  z-index: 99;
  
`;
export const TopMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const MenuHamburguer = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: none;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &.light{
    color: #134284;
    &:hover{
      color: #4886DB;
    }
  }
  &.dark{
    color: #FDD74F;
    &:hover{
      color: #C7A325;
    }
  }
  &:hover {
    color: var(--highlight);
  }

  ${media.greaterThan('medium')`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan('medium')`
    display: block;
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`;
