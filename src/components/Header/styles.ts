import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  background: transparent;
  font-family: 'Bitter', serif;

  transition: .2s;

  &.active {
    background: var(--blue-900);
  }

  .container {
    max-width:1280px;

    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
  }
`;
