import styled from 'styled-components';

export const Container = styled.aside`
  padding: 1.5rem 1rem;

  background: var(--blue-500);
  border-radius: 10px;

  > h1 {
    text-align: center;
    font-family: 'Bitter', serif;
    font-size: 2rem;
    color: white;
  }

  button:not(:last-child) {
    width: 100%;

    margin-top: 1rem;
    padding: 1rem;

    color: white;
    background: var(--blue-900);
    border: 0;
    border-right: 5px solid var(--purple-500);
    border-radius: 5px;
    font-size: 1.2rem;
    transition: .2s;

    &:hover {
      filter: brightness(.9);
    }
  }

  p {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--gray-500);
  }

  .xpRound {
    width: 35px;
    height: 35px;

    display: inline-block;
    margin-left: 1rem;

    color: white;
    font-size: .8rem;
    line-height: 35px;
    text-align: center;
    background: var(--purple-500);
    border-radius: 50%;
  }

  button:last-child {
    margin: 0 auto;
    margin-top: 2rem;
  }
`;
