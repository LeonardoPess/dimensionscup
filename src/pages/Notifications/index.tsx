import featherIcon from '../../assets/icons/feather.svg';
import broomIcon from '../../assets/icons/broom.svg';
import skullIcon from '../../assets/icons/skull.svg';
import arrowRoundLeftIcon from '../../assets/icons/arrowRoundLeft.svg';
import arrowRoundRightIcon from '../../assets/icons/arrowRoundRight.svg';
import letterImg from '../../assets/images/backgroundLetters.png';

import { Button } from '../../components/Button';

import { Container } from "./styles";

export function Notifications() {
  return (
    <Container style={{backgroundImage: `url(${letterImg})`}}>
      <img src={arrowRoundLeftIcon} alt="Arrow left" />
      <div>
        <h1>VOCÊ RECEBEU UM DESAFIO AMIGAVEL</h1>
        <p>Você recebeu um convite para um duelo individual contra a Maria(Campeã Torneio Tribruxo) <img src={featherIcon} alt="Pena" /></p>
        <div className="buttonWrapper">
          <Button text="DUELAR" color="#AA8855" icon={skullIcon} />
          <Button text="RECUSAR" color="#AA8855" icon={broomIcon} />
        </div>
      </div>
      <img src={arrowRoundRightIcon} alt="Arrow right" />
    </Container>
  );
}
