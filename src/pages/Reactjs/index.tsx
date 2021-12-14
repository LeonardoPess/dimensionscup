import hatIcon from '../../assets/icons/hat.svg';
import { AsideTrilha } from '../../components/AsideTrilha';
import { Course } from '../../components/Course';

import { Title } from '../../components/Title';

import { Container } from "./styles";

export function Reactjs() {
  return (
    <Container>
      <Title text="REACTJS" icon={hatIcon} />

      <main>
        <AsideTrilha curso={true}/>
        <Course/>
      </main>
    </Container>
  );
}
