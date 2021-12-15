import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  padding: 2rem;

  background: var(--blue-500);
  border-radius: 10px;

  > h1 {
    font-size: 2rem;
    font-family: 'Bitter', serif;
    text-align: center;
  }

  .cardWrapper {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    img {
      margin: 0 1rem;

      cursor: pointer;
    }

    > a {
      margin-top: 2rem;

        & + a {
          margin-left: 2rem;
        }
    }
  }
`;
