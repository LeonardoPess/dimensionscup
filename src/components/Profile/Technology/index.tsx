import reactIcon from '../../../assets/icons/react.svg';

import { Card } from '../Card';

import { Container } from './styles';

export function Technology() {
  return (
    <Container>
      <h1>TECNOLOGIAS</h1>

      <div className="cardWrapper">

        <Card>
          <img src={reactIcon} alt="tech" />
          <p><b>Início da jornada: </b>12/12/2021</p>
          <p><b>Desafios: </b>32</p>
          <p><b>Duelos: </b>13</p>
          <p><b>Cursos: </b>11</p>
          <p><b>Pessoas ajudadas: </b>4</p>
          <p><b>Certificados: </b>13</p>
          <p><b>Acreditado: </b>Não</p>
        </Card>

        <Card>
          <img src={reactIcon} alt="tech" />
          <p><b>Início da jornada: </b>12/12/2021</p>
          <p><b>Desafios: </b>32</p>
          <p><b>Duelos: </b>13</p>
          <p><b>Cursos: </b>11</p>
          <p><b>Pessoas ajudadas: </b>4</p>
          <p><b>Certificados: </b>13</p>
          <p><b>Acreditado: </b>Não</p>
        </Card>

      </div>
    </Container>
  );
}
