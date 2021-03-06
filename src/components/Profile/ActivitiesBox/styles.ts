import styled from 'styled-components';

export const Container = styled.div`
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

  h1 {
    padding: 0 2rem;
    font-size: 2rem;
    font-family: 'Bitter', serif;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  span {
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    color: var(--gray-500);
    font-size: .8rem;
  }

  p {
    margin-top: 1.5rem;

    color: var(--gray-500);
  }

  button {
    margin-top: 2rem;

    font-size: 1rem;

    img {
      height: 30px;
    }
  }
`;
