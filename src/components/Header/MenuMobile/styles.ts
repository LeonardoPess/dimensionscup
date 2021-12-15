import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: -100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--blue-900);
  font-size: 1.5rem;
  transition: .2s;

  &.active {
    left: 0;
  }

  li {
    width: 100%;

    text-align: center;

    a {
      padding: 1rem;
      display: block;
    }
  }
`;
