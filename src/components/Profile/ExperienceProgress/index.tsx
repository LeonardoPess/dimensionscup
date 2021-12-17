import { Container } from './styles';

export function ExperienceProgress() {
  return (
    <Container>
      <span>Bruxo 1</span>
      <div>
        <div className="experienceTotalBar"> <span>300XP</span></div>
        <div className="experienceBarValue">150XP</div>
      </div>
      <span>Bruxo 2</span>
    </Container>
  );
}
