import hatIcon from '../../assets/icons/hat.svg';

import { Aside } from '../../components/Trilha/Aside';
import { Class } from '../../components/Trilha/Class';
import { Link } from 'react-router-dom';
import { Title } from '../../components/Title';

import { Container } from "./styles";

export function Origamid() {
  return (
    <Container>
      <Link to="/reactjs">
        <Title text="REACTJS > ORIGAMID" icon={hatIcon} />
      </Link>

      <main>
        <Aside curso={false}/>
        <Class/>
      </main>
    </Container>
  );
}
