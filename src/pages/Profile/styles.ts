import styled from 'styled-components';

export const Container = styled.section`
  max-width:1280px;
  
  margin: 0 auto;
  padding: 8rem 0;

  main { 
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 2rem;

    padding-top: 2rem;

    aside {
      min-width: 400px;
      min-height: 100vh;
    }

    > div {
      section {
        & + section{
          margin-top: 2rem;
        }
      }
    }
  }
`;
