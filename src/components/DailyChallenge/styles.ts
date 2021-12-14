import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > div {
    width: 70px;

    position: relative;

    img { 
      width: 100%;
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
  }

  p {
    margin: 0 2rem;

    font-size: 2rem;
    font-weight: bold;
  }
`;
