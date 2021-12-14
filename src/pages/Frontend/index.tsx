import hatIcon from '../../assets/icons/hat.svg';
import categoryOneImg from '../../assets/images/categoryOne.png';
import { Card } from '../../components/Card';

import { Container } from "./styles";

export function Frontend() {
  return (
    <Container>
      <h1><img src={hatIcon} alt="Hat" /> ESCOLHA SUA MAGIA</h1>

      <div className="cardWrapper">
        <Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#292265"
        />

        <Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#6D66AD"
        />

      <Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#670606"
        />

        <Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#10141B"
        />

        <Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#292265"
        />

        <Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#6D66AD"
        />

      <Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#670606"
        />

        <Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#10141B"
        />

<Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#292265"
        />

        <Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#6D66AD"
        />

      <Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#670606"
        />

        <Card
          cardUrl="/trilha/frontend/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#10141B"
        />
      </div>
    </Container>
  );
}
