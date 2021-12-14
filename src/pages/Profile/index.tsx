import hatIcon from '../../assets/icons/hat.svg';

import { AsideProfile } from '../../components/AsideProfile';
import { Class } from '../../components/Class';
import { Title } from '../../components/Title';

import { Container } from "./styles";

export function Profile() {
  return (
    <Container>
      <Title text="VOCÊ VIU ESSE BRUXO?" icon={hatIcon} />

      <main>
        <AsideProfile />
        <Class/>
      </main>
    </Container>
  );
}
