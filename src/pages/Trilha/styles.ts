import styled from 'styled-components';

export const Container = styled.section`
  max-width:1280px;
  
  margin: 0 auto;
  padding: 8rem 0;

  font-family: 'Bitter', serif;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 3rem;

    img {
      margin-right: 1rem;
    }
  }

  .cardWrapper {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > a {
      margin-top: 2rem;
      margin-left: 2rem;
    }
  }
`;
