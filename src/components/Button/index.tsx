import { Container } from './styles';

interface ButtonProps {
  text: string;
  color: string;
  icon: string;
}

export function Button({ text, color, icon }: ButtonProps) {
  return (
    <Container style={{background: color}}>
      {text}
      <img src={icon} alt="Escola" />
    </Container>
  );
}
