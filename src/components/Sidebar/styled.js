import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.div`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--primaryBackground);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px
  position: fixed;
  top: 0;
  text-align: center;
  width: 100vw;
  padding: 0 15px 0  0;
  z-index: 99;

  ${media.lessThan('large')`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`;
