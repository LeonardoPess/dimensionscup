import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 2rem;

  background: var(--blue-500);
  border-radius: 10px;

  div{
    display: flex;
    align-items: center;

    h1 {
      margin-right: 1rem;

      font-size: 2rem;
      font-family: 'Bitter', serif;
    }

    span {
      color: var(--gray-500);
      font-size: .8rem;
    }
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
