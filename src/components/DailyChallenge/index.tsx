import shieldIcon from '../../assets/icons/shield.svg';
import lightningIcon from '../../assets/icons/lightning.svg';

import { Container } from './styles';
import { Score } from '../Score';


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
      <Score score={userXp} icon={lightningIcon} size={50}/>
      <Score score={teamXp} icon={shieldIcon} size={50}/>
    </Container>
  );
}
