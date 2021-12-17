import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: .8rem;
  }

  > div {
    min-width: 300px;
    height: 20px;

    margin: 0 .5rem;
    position: relative;


    @media (max-width: 1150px) {
      margin: 1rem;
    }

    @media (max-width: 768px) {
      min-width: 200px;
    }

    .experienceTotalBar {
      width: 100%;
      height: 20px;

      position: absolute;
      top: 0;
      left: 0;

      background: var(--purple-500);
      border-radius: 10px;

      span {
        position: absolute;
        right: 0;
        top: 25px;
      }
    }

    .experienceBarValue {
      width: 50%;
      height: 20px;

      padding: 0 .5rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      line-height: 20px;
      text-align: right;
      background: var(--purple-300);
      border-radius: 10px;
    }
  }
`;
