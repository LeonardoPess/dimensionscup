import styled from 'styled-components';

interface Props {
  colorHover: any;
}

export const Container = styled.div<Props>`
  width: 180px;
  min-height: 220px;

  display: flex;
  position: relative;

  border: 1px solid var(--gray-500);

  &:before {
    content: '';
    width: 178px;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0;
    background-image: linear-gradient(to bottom,transparent 50%,
      ${props => props.colorHover ? props.colorHover : "var(--blue-900)"} 100%),
      linear-gradient(to bottom,rgba(64,65,90,0) 0,#40415a 100%);
    transition: .2s;
  }

  &:hover:before{
    opacity: 1;
  }

  span {
    margin: 2rem auto;
    align-self: flex-end;
    z-index: 1;

    font-weight: bold;
    font-size: 1rem;
  }
`;
