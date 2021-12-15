import styled from 'styled-components';

export const Welcome = styled.section`
  padding: 12rem 0;

  background-size: cover;
  background-position: center;

  .container {
    max-width:1280px;

    margin: 0 auto;
    padding: 0 1rem;

    font-family: 'Bitter', serif;
    text-align: center;

    h1 {
      font-size: 4rem;

      @media (max-width: 768px) {
        font-size: 3rem;
      }

      @media (max-width: 500px) {
        font-size: 2rem;
      }
    }

    p {
      max-width: 900px;
      margin: 0 auto;
      margin-top: 2rem;

      font-size: 2rem;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }

      @media (max-width: 500px) {
        font-size: 1rem;
      }
    }

    button {
      margin: 0 auto;
      margin-top: 3rem;
    }
  }
`;

export const LastestNews = styled.section`
  max-width:1280px;
  width: 100%;

  margin: 0 auto;
  padding: 4rem 1rem;


  font-family: 'Bitter', serif;
  text-align: center;

  > h1 {
    font-size: 4rem;

    @media (max-width: 768px) {
        font-size: 3rem;
      }

      @media (max-width: 500px) {
        font-size: 2rem;
      }
  }

  .newsWrapper {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    div {
      max-width: 400px;
      width: 40%;
      height: 300px;

      position: relative;
      display: flex;
      flex-wrap: wrap;

      cursor: pointer;
      border: 1px solid var(--gray-500);

      @media (max-width: 768px) {
        width: 100%;

        margin: 0 1rem;
      }

      & + div {
        @media (max-width: 768px) {
          margin-top: 2rem;
        }
      }

      &:hover > img {
        width: 120%;
        max-width: 120%;

        top: -10%;
        left: -10%;
      }

      img {
        width: 110%;
        max-width: 110%;

        position: absolute;
        top: -5%;
        left: -5%;
        -webkit-clip-path: polygon(0 0,100% 0,100% 75%,0 100%);
        clip-path: polygon(0 0,100% 0,100% 75%,0 100%);
        z-index: -1;

        transition: .2s;
      }

      h1 {
        padding: 2rem;
        align-self: flex-end;
      }
    }
  }
`;
