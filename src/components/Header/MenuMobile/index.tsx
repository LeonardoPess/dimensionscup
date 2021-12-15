import homeIcon from '../../../assets/icons/plataform.svg';

import { Link } from 'react-router-dom';

import { Container } from './styles';

interface MenuMobileProps {
  isMenuMobileOpen: boolean;
  toggleMenuMobile: () => void;
}

export function MenuMobile({ isMenuMobileOpen, toggleMenuMobile }: MenuMobileProps) {
  return (
    <Container className={isMenuMobileOpen ? 'active' : ''}>
      <li onClick={toggleMenuMobile}>
        <Link to="/"><img src={homeIcon} alt="Home" /></Link>
      </li>
      <li onClick={toggleMenuMobile}>
        <Link to="/escola">Hogwarts</Link>
      </li>
      <li onClick={toggleMenuMobile}>
        <Link to="/time">Gryffindor</Link>
      </li>
      <li onClick={toggleMenuMobile}>
        <Link to="/disputas">Duelos</Link>
      </li>
      <li onClick={toggleMenuMobile}>
        <Link to="/notificacoes">Empório de Corujas</Link>
      </li>
    </Container>
  );
}
