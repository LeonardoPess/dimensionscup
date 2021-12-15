import styled from 'styled-components';

export const Container = styled.div`
  min-width: 300px;
  min-height: 220px;

  padding: 1.5rem 1rem;
  margin: 1rem;

  background: var(--blue-900);
  border-radius: 10px;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    filter: brightness(.9);
  }

  @media (max-width: 768px) {
    min-width: initial;
  }

  p {
    margin-top: .5rem;

    color: var(--gray-500);
  }
`;
