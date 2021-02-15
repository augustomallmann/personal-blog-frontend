import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  main{
    position: relative;
  }
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;

  }
  body {
    background: #16202c;
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .container{
    max-width: 1300px;
    margin:  auto;
  }

  body.dark {
    --borders: #38444d;
    --texts: #fff;
    --menuLinks: #fff;
    --textHover: #f4f6f8;
    --postColor: #fff;
    --highlight: #f55257;
    --primaryBackground: #252525;
    --secondaryBackground: #2B2B2B;
    --mediumBackground: #171D1C;
    --background: #222222;
    --white: #fff;
    --black: #222;
  }

  body.light {
    --borders: #dedede;
    --texts: #000;
    --textHover: #252525;
    --postColor: #111;
    --highlight: #000;
    --menuLinks: #fff;
    --primaryBackground: #f55257;
    --secondaryBackground: #f4f6f8;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
  }

`;
export default GlobalStyles;
