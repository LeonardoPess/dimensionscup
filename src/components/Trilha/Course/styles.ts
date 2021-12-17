import styled from 'styled-components';

export const Container = styled.aside`
  max-width: 550px;

  margin: 0 auto;

  .imageWrapper {
    width: 100%;

    position: relative;

    .playIcon {
      width: 100px;
      height: 100px;

      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
    }
  }

  a {
    display: block;
    transition: .2s;

    &:hover {
      filter: brightness(.8);
    }
  }

  h1 {
    margin-top: 1rem;

    font-family: 'Bitter', serif;
    font-size: 3rem;
    text-align: center;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
  }

  span {
    margin-top: .5rem;
    display: block;

    color: var(--gray-500);
    text-align: right;
  }

  .buttonWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    button {
      margin-top: 2rem;

      font-size: 1rem;
    }
  }

  textarea {
    width: 100%;
    min-height: 180px;

    margin-top: 2rem;
    padding: 2rem;

    color: white;
    background: var(--blue-500);
    border-radius: 10px;
    border: none;
    resize: vertical;
  }
`;
