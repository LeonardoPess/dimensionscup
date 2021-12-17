import hatIcon from '../../assets/icons/hat.svg';

import { AsideProfile } from '../../components/Profile/AsideProfile';
import { Title } from '../../components/Title';
import { About } from '../../components/Profile/About';
import { Portfolio } from '../../components/Profile/Portfolio';
import { Interests } from '../../components/Profile/Interests';
import { Technology } from '../../components/Profile/Technology';
import { Activities } from '../../components/Profile/Activities';
import { ExperienceProgress } from '../../components/Profile/ExperienceProgress';

import { Container } from "./styles";

export function Profile() {
  return (
    <Container>
      <div className="profileTop">
        <Title text="VOCÊ VIU ESSE BRUXO?" icon={hatIcon} />
        <ExperienceProgress />
      </div>

      <main>
        <AsideProfile />
        <div>
          <About />
          <Portfolio />
          <Technology />
          <Interests />
          <Activities />
        </div>
      </main>
    </Container>
  );
}
