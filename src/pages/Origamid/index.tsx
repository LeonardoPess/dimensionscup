import hatIcon from '../../assets/icons/hat.svg';

import { Aside } from '../../components/Trilha/Aside';
import { Class } from '../../components/Trilha/Class';

import { Title } from '../../components/Title';

import { Container } from "./styles";

export function Origamid() {
  return (
    <Container>
      <Title text="ORIGAMID" icon={hatIcon} />

      <main>
        <Aside curso={false}/>
        <Class/>
      </main>
    </Container>
  );
}
