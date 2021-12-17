import libraryImg from '../../assets/pages/library.png';

import { Container } from "./styles";

export function Library() {
  return (
    <Container>
      <img src={libraryImg} alt="Library" />
    </Container>
  );
}
