import React from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import Navbar from '../Navbar';
import GlobalStyles from '../../styles/global';
import * as S from './styled';
import MenuBar from '../MenuBar';

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <TransitionPortal level="top">
      <Navbar />
    </TransitionPortal>
    <S.LayoutMain>{children}</S.LayoutMain>
    <TransitionPortal level="medium">
      <MenuBar />
    </TransitionPortal>
  </S.LayoutWrapper>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
