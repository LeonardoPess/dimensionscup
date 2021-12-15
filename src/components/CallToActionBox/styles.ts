import styled from 'styled-components';

export const Container = styled.div`
  max-width:1280px;

  margin: 0 auto;
  display: flex;
  align-items: center;

  &.left {
    flex-direction: row-reverse;

    div {
      right: 10%;

      @media (max-width: 768px) {
        right: 20%;
      }

      h1 {
        text-align: left;
      }
    }
  }

  &.right {
    div {
      left: 10%;

      text-align: right;

      @media (max-width: 768px) {
        left: 20%;
      }

      button {
        margin-left: auto;
      }
    }
  }

  .textWrapper {
    width: 40%;

    position: relative;

    @media (max-width: 768px) {
      width: 60%;
    }

    h1 {
      font-size: 3rem;
      font-family: 'Bitter', serif;

      @media (max-width: 768px) {
        font-size: 2rem;
      }

      @media (max-width: 650px) {
        font-size: 1.5rem;
      }
    }

    p {
      margin-top: 1rem;
      line-height: 1.5rem;
    }

    button {
      margin-top: 2rem;
    }
  }

  .backgroundImage {
    width: 60%;
    min-height: 400px;

    background-size: cover;
    background-position: center;
  }
`;
