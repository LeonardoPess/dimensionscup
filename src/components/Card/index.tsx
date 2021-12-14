import { Link } from 'react-router-dom';

import { Container } from './styles';

interface CardProps {
  cardUrl: string;
  title: string;
  image: string;
  colorHover: string;
}

export function Card({ cardUrl, title, image, colorHover }: CardProps) {
  return (
    <Link to={cardUrl} style={{display: 'inline-block'}}>
      <Container style={{backgroundImage: `url(${image})`}} colorHover={colorHover}>
        <span>{title}</span>
      </Container>
    </Link>
  );
}
