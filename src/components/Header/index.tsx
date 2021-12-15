import homeIcon from '../../assets/icons/plataform.svg';
import menuIcon from '../../assets/icons/menu.svg';
import wandIcon from '../../assets/icons/wand.svg';
import userPhotoIcon from '../../assets/images/userPhoto.jpg';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { MenuMobile } from './MenuMobile';

export function Header() {
  const [ isScrollTop, setIsScrollTop ] = useState<boolean>(true);
  const [ isMenuMobileOpen, setIsMenuMobileOpen ] = useState<boolean>(false);

  function handleScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      setIsScrollTop(false);
    } else {
      setIsScrollTop(true);
    }
  }

  window.addEventListener('scroll', handleScroll);

  function toggleMenuMobile() {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  }

  function closeMenuMobile() {
    isMenuMobileOpen && setIsMenuMobileOpen(!isMenuMobileOpen);
  }


  return (
    <Container className={isScrollTop ? '' : 'active'}>
      <div className="container">
        <div className="logoWrapper"><Link to="/"><img src={homeIcon} alt="Home" /></Link></div>
  
        <div className="menuMobileIcon" onClick={toggleMenuMobile}>
          <img src={menuIcon} alt="Home" />
        </div>
  
        <MenuMobile isMenuMobileOpen={isMenuMobileOpen} toggleMenuMobile={toggleMenuMobile}/>

        <ul className="menuDesktop">
          <li><Link to="/escola">Hogwarts</Link></li>
          <li><Link to="/time">Gryffindor</Link></li>
          <li><Link to="/disputas">Duelos</Link></li>
          <li><Link to="/notificacoes">Empório de Corujas</Link></li>
        </ul>

        <Link to="/perfil" className="profile" onClick={closeMenuMobile}>
          <img src={wandIcon} alt="Varinha" />
          <div>
            <span>HARRY POTTER</span>
            <br />
            <span>Bruxo 1</span>
          </div>
          <div className="userRounded">
            <img src={userPhotoIcon} alt="Harry Potter" />
          </div>
        </Link>
      </div>
    </Container>
  );
}
