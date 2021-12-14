import styled from 'styled-components';

interface Props {
  size: number;
}

export const Container = styled.span<Props>`
  width: ${props => props.size ? props.size : '30'}px;
  height: ${props => props.size ? props.size : '30'}px;

  display: inline-block;

  line-height: ${props => props.size ? props.size : '30'}px;
  text-align: center;
  background: var(--purple-500);
  border-radius: 50%;

  & + span {
    margin-left: 1rem;
  }
`;
