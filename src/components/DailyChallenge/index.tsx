import shieldIcon from '../../assets/icons/shield.svg';
import lightningIcon from '../../assets/icons/lightning.svg';

import { Container } from './styles';

interface DailyChallengeProps {
  numberChallenge: string;
  challenge: string;
  userXp: number;
  teamXp: number;
}

export function DailyChallenge({ numberChallenge, challenge, userXp, teamXp }: DailyChallengeProps) {
  return (
    <Container>
      <div>
        <img src={shieldIcon} alt="Escudo" />
        <span>{numberChallenge}</span>
      </div>
      <p>{challenge}</p>
      <span>{userXp} <img src={lightningIcon} alt="Escudo" /></span>
      <span>{teamXp} <img src={shieldIcon} alt="Escudo" /></span>
    </Container>
  );
}
