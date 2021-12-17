import styled from 'styled-components';

export const Container = styled.section`
  max-width:1280px;

  margin: 0 auto;
  padding: 8rem 1rem;

  > .profileTop {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1150px) {
      flex-direction: column;
    }

    > h1 {
      text-align: left;

      @media (max-width: 1150px) {
        text-align: center;
      }
    }
  }

  main { 
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 2rem;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }

    aside {
      margin: 0 auto;
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
