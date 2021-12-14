import hatIcon from '../../assets/icons/hat.svg';
import { Aside } from '../../components/Trilha/Aside';
import { Course } from '../../components/Trilha/Course';

import { Title } from '../../components/Title';

import { Container } from "./styles";

export function Reactjs() {
  return (
    <Container>
      <Title text="REACTJS" icon={hatIcon} />

      <main>
        <Aside curso={true}/>
        <Course/>
      </main>
    </Container>
  );
}
