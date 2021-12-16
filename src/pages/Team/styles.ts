import styled from 'styled-components';

export const Container = styled.main`
  .teamTop {
    width: 100%;
    min-height: calc(100vh - 95px);

    margin-top: 95px;
    display: flex;
    justify-content: flex-start;

    background-size: cover;

    > div {
      min-height: calc(100vh - 95px);
      min-width: 500px;

      margin-left: 8rem;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      text-align: center;
      border-top: 8px solid var(--brown-500);
      background: var(--brown-700);

      @media (max-width: 768px) {
        min-width: initial;
        width: 80%;

        margin: 0 auto;
      }

      .challengeNumber {
        width: 150px;

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
        margin: 2rem 0;

        font-size: 2rem;
        font-weight: bold;

        @media (max-width: 768px) {
          font-size: 1.5rem;
        }
      }

      .scoreWrapper {
        display: flex;
      }
    }
  }

  .teamPlayers {
    max-width:1280px;
    
    margin: 0 auto;
    padding: 2rem 1rem;

    h1 {
      justify-content: center;
    }

    .tableWrapper {
      margin: 2rem auto;
      overflow-x: auto;
    }

    table {
    width: 100%;
    min-width: 768px;

    padding: 2rem;
    margin-bottom: .5rem;

    background: var(--blue-500);
    border-radius: 30px;

    thead {
      th {
        font-size: 1rem;
        text-align: left;
        font-weight: bold;
      }
    }

    tbody {
      tr {
        td {
          padding: .5rem 0;

          font-size: .8rem;
          text-align: left;
          font-weight: bold;
        }
      }
    }
  }

    button {
      margin-left: auto;
    }
  }
`;
