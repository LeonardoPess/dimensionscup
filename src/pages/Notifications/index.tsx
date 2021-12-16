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
      <div>
        <img src={arrowRoundLeftIcon} alt="Arrow left" />
        <img src={arrowRoundRightIcon} alt="Arrow right" />

        <h1>PEGUE SUA VARINHA, VOCÊ FOI DESAFIADO PARA UM DUELO</h1>
        <p>Você recebeu um convite para um duelo individual contra a Maria(Torneio Tribruxo) <img src={featherIcon} alt="Pena" /></p>
        <div className="buttonWrapper">
          <Button text="DUELAR" color="#AA8855" icon={skullIcon} />
          <Button text="RECUSAR" color="#AA8855" icon={broomIcon} />
        </div>
      </div>
    </Container>
  );
}
