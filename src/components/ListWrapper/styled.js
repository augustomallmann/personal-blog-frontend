import styled from 'styled-components';

export const ListWrapper = styled.section`
    max-width: 1300px;
    width: 100%;
    margin: auto;
    body#grid & {
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`;
