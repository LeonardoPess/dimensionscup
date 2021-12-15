import styled from 'styled-components';

interface Props {
  size: number;
}

export const Container = styled.span<Props>`
  min-width: ${props => props.size ? props.size : '30'}px;
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

  @media (max-width: 768px) {
    min-width: 30px;
    width: 30px;
    height: 30px;

    line-height: 30px;

    font-size: .8rem;
  }
`;
