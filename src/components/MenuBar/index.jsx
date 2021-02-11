/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { HomeSmile } from '@styled-icons/boxicons-regular/HomeSmile';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import { ListThumbnails } from '@styled-icons/foundation/ListThumbnails';
import { Sun } from '@styled-icons/feather/Sun';
import { GridHorizontal } from '@styled-icons/boxicons-regular/GridHorizontal';
import { ArrowUp } from '@styled-icons/bootstrap/ArrowUp';
import { Moon } from '@styled-icons/evaicons-solid/Moon';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);
    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
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
        <S.MenuBarLink
          to="/search/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <SearchAlt />
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
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
          }}
        >
          {isListMode ? <GridHorizontal /> : <ListThumbnails />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o Topo">
          <ArrowUp />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
