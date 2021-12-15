import styled from 'styled-components';

export const Container = styled.section`
  max-width:1280px;
  
  margin: 0 auto;
  padding: 8rem 1rem;

  .timelineTop {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 900px) {
      flex-direction: column;
    }

    > h1 {
      @media (max-width: 1040px) {
        font-size: 2rem;
      }
    }

    > div {
      display: flex;

      @media (max-width: 900px) {
        margin-top: 1rem;
      }

      > img {
        margin-right: 1rem;

        cursor: pointer;
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
      div {
        & + div{
          margin-top: 2rem;
        }
      }
    }
  }
`;
