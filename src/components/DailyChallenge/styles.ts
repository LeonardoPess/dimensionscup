import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  > div {
    min-width: 70px;

    position: relative;
    
    img { 
      width: 70px;
    }

    span {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);

      color: var(--blue-900);
      font-weight: bold;
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      min-width: 50px;

      img {
        width: 50px;
      }

      span {
        font-size: 1rem;
      }
    }

    @media (max-width: 650px) {
      min-width: 30px;

      img {
        width: 30px;
      }

      span {
        font-size: .8rem;
      }
    }
  }

  p {
    margin: 0 2rem;

    text-align: center;
    font-size: 2rem;
    font-weight: bold;

    @media (max-width: 768px) {
      margin: 0 1rem;

      font-size: 1.5rem;
    }

    @media (max-width: 650px) {
      margin: 0 .5rem;
    }
  }
`;
