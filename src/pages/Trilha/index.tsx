import hatIcon from '../../assets/icons/hat.svg';
import categoryOneImg from '../../assets/images/categoryOne.png';
import { Card } from '../../components/Card';

import { Container } from "./styles";

export function Trilha() {
  return (
    <Container>
      <h1><img src={hatIcon} alt="Hat" /> ESCOLHA O TIPO DE MAGIA</h1>

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

        <Card
          cardUrl="/trilha/frontend"
          title="FRONTEND"
          image={categoryOneImg}
          colorHover="#10141B"
        />
      </div>
    </Container>
  );
}
