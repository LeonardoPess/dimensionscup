import skullIcon from '../../assets/icons/skull.svg';
import hatIcon from '../../assets/icons/hat.svg';

import { Link } from 'react-router-dom';

import { Container } from './styles';
import { Button } from '../Button';

export function Class() {
  return (
    <Container>
      <div className="classWrapper">
          <iframe width="1350" height="488" src="https://www.youtube.com/embed/jNJmp7iic8c" title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <h1>CREATE REACT APP</h1>
      <p>Use an integrated toolchain for the best user and developer experience.</p>
      <div className="classInfoWrapper">
        <span>Diego Fernandes</span>
        <span>10/10/2020</span>
      </div>

      <div className="buttonWrapper">
        <Button text="DESAFIO DA TRILHA" color="#3A337C" icon={skullIcon}/>
        <Button text="CONCLUIR" color="#3A337C" icon={hatIcon}/>
      </div>

      <textarea placeholder="Faça uma pergunta para sua turma..."></textarea>
    </Container>
  );
}
