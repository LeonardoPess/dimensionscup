import { Container } from './styles';

interface ButtonProps {
  text: string;
  color?: string;
  icon?: string;
}

export function Button({ text, color, icon }: ButtonProps) {
  const colorValue = color ? color : '#3A337C';

  return (
    <Container style={{background: colorValue}}>
      {text}
      <img src={icon} alt="Button icon" />
    </Container>
  );
}
