import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  padding: 2rem;

  background: var(--blue-500);
  border-radius: 10px;

  h1 {
    font-size: 2rem;
    font-family: 'Bitter', serif;
  }

  p {
    margin-top: 1.5rem;

    color: var(--gray-500);
  }

  .buttonsWrapper {
    display: flex;

    button {
      margin-top: 1.5rem;

      font-size: 1rem;

      & + button {
        margin-left: 1.5rem;
      }

      img {
        height: 30px;
      }
    }
  }
`;
