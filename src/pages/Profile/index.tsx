import hatIcon from '../../assets/icons/hat.svg';

import { AsideProfile } from '../../components/Profile/AsideProfile';
import { Title } from '../../components/Title';
import { About } from '../../components/Profile/About';
import { Portfolio } from '../../components/Profile/Portfolio';
import { Interests } from '../../components/Profile/Interests';

import { Container } from "./styles";

export function Profile() {
  return (
    <Container>
      <Title text="VOCÊ VIU ESSE BRUXO?" icon={hatIcon} />

      <main>
        <AsideProfile />
        <div>
          <About />
          <Portfolio />
          <Interests />
        </div>
      </main>
    </Container>
  );
}
