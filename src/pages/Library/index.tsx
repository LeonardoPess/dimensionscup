import hatIcon from '../../assets/icons/hat.svg';

import { Title } from '../../components/Title';

import { Container } from "./styles";

export function Library() {
  return (
    <Container>
      <Title text="Biblioteca" icon={hatIcon} />
    </Container>
  );
}
