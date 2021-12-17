import tasksImg from '../../assets/pages/tasks.png';

import { Container } from "./styles";

export function Tasks() {
  return (
    <Container>
      <img src={tasksImg} alt="Tasks" />
    </Container>
  );
}
