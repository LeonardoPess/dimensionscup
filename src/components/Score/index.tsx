import { Container } from './styles';

interface ScoreProps {
  score: number;
  icon: string;
  size: number;
}

export function Score({ score, icon, size }: ScoreProps) {
  return (
    <Container size={size}>
      {score} <img src={icon} alt="Score" />
    </Container>
  );
}
