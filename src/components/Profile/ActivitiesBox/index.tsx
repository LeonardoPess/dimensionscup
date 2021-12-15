import hatIcon from '../../../assets/icons/hat.svg';

import { Button } from '../../Button';

import { Container } from './styles';

export function ActivitiesBox() {
  return (
    <Container>
      <div>
        <h1>AULA CREATE-REACT-APP</h1>
        <span>das 10:21 às 11:48</span>
      </div>

      <p>Aula da Trilha de ReactJS(frontend) e do curso da Rocketseat ensinando s’obre o create-react-app...</p>

      <Button text="GitHub" icon={hatIcon}/>
    </Container>
  );
}
