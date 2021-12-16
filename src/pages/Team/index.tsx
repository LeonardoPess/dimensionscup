import shieldIcon from '../../assets/icons/shield.svg';
import cauldronIcon from '../../assets/icons/cauldron.svg';
import skullIcon from '../../assets/icons/skull.svg';
import teamImg from '../../assets/images/team.png';
import lightningIcon from '../../assets/icons/lightning.svg';
import glassesIcon from '../../assets/icons/glasses.svg';

import { Button } from '../../components/Button';
import { Score } from '../../components/Score';
import { Title } from '../../components/Title';
import { Link } from 'react-router-dom';

import { Container } from "./styles";

export function Team() {
  return (
    <Container>
      <div className="teamTop" style={{backgroundImage: `url(${teamImg})`}}>
        <div>
          <div className="challengeNumber">
            <img src={shieldIcon} alt="Desafio" />
            <span>46</span>
          </div>
          <p>CONCLUIR 13/60 POMODOROS</p>
          <div className="scoreWrapper">
            <Score score={23} icon={lightningIcon} size={50}/>
            <Score score={65} icon={shieldIcon} size={50}/>
          </div>
        </div>
      </div>

      <section className="teamPlayers">
        <Title text="GRYFFINDOR" icon={shieldIcon} />

        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <th>MEMBROS</th>
                <th>LEVEL</th>
                <th>CARGO</th>
                <th>EMBLEMAS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/perfil">LEONARDO PESSOA 02</Link></td>
                <td>EXPECTO PATRONUM</td>
                <td>MINISTRO DA MÁGIA</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
              <tr>
                <td><Link to="/perfil">LEONARDO PESSOA 02</Link></td>
                <td>EXPECTO PATRONUM</td>
                <td>MINISTRO DA MÁGIA</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
              <tr>
                <td><Link to="/perfil">LEONARDO PESSOA 02</Link></td>
                <td>EXPECTO PATRONUM</td>
                <td>MINISTRO DA MÁGIA</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
              <tr>
                <td><Link to="/perfil">LEONARDO PESSOA 02</Link></td>
                <td>EXPECTO PATRONUM</td>
                <td>MINISTRO DA MÁGIA</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <Button text="DUELO AMIGÁVEL" icon={skullIcon} />
      </section>

      <section className="teamPlayers">
        <Title text="DESAFIOS" icon={cauldronIcon} />

        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <th>DESAFIO</th>
                <th>LEVEL MÍNIMO</th>
                <th>EXPIRAÇÃO</th>
                <th>RECOMPENSAS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/perfil">Blog</Link></td>
                <td>EXPECTO PATRONUM</td>
                <td>10/01/2022</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
              <tr>
                <td><Link to="/perfil">Landing Page</Link></td>
                <td>EXPECTO PATRONUM</td>
                <td>10/01/2022</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
              <tr>
                <td><Link to="/perfil">Landing Page</Link></td>
                <td>EXPECTO PATRONUM</td>
                <td>10/01/2022</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
              <tr>
                <td><Link to="/perfil">Landing Page</Link></td>
                <td>EXPECTO PATRONUM</td>
                <td>10/01/2022</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <Button text="ENTREGAR DESAFIO" icon={skullIcon} />
      </section>

      <section className="teamPlayers">
        <Title text="DESAFIOS ENTREGES" icon={shieldIcon} />

        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <th>DESAFIO</th>
                <th>APROVAÇÃO</th>
                <th>ENTREGA</th>
                <th>RECOMPENSAS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/perfil">Blog</Link></td>
                <td>PENDENTE</td>
                <td>10/01/2022</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
              <tr>
                <td><Link to="/perfil">Landing Page</Link></td>
                <td>APROVADO</td>
                <td>10/01/2022</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
              <tr>
                <td><Link to="/perfil">Landing Page</Link></td>
                <td>APROVADO</td>
                <td>10/01/2022</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
              <tr>
                <td><Link to="/perfil">Landing Page</Link></td>
                <td>APROVADO</td>
                <td>10/01/2022</td>
                <td><img src={glassesIcon} alt="reward" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </Container>
  );
}
