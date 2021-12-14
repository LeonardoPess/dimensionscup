import categoryOneImg from '../../../assets/images/categoryOne.png';
import arrowRoundLeftIcon from '../../../assets/icons/arrowRoundLeft.svg';
import arrowRoundRightIcon from '../../../assets/icons/arrowRoundRight.svg';

import { Card } from '../../Card';

import { Container } from './styles';

export function Interests() {
  return (
    <Container>
      <h1>INTERESSES</h1>

      <div className="cardWrapper">
        <img src={arrowRoundLeftIcon} alt="Arrow left" />

        <Card
          cardUrl="/trilha/frontend"
          title="FRONTEND"
          image={categoryOneImg}
          colorHover="#292265"
        />

        <Card
          cardUrl="/trilha/frontend"
          title="FRONTEND"
          image={categoryOneImg}
          colorHover="#6D66AD"
        />

        <Card
          cardUrl="/trilha/frontend"
          title="FRONTEND"
          image={categoryOneImg}
          colorHover="#670606"
        />

        <img src={arrowRoundRightIcon} alt="Arrow left" />
      </div>
    </Container>
  );
}
