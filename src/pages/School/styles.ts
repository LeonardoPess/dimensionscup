import styled from 'styled-components';

export const Container = styled.section`
  max-width:1280px;
  
  margin: 0 auto;
  padding-top: 8rem;

  font-family: 'Bitter', serif;

  > div {
    & + div {
      margin-top: 4rem;
    }
  }
`;
