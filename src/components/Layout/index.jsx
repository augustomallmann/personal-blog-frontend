import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import GlobalStyles from '../../styles/global';
import * as S from './styled';
import MenuBar from '../MenuBar';

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <Sidebar />
    <S.LayoutMain>{children}</S.LayoutMain>
    <MenuBar />
  </S.LayoutWrapper>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
