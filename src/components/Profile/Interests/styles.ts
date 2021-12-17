import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  padding: 2rem;
  position: relative;

  background: var(--blue-500);
  border-radius: 10px;

  > img {
    width: 40px;
    height: 40px;

    padding: .7rem;
    position: absolute;
    right: 1rem;
    top: 1rem;

    cursor: pointer;
    border-radius: 10px;
    background: var(--blue-900);
    transition: .2s;

    &:hover {
      filter: brightness(.9);
    }
  }

  > h1 {
    padding: 0 2rem;

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
