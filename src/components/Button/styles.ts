import styled from 'styled-components';

export const Container = styled.button`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--blue-900);
  font-family: 'Poppins', sans-serif;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 30px;

  transition: .2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    margin-left: 1rem;
  }
`;
