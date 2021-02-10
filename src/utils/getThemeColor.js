/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme;

  if (theme === 'light') return '#fff';
  if (theme === 'dark') return '#2B2B2B';
};

export default getThemeColor;
