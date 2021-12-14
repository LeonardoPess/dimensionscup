import styled from 'styled-components';

export const Container = styled.div`
  max-width:1280px;

  margin: 0 auto;
  display: flex;
  align-items: center;

  &.left {
  flex-direction: row-reverse;

    div {
      width: 40%;
      position: relative;
      right: 10%;

      h1 {
        text-align: left;
      }
    }
  }

  &.right {
    div {
      left: 10%;

      h1{
        text-align: right;
      }

      button {
        margin-left: auto;
      }
    }
  }

  div {
    width: 40%;
    position: relative;

    h1 {
      font-size: 3rem;
      font-family: 'Bitter', serif;
    }

    p {
      line-height: 1.5rem;
    }

    button {
      margin-top: 2rem;
    }
  }

  > img {
    width: 60%;
  }
`;
