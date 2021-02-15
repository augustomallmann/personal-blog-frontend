/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { MenuAltLeft } from '@styled-icons/boxicons-regular/MenuAltLeft';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import Logo from '../Logo';
import * as S from './styled';
// eslint-disable-next-line import/no-named-as-default-member
import MenuLinks from '../MenuLinks';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <S.NavbarWrapper>
      <S.TopMenuWrapper toggleMenu={toggleMenu}>
        <Logo />
        <S.MenuHamburguer onClick={() => setToggleMenu(!toggleMenu)}>
          { toggleMenu ? <CloseOutline /> : <MenuAltLeft />}
        </S.MenuHamburguer>
      </S.TopMenuWrapper>
      <MenuLinks toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

    </S.NavbarWrapper>
  );
};

export default Navbar;
