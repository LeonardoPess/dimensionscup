import homeButtonIcon from '../../assets/icons/934.svg';
import skullIcon from '../../assets/icons/skull.svg';
import backgroundHomeImg from '../../assets/images/backgroundHome.png';
import lastestNewsImg from '../../assets/images/news.png';
import castleImg from '../../assets/images/castle.png';

import { Link } from 'react-router-dom';

import { Button } from "../../components/Button";
import { CallToActionBox } from '../../components/CallToActionBox';

import { LastestNews, Welcome } from "./styles";

export function Home() {
  return (
    <>
      <Welcome style={{backgroundImage: `url(${backgroundHomeImg})`}}>
        <div className="container">
          <h1>BEM VINDO A HOGWARTS</h1>
          <p>Um convite de boas vindas a magia de J. K Rowling. O mundo dos trouxas pode não te compreender... 
            Mais tenho certeza que junto as pessoas certas..Melhor dizendo... os bruxos... 
            Você estará no caminho da magia, e será um excelente bruxo.</p>
            <Link to="escola">
              <Button text="EMBARCAR PARA HOGWARTS" color="#3A337C" icon={homeButtonIcon}/>
            </Link>
        </div>
      </Welcome>

      <LastestNews>
        <h1>ÚLTIMAS NOTÍCIAS</h1>

        <div className="newsWrapper">
          <div>
            <img src={lastestNewsImg} alt="News" />
            <h1>Which Yule Ball character would you be?</h1>
          </div>

          <div>
            <h1>Which Yule Ball character would you be?</h1>
            <img src={lastestNewsImg} alt="News" />
          </div>
        </div>
      </LastestNews>

      <CallToActionBox
        callActionUrl="/"
        title="VEJA OS DUELOS MAIS FAMOSOS"
        image={castleImg}
        textButton="ACOMPANHAR DUELOS"
        iconButton={skullIcon}
      />
    </>
  );
}
