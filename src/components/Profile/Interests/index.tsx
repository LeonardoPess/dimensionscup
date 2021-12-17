import reactIcon from '../../../assets/icons/react.svg';
import pencilIcon from '../../../assets/icons/pencil.svg';

import { Card } from '../Card';

import { Container } from './styles';

export function Interests() {
  return (
    <Container>
      <img src={pencilIcon} alt="edit" />

      <h1>PRÓXIMAS MAGIAS</h1>

      <div className="cardWrapper">

        <Card>
          <img src={reactIcon} alt="tech" />
          <p><b>Estimativa de ínicio: </b>12/12/2021</p>
          <p><b>Categoria: </b>Frontend</p>
          <p><b>Trilha: </b>ReactJS</p>
          <p><b>Objetivo: </b>Se tornar fullstack</p>
          <p><b>Conhecimento prévio: </b>Básico</p>
        </Card>

        <Card>
          <img src={reactIcon} alt="tech" />
          <p><b>Estimativa de ínicio: </b>12/12/2021</p>
          <p><b>Categoria: </b>Frontend</p>
          <p><b>Trilha: </b>ReactJS</p>
          <p><b>Objetivo: </b>Se tornar fullstack</p>
          <p><b>Conhecimento prévio: </b>Básico</p>
        </Card>

      </div>
    </Container>
  );
}
