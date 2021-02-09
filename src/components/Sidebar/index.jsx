/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import Profile from '../Profile';
// import SocialLinks from '../SocialLinks';
import Logo from '../Logo';
import * as S from './styled';
import MenuLinks from '../MenuLinks';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Logo />
    {/* <Profile />
    <SocialLinks /> */}
    <MenuLinks />
  </S.SidebarWrapper>
);

export default Sidebar;
