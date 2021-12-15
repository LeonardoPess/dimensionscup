import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  padding: 2rem;

  background: var(--blue-500);
  border-radius: 10px;

  > h1 {
    margin-bottom: 1rem;

    text-align: center;
    font-size: 2rem;
    font-family: 'Bitter', serif;
  }

  .cardWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    img {
      margin: 0 1rem;

      cursor: pointer;
    }

    > a {
      margin: 1rem;
    }
  }
`;
