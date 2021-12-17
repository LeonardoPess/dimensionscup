import skullIcon from '../../assets/icons/skull.svg';
import lastestNewsImg from '../../assets/images/news.png';
import castleImg from '../../assets/images/castle.png';

import { Link } from 'react-router-dom';

import { Button } from "../../components/Button";
import { CallToActionBox } from '../../components/CallToActionBox';
import { useEffect, useState } from 'react';

import { LastestNews, Welcome } from "./styles";

interface ThemeInfo {
  home: {
    top: {
      backgroundImage: string;
      title: string;
      text: string;
      buttonText: string;
      buttonIcon: string;
      buttonColor: string;
    }
  }
}

export function Home() {
  const [ themeInfo, setThemeInfo ] = useState<ThemeInfo>();

  useEffect( () => {
    async function fetchThemeInfo() {
      try {
        const response = await fetch('http://leonardo-qa.brainlegacy.com/themes/harrypotter-pt.php');
        const data = await response.json();
        console.log(data)
        setThemeInfo(data);
      } catch (e) {
        console.error(e)
      }
    }

    fetchThemeInfo();
  }, [])

  return (
    <>
      <Welcome style={{backgroundImage: `url(${themeInfo?.home.top.backgroundImage})`}}>
        <div className="container">
          <h1>{themeInfo?.home.top.title}</h1>
          <p>{themeInfo?.home.top.text}</p>
            <Link to="escola">
              <Button text="EMBARCAR PARA HOGWARTS" color={themeInfo?.home.top.buttonColor} icon={themeInfo?.home.top.buttonIcon}/>
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
