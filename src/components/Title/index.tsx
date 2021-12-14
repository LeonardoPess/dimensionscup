import { Container } from './styles';

interface ButtonProps {
  text: string;
  icon?: string;
}

export function Title({ text, icon }: ButtonProps) {
  return (
    <Container>
      <img src={icon} alt="Escola" />
      {text}
    </Container>
  );
}
