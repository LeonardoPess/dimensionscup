import styled from 'styled-components';

export const Container = styled.section`
  max-width:1280px;

  margin: 0 auto;
  padding: 8rem 1rem;

  > a h1 {
    text-align: left;
    @media (max-width: 900px) {
      text-align: center;
    }
  }

  main { 
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 2rem;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }

    aside {
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
`;
