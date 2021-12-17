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
    font-size: 2rem;
    font-family: 'Bitter', serif;
    text-align: center;
  }

  p {
    margin-top: 1.5rem;

    color: var(--gray-500);
  }

  .buttonsWrapper {
    display: flex;
    flex-wrap: wrap;

    button {
      margin: 1rem .5rem;

      font-size: 1rem;

      img {
        height: 30px;
      }
    }
  }
`;
