import shieldIcon from '../../assets/icons/shield.svg';
import lightningIcon from '../../assets/icons/lightning.svg';
import skullIcon from '../../assets/icons/skull.svg';

import { Container } from './styles';
import { Button } from '../Button';

interface AsideTrilhaProps {
  curso: boolean;
}

export function AsideTrilha({ curso }: AsideTrilhaProps) {
  return (
    <Container>
      <h1>Detalhes da jornada</h1>
      <button>{curso ? 'CURSO' : 'AULA'} ATUAL</button>
      <button>CRONOGRAMA</button>
      <button>VER PROGRESSO</button>
      <p>Início da jornada: <span>12/12/2021</span></p>
      <p>{curso ? 'Cursos concluídas' : 'Aulas concluídas'}: <span>29 de 120</span></p>
      <p>Desafios de conclusão: <span>3 de 11</span></p>
      <p>Premio de conclusão:
        <div>
          <span className="xpRound">21 <img src={lightningIcon} alt="Raio" /></span>
          <span className="xpRound">65 <img src={shieldIcon} alt="Escudo" /></span>
        </div>
      </p>
      <Button text={curso ? 'DESAFIO DA TRILHA' : 'DESAFIO DO CURSO'} color="#3A337C" icon={skullIcon}/>
    </Container>
  );
}
