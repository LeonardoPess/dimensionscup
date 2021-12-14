import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 95px);

  margin-top: 95px;
  display: flex;
  justify-content: flex-start;

  background-size: cover;

  > div {
    min-height: calc(100vh - 95px);
    min-width: 600px;
    max-width: 35%;

    margin-left: 8rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;
    border-top: 8px solid var(--brown-500);
    background: var(--brown-700);

    p {
      margin-top: 1.5rem;

      font-weight: bold;
      font-size: 2rem;
      font-family: 'Bitter', serif;
    }

    select {
      width: 100%;

      margin-top: 1rem;
      padding: 1rem;

      font-weight: bold;
      color: white;
      background: transparent;
      text-align: center;
      border: 1px solid var(--brown-500);
      font-size: 1.5rem;
      cursor: pointer;

      option {
        margin: 40px;
        background: var(--brown-700);
        color: #fff;
        font-weight: bold;
      }
    }

    button {
      margin: 0 auto;
      margin-top: 2rem;

      img {
        max-height: 30px;
      }
    }
  }
`;
