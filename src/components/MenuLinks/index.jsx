/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

export default function MenuLinks({ toggleMenu, setToggleMenu }) {
  const data = useStaticQuery(graphql`
   {
  
      allStrapiMenu{
        edges{
          node{
            customLink{
              linkName
              url
            }
          }
        }
      }
    
  }
`);

  const links = data.allStrapiMenu.edges[0].node.customLink;

  return (
    <S.MenuLinksWrapper toggleMenu={toggleMenu}>

      <S.MenuLinksList toggleMenu={toggleMenu}>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink
              cover
              direction="right"
              bg={getThemeColor()}
              duration={0.6}
              to={link.url}
              activeClassName="active"
              onClick={() => setToggleMenu()}
            >
              {link.linkName}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  );
}
