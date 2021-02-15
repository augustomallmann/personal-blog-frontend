/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { HomeSmile } from '@styled-icons/boxicons-regular/HomeSmile';
import { Sun } from '@styled-icons/feather/Sun';
import { ArrowUp } from '@styled-icons/bootstrap/ArrowUp';
import { Moon } from '@styled-icons/evaicons-solid/Moon';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <HomeSmile />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          {isDarkMode ? <Sun /> : <Moon />}
        </S.MenuBarItem>

        <S.MenuBarItem title="Ir para o Topo">
          <ArrowUp onClick={() => window.scrollTo(0, 0)} />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
