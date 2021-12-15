import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;

  img {
    position: absolute;
    padding: .5rem;
  }

  input {
    width: 100%;
    height: 60px;

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
