import styled from 'styled-components';

export const Container = styled.h1`
  padding: 0 1rem;

  font-size: 3rem;
  font-family: 'Bitter', serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  img {
    height: 50px;

    margin-right: 1rem;

    @media (max-width: 768px) {
      height: 40px;

      margin-right: .5rem;
    }
  }
`;
