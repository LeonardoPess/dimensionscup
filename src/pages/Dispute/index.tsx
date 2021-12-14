import skullIcon from '../../assets/icons/skull.svg';
import duelImg from '../../assets/images/duel.png';
import { Button } from '../../components/Button';

import { Container } from "./styles";

export function Dispute() {
  return (
    <Container style={{backgroundImage: `url(${duelImg})`}}>
      <div>
        <p>PROCURAR DUELOS COMPETITIVOS PARA BRUXOS</p>
        <p>CATEGORIA DA MAGIA:</p>
        <select>
          <option>FRONTEND</option>
          <option>FRONTEND</option>
          <option>FRONTEND</option>
        </select>
        <p>MAGIA:</p>
        <select>
          <option>REACTJS</option>
          <option>REACTJS</option>
          <option>REACTJS</option>
        </select>
        <Button text="DUELAR" color="#3A337C" icon={skullIcon} />
      </div>
    </Container>
  );
}
