import skullIcon from '../../../assets/icons/skull.svg';
import hatIcon from '../../../assets/icons/hat.svg';
import classImg from '../../../assets/images/class.png';

import { Link } from 'react-router-dom';

import { Container } from './styles';
import { Button } from '../../Button';

export function Course() {
  return (
    <Container>
      <Link to="/trilha/frontend/reactjs/origamid">
        <img src={classImg} alt="Curso" />
        <h1>ORIGAMID</h1>
        <p>Neste curso você irá aprender a como utilizar o React do zero para o desenvolvimento de aplicações web reativas.</p>
        <p>Você irá aprender a criar um aplicativo web com funcionalidades parecidas de redes sociais como o Instagram.</p>
        <p>O foco do curso é no entendimento completo do React, com isso praticamente tudo será criado do zero, 
        sem a dependência de pacotes externos.</p>
        <span>10/10/2020</span>
      </Link>
      <div className="buttonWrapper">
        <Button text="DESAFIO DA TRILHA" color="#3A337C" icon={skullIcon}/>
        <Button text="CONCLUIR" color="#3A337C" icon={hatIcon}/>
      </div>

      <textarea placeholder="Faça uma pergunta para sua turma..."></textarea>
    </Container>
  );
}
