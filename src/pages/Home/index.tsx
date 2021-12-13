import homeButtonIcon from '../../assets/icons/934.svg';
import backgroundHome from '../../assets/images/backgroundHome.png';
import lastestNews from '../../assets/images/news.png';

import { Button } from "../../components/Button";

import { LastestNews, Welcome } from "./styles";

export function Home() {
  return (
    <>
      <Welcome style={{backgroundImage: `url(${backgroundHome})`}}>
        <div className="container">
          <h1>BEM VINDO LEONARDO</h1>
          <p>Um convite de boas vindas a magia de J. K Rowling. O mundo dos trouxas pode não te compreender... 
            Mais tenho certeza que junto as pessoas certas..Melhor dizendo... os bruxos... 
            Você estará no caminho da magia, e será um excelente bruxo.</p>
          <Button text="EMBARCAR PARA HOGWARTS" color="#3A337C" icon={homeButtonIcon}/>
        </div>
      </Welcome>

      <LastestNews>
        <h1>ÚLTIMAS NOTÍCIAS</h1>

        <div className="newsWrapper">
          <div>
            <img src={lastestNews} alt="News" />
            <h1>Which Yule Ball character would you be?</h1>
          </div>

          <div>
            <h1>Which Yule Ball character would you be?</h1>
            <img src={lastestNews} alt="News" />
          </div>
        </div>
      </LastestNews>
    </>
  );
}
