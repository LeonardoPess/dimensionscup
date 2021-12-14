import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > div {
    width: 10%;

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
      font-size: 4rem;
    }
  }

  p {
    margin-left: 2rem;

    font-size: 3rem;
    font-weight: bold;
  }

  > span {
    width: 50px;
    height: 50px;

    margin-left: 1rem;

    line-height: 50px;
    text-align: center;
    background: var(--purple-500);
    border-radius: 50%;
  }
`;
