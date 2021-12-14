import shieldIcon from '../../assets/icons/shield.svg';
import lightningIcon from '../../assets/icons/lightning.svg';
import hatIcon from '../../assets/icons/hat.svg';
import userPhotoIcon from '../../assets/images/userPhoto.jpg';

import { Container } from './styles';
import { Button } from '../Button';
import { Score } from '../Score';

export function AsideProfile() {
  return (
    <Container>
      <div className="profileTop">
        <div className="userRounded"><img src={userPhotoIcon} alt="Leonardo Pessoa" /></div>
        <h1>LEONARDO PESSOA</h1>
        <span>Gryffindor</span>
        <span>BRUXO 1 | FRONTEND</span>
      </div>

      <p>Início da jornada: <span>12/12/2021</span></p>
      <p>Trilhas concluídas:<span>3 de 11</span></p>
      <p>Cursos concluídos:<span>29 de 120</span></p>
      <p>Certificados:<span>29 de 120</span></p>
      <p>Acreditações<span>1 de 11</span></p>
      <p>Experiencia adquirida:
        <div>
          <Score score={210} icon={lightningIcon} size={50}/>
          <Score score={477} icon={shieldIcon} size={50}/>
        </div>
      </p>

      <div className="tecs">

      </div>

      <Button text="CURRÍCULO" icon={hatIcon}/>
      <button>CRONOGRAMA</button>
      <button>VER PROGRESSO</button>
    </Container>
  );
}
