import categoryOneImg from '../../../assets/images/categoryOne.png';

import { Card } from '../../../components/Card';

import { Container } from './styles';

export function Portfolio() {
  return (
    <Container>
      <h1>ESTOQUE DE MAGIAS</h1>

      <div className="cardWrapper">

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

      </div>
    </Container>
  );
}
