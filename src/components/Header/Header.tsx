import { BTLogo, Burguer, MenuDrawer } from './components';
import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Header>
      <BTLogo />
      <Burguer />
      <MenuDrawer />
    </S.Header>
  );
};

export default Header;
