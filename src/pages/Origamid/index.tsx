import hatIcon from '../../assets/icons/hat.svg';

import { AsideTrilha } from '../../components/AsideTrilha';
import { Class } from '../../components/Class';

import { Title } from '../../components/Title';

import { Container } from "./styles";

export function Origamid() {
  return (
    <Container>
      <Title text="REACTJS" icon={hatIcon} />

      <main>
        <AsideTrilha curso={false}/>
        <Class/>
      </main>
    </Container>
  );
}
