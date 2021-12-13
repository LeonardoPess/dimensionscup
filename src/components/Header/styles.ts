import styled from 'styled-components';

export const Container = styled.header`
  max-width:1280px;
  width: 100%;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  font-family: 'Bitter', serif;

  ul {
    display: flex;

    li {
      transition: .2s;

      &:hover {
        opacity: .8;
      }
      & + li {
        margin-left: 2rem;
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;

    cursor:pointer;
    transition: .2s;

    &:hover {
      filter: brightness(.9);
    }

    > div {
      margin-left: .5rem;

      text-align: right;
    }

    .userRounded {
      width: 60px;
      height: 60px;

      margin-left: .5rem;

      overflow: hidden;
      border-radius: 50%;
    }
  }
`;
