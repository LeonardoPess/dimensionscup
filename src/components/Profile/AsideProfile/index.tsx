import shieldIcon from '../../../assets/icons/shield.svg';
import lightningIcon from '../../../assets/icons/lightning.svg';
import hatIcon from '../../../assets/icons/hat.svg';
import reactIcon from '../../../assets/icons/react.svg';
import userPhoto from '../../../assets/images/userPhoto.jpg';

import { Button } from '../../Button';
import { Score } from '../../Score';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export function AsideProfile() {
  return (
    <Container>
      <div className="profileTop">
        <div className="userRounded"><img src={userPhoto} alt="Harry Potter" /></div>
        <h1>Harry Potter</h1>
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
          <Score score={68} icon={lightningIcon} size={50}/>
          <Score score={68} icon={shieldIcon} size={50}/>
        </div>
      </p>

      <div className="techs">
        <img src={reactIcon} alt="tech" />
        <img src={reactIcon} alt="tech" />
        <img src={reactIcon} alt="tech" />
        <img src={reactIcon} alt="tech" />
      </div>

      <Button text="CURRÍCULO" icon={hatIcon}/>

      <h1>Jornada atual</h1>

      <button>TRILHA ATUAL: ReactJS</button>
      <button>CURSO ATUAL: Rocketseat</button>
      <Link to="/perfil/cronograma">
        <button>CRONOGRAMA</button>
      </Link>
      <p>Início na trilha:<span>12/12/2021</span></p>
      <p>Cursos concluídas:<span>3 de 11</span></p>
      <p>Desafios<span>29 de 120</span></p>
    </Container>
  );
}
