import styled from 'styled-components';

export const HeroWrap = styled.div`
  color: var(--texts);
  max-width: 1300px;
  margin:  auto;
  height: 100%;
  display: flex;
  align-items: center;
}
`;

export const HeroRow = styled.div`
  display: flex;
  width: 100%;
  align-items:center;
`;

export const HeroColumn = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding: 0 15px;
`;

export const HeroTitle = styled.h1`
    font-size: 3.5rem;
    text-align: left;
    font-weight: bold;
    line-height: 4rem;
    text-decoration: underline solid rgb(245, 82, 87);
`;

export const HeroSubTitle = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 1.3rem 0;
  `;

export const HeroDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  `;
