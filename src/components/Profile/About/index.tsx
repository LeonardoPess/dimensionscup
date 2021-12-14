import hatIcon from '../../../assets/icons/hat.svg';

import { Button } from '../../Button';

import { Container } from './styles';

export function About() {
  return (
    <Container>
      <h1>PROFECIA</h1>

      <p>Atualmente estou estudando React e buscando melhorar meus conhecimentos JavaScript!</p>
      <p>Meus principais conhecimentos são no Front-End com html, css e js, já no Back-End eu tenho 
        noção em PHP e MySQL e já consigo desenvolver algumas aplicações!</p>
      <p>Estudo a mais de 1 ano focado, minhas experiências foram como freelancer, vou continuar estudando
        buscando a fluência no inglês (sou intermediário) e sem desviar o foco do Front-End com React,
        buscando conseguir mais oportunidades na área!</p>

      <div className="buttonsWrapper">
        <Button text="GitHub" icon={hatIcon}/>
        <Button text="Linkedin" icon={hatIcon}/>
      </div>
    </Container>
  );
}
