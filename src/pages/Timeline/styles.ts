import styled from 'styled-components';

export const Container = styled.section`
  max-width:1280px;
  
  margin: 0 auto;
  padding: 8rem 0;

  .timelineTop {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;

      >img {
        margin-right: 1rem;

        cursor: pointer;
      }
    }
  }

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
      > div {
        & + div{
          margin-top: 2rem;
        }
      }
    }
  }
`;
