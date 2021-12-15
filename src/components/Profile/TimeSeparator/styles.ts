import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gray-500);
  font-size: 24px;

  p {
    margin-right: .5rem;
  }

  div {
    width: 100%;
    height: 6px;

    border-radius: 10px;
    background: var(--gray-500);
  }
`;
