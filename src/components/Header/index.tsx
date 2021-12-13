import homeIcon from '../../assets/icons/plataform.svg';
import wandIcon from '../../assets/icons/wand.svg';
import userPhotoIcon from '../../assets/images/userPhoto.png';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div><Link to="/"><img src={homeIcon} alt="Home" /></Link></div>

      <ul>
        <li><Link to="/escola">Hogwarts</Link></li>
        <li><Link to="/time">Gryffindor</Link></li>
        <li><Link to="/disputa">Duelos</Link></li>
        <li><Link to="/notificações">Empório de Corujas</Link></li>
      </ul>

      <Link to="/perfil">
        <div className="profile">
          <img src={wandIcon} alt="Varinha" />
          <div>
            <span>Leonardo Pessoa</span>
            <br />
            <span>Bruxo 1</span>
          </div>
          <div className="userRounded">
            <img src={userPhotoIcon} alt="Leonardo Pessoa" />
          </div>
        </div>
      </Link>
    </Container>
  );
}
