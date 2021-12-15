import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 95px);

  margin-top: 95px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;

  > div {
    max-width: 1000px;

    position: relative;
    padding: 2rem;
    margin: 0 2rem;

    text-align: center;
    border-top: 8px solid var(--brown-500);
    background: var(--brown-100);

    > img {
    position: absolute;
    top: -4rem;

    cursor: pointer;
    filter: invert(50%) sepia(22%) saturate(1806%) hue-rotate(348deg) brightness(95%) contrast(91%);

    &:first-of-type {
      left: 0;
    }

    &:last-of-type {
      right: 0;
    }
  }

    h1 {
      color: var(--brown-700);
      font-size: 3rem;

      @media (max-width: 1024px) {
        font-size: 2rem;
      }

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
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
      flex-wrap: wrap;

      button {
        margin: 2rem 1rem 0;

        font-size: 1rem;

        img {
          max-height: 30px;
        }
      }
    }
  }
`;
