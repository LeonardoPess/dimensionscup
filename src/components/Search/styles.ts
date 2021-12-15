import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;

  img {
    position: absolute;
    padding: .5rem;

    @media (max-width: 900px) {
      padding: .4rem;
    }
  }

  input {
    width: 100%;
    height: 60px;

    @media (max-width: 900px) {
      height: 50px;
    }

    padding: 0 4rem;

    color: var(--gray-500);
    background: transparent;
    border: 2px solid white;
    border-radius: 30px;

    ::placeholder {
      color: var(--gray-500);
    }
  }
`;
