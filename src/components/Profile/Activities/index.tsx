import arrowRoundLeftIcon from '../../../assets/icons/arrowRoundLeft.svg';
import arrowRoundRightIcon from '../../../assets/icons/arrowRoundRight.svg';

import { Card } from '../Card';

import { Container } from './styles';

export function Activities() {
  return (
    <Container>
      <h1>ATIVIDADES</h1>

      <div className="cardWrapper">
        <img src={arrowRoundLeftIcon} alt="Arrow left" />

        <Card>
          <h1>HOJE</h1>
          <p><b>Aulas assistidas: </b>24</p>
          <p><b>Desafios: </b>10</p>
          <p><b>Duelos: </b>0</p>
          <p><b>Pessoas ajudadas: </b>3</p>
        </Card>

        <Card>
          <h1>ONTEM</h1>
          <p><b>Aulas assistidas: </b>12</p>
          <p><b>Desafios: </b>3</p>
          <p><b>Duelos: </b>1</p>
          <p><b>Pessoas ajudadas: </b>0</p>
        </Card>

        <img src={arrowRoundRightIcon} alt="Arrow left" />
      </div>
    </Container>
  );
}
