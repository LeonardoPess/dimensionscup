import hatIcon from '../../../assets/icons/hat.svg';

import { Button } from '../../Button';

import { Container } from './styles';

export function ActivitiesBox() {
  return (
    <Container>
      <h1>AULA CREATE-REACT-APP</h1>

      <p>Aula da Trilha de ReactJS(frontend) e do curso da Rocketseat ensinando sobre o create-react-app...</p>

      <span>das 10:21 às 11:48</span>
      <Button text="Acessar" icon={hatIcon}/>
    </Container>
  );
}
