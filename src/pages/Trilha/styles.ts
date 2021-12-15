import styled from 'styled-components';

export const Container = styled.section`
  max-width:1280px;

  margin: 0 auto;
  padding: 8rem 0;

  font-family: 'Bitter', serif;

  h1 {
    justify-content: center;
  }

  .cardWrapper {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    > a {
      margin: 2rem 1rem;
    }
  }
`;
