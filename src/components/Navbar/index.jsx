/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Logo from '../Logo';
import * as S from './styled';
import MenuLinks from '../MenuLinks';

const Navbar = () => (
  <S.NavbarWrapper>
    <Logo />
    <MenuLinks />
  </S.NavbarWrapper>
);

export default Navbar;
