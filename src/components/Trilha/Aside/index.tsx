import shieldIcon from '../../../assets/icons/shield.svg';
import lightningIcon from '../../../assets/icons/lightning.svg';
import skullIcon from '../../../assets/icons/skull.svg';

import { Container } from './styles';
import { Button } from '../../Button';
import { Score } from '../../Score';

interface AsideProps {
  curso: boolean;
}

export function Aside({ curso }: AsideProps) {
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
          <Score score={21} icon={lightningIcon} size={40}/>
          <Score score={65} icon={shieldIcon} size={40}/>
        </div>
      </p>
      <Button text={curso ? 'DESAFIO DA TRILHA' : 'DESAFIO DO CURSO'} color="#3A337C" icon={skullIcon}/>
    </Container>
  );
}
