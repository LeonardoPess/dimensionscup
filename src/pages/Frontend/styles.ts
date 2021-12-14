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
    width: 100%;

    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    > a {
    margin-top: 2rem;
    margin-left: 2rem;
    }
  }
`;
