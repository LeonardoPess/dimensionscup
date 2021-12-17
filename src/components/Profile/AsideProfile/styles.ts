import styled from 'styled-components';

export const Container = styled.aside`
  padding: 1.5rem 1rem;
  position: relative;

  background: var(--blue-500);
  border-radius: 10px;

  > img {
    width: 40px;
    height: 40px;

    padding: .7rem;
    position: absolute;
    right: 1rem;
    top: 1rem;

    cursor: pointer;
    border-radius: 10px;
    background: var(--blue-900);
    transition: .2s;

    &:hover {
      filter: brightness(.9);
    }
  }

  .asideProfileTop {
    .userRounded {
      width: 200px;
      height: 200px;

      margin: 0 auto;

      overflow: hidden;
      border-radius: 50%;
    }

    h1 {
      margin-top: 1rem;
      text-align: center;
      font-size: 2rem;
      font-family: 'Bitter', serif;
    }

    span {
      display: block;

      font-weight: bold;
      text-align: center;
    }
  }

  .techs {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      cursor: pointer;
      transition: .2s;

      &:hover {
        transform: scale(1.1);
      }

      & + img {
        margin-left: 1rem;
      }
    }
  }

  .button {
    margin: 0 auto;
    margin-top: 2rem;
  }

  
  > h1 {
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
    font-family: 'Bitter', serif;
  }

  button:not(.button) {
    width: 100%;

    margin-top: 1rem;
    padding: 1rem;

    color: white;
    background: var(--blue-900);
    border: 0;
    border-right: 5px solid var(--purple-500);
    border-radius: 5px;
    font-size: 1.2rem;
    text-align: left;
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
`;
