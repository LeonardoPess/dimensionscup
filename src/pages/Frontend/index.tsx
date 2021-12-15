import hatIcon from '../../assets/icons/hat.svg';
import categoryOneImg from '../../assets/images/categoryOne.png';

import { Card } from '../../components/Card';
import { Title } from '../../components/Title';

import { Container } from "./styles";

export function Frontend() {
  return (
    <Container>
      <Title text="ESCOLHA SUA MAGIA" icon={hatIcon} />

      <div className="cardWrapper">
        <Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#292265"
        />

        <Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#6D66AD"
        />

      <Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#670606"
        />

        <Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#10141B"
        />

        <Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#292265"
        />

        <Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#6D66AD"
        />

      <Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#670606"
        />

        <Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#10141B"
        />

<Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#292265"
        />

        <Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#6D66AD"
        />

      <Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#670606"
        />

        <Card
          cardUrl="/reactjs"
          title="REACTJS"
          image={categoryOneImg}
          colorHover="#10141B"
        />
      </div>
    </Container>
  );
}
