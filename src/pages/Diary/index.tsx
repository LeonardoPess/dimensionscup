import diaryImg from '../../assets/pages/diary.png';

import { Container } from "./styles";

export function Diary() {
  return (
    <Container>
      <img src={diaryImg} alt="Diary" />
    </Container>
  );
}
