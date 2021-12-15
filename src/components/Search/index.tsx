import searchIcon from '../../assets/icons/search.svg';

import { Container } from './styles';

export function Search() {
  return (
    <Container>
      <label htmlFor="search"><img src={searchIcon} alt="Search" /></label>
      <input type="text" id="search" placeholder="10/12/2021" />
    </Container>
  );
}
