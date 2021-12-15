import hatIcon from '../../assets/icons/hat.svg';
import tagIcon from '../../assets/icons/tag.svg';

import { AsideProfile } from '../../components/Profile/AsideProfile';
import { Title } from '../../components/Title';
import { TimeSeparator } from '../../components/Profile/TimeSeparator';
import { Search } from '../../components/Search';
import { ActivitiesBox } from '../../components/Profile/ActivitiesBox';

import { Container } from "./styles";

export function Timeline() {
  return (
    <Container>
      <div className="timelineTop">
      <Title text="MAPA DO MAROTO" icon={hatIcon} />
      <div>
        <img src={tagIcon} alt="Tag" />
        <Search />
      </div>
    </div>

      <main>
        <AsideProfile />
        <div>
          <TimeSeparator time="10/12/2021"/>
          <ActivitiesBox />
          <ActivitiesBox />
          <ActivitiesBox />
          <TimeSeparator time="09/12/2021"/>
          <ActivitiesBox />
          <ActivitiesBox />
        </div>
      </main>
    </Container>
  );
}
