/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { HomeSmile } from '@styled-icons/boxicons-regular/HomeSmile';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import { Sun } from '@styled-icons/feather/Sun';
import { GridHorizontal } from '@styled-icons/boxicons-regular/GridHorizontal';
import { ArrowUp } from '@styled-icons/bootstrap/ArrowUp';
import * as S from './styled';

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
        <S.MenuBarLink to="/" title="Voltar para Home">
          <S.MenuBarItem>
            <HomeSmile />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search/" title="Pesquisar">
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
          <Sun />
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar visualização">
          <GridHorizontal />
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o Topo">
          <ArrowUp />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
