import skullIcon from '../../assets/icons/skull.svg';
import classroomImg from '../../assets/images/classroom.png';
import quadribolImg from '../../assets/images/quadribol.jpg';
import forumImg from '../../assets/images/forum.png';
import libraryImg from '../../assets/images/library.png';
import diaryImg from '../../assets/images/diary.jpg';

import { CallToActionBox } from '../../components/CallToActionBox';
import { DailyChallenge } from '../../components/DailyChallenge';

import { Container } from "./styles";

export function School() {
  return (
    <Container>
      <DailyChallenge
        numberChallenge="01"
        challenge="PASSAR 20 MINUTOS NA BIBLIOTECA"
        userXp={14}
        teamXp={34}
      />

      <CallToActionBox
        callActionUrl="/trilha"
        title="APRENDER UMA MAGIA"
        image={classroomImg}
        textButton="APRENDER"
        iconButton={skullIcon}
        left={true}
      />

      <CallToActionBox
        callActionUrl="/tarefas"
        title="TREINAMENTO DE QUADRIBOL"
        text="Faça seu treinamento diário para pegar o  pomo de ouro e não deixar a outra casa vencer!"
        image={quadribolImg}
        textButton="QUADRIBOL"
        iconButton={skullIcon}
      />

      <CallToActionBox
        callActionUrl="/diario"
        title="DIARIO DE TOM RIDDLE"
        text="Faça seu treinamento diário para pegar o  pomo de ouro e não deixar a outra casa vencer!"
        image={diaryImg}
        textButton="DIARIO"
        iconButton={skullIcon}
        left={true}
      />

      <CallToActionBox
        callActionUrl="/biblioteca"
        title="BIBLIOTECA"
        text="Dezenas de milhares de conteúdos sobre milhares dos demais variados. A biblioteca é o 
        lugar onde os alunos podem ir para aprender ou pegar projetos desenvolvidos para 
        complementar seus estudos (ou para entretenimento pessoal)."
        image={libraryImg}
        textButton="BIBLIOTECA"
        iconButton={skullIcon}
      />

      <CallToActionBox
        callActionUrl="/forum"
        title="SALA PRECISA"
        text="É uma sala em que uma pessoa só poder entrar quando tiver uma real necessidade dela. Algumas vezes está lá, e algumas vezes não está, mas quando aparece, sempre estará equipada com o necessário para o bruxo"
        image={forumImg}
        textButton="SALA PRECISA"
        iconButton={skullIcon}
        left={true}
      />
    </Container>
  );
}
