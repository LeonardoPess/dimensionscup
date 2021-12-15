import { Container } from './styles';

interface CardProps {
  time: string;
}

export function TimeSeparator({ time }: CardProps) {
  return (
    <Container>
      <p>{time}</p>
      <div></div>
    </Container>
  );
}
