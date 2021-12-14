import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 95px);

  margin-top: 95px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;

  > img {
    cursor: pointer;
    filter: invert(50%) sepia(22%) saturate(1806%) hue-rotate(348deg) brightness(95%) contrast(91%);
  }

  > div {
    max-width: 60%;
    padding: 2rem;
    margin: 0 2rem;

    text-align: center;
    border-top: 8px solid var(--brown-500);
    background: var(--brown-100);

    h1 {
      color: var(--brown-700);
      font-size: 3rem;
    }

    p {
      margin-top: 1rem;

      color: var(--blue-900);
      font-size: 1.2rem;

      img {
        max-height: 20px;
      }
    }

    .buttonWrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        margin-top: 2rem;

        font-size: 1rem;

        img {
          max-height: 30px;
        }

        & + button {
          margin-left: 2rem;
        }
      }
    }
  }
`;
