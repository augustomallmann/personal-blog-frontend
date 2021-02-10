/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Logo from '../Logo';
import * as S from './styled';
import MenuLinks from '../MenuLinks';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Logo />
    <MenuLinks />
  </S.SidebarWrapper>
);

export default Sidebar;
