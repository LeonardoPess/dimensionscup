import { Link } from 'react-router-dom';

import { Button } from '../Button';

import { Container } from './styles';

interface CallToActionBoxProps {
  callActionUrl: string;
  title: string;
  text?: string;
  image: string;
  textButton: string;
  colorButton?: string;
  iconButton: string;
  left?: boolean;
}

export function CallToActionBox({ callActionUrl, title, text, textButton, colorButton, iconButton, image, left }: CallToActionBoxProps) {
  return (
    <Container className={left ? 'left' : 'right'}>
      <div className="textWrapper">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to={callActionUrl}>
          <Button text={textButton} color={colorButton ? colorButton : '#3A337C'} icon={iconButton} />
        </Link>
      </div>
      <div className="backgroundImage" style={{backgroundImage: `url(${image})`}}></div>
    </Container>
  );
}
